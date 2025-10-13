// Shim to support static recipe scripts for sites without a backend.
// Recipe files will either call `registerRecipe(recipe)` directly or
// push a factory into `window.__preRegisteredRecipes` if registerRecipe
// isn't available yet. This shim collects them and exposes registerRecipe.
window.__registeredRecipes = window.__registeredRecipes || [];
window.registerRecipe = function(recipe) {
    // Accept either a recipe object or a function that returns one
    if (typeof recipe === 'function') {
        try { window.__registeredRecipes.push(recipe()); } catch(e) { console.error(e); }
    } else {
        window.__registeredRecipes.push(recipe);
    }
};

// Process any pre-registered factories that recipe scripts may have queued
if (Array.isArray(window.__preRegisteredRecipes)) {
    window.__preRegisteredRecipes.forEach(fn => {
        try { window.registerRecipe(fn); } catch (e) { console.error(e); }
    });
    // clear to free memory
    window.__preRegisteredRecipes.length = 0;
}

let recipes = [];
let filteredRecipes = [];
let currentCategory = 'all';
// units preference: 'metric' or 'imperial'
let unitsPref = localStorage.getItem('units_pref') || 'metric';

// Load recipes from registered JS files (single source of truth)
function loadRecipes() {
    try {
        if (window.__registeredRecipes && window.__registeredRecipes.length) {
            recipes = window.__registeredRecipes.slice();
            filteredRecipes = [...recipes];
            renderRecipes(recipes);
        } else {
            // No recipes registered - show message
            recipes = [];
            filteredRecipes = [];
            document.getElementById('recipesGrid').innerHTML = '<p>No recipes available. Please check that recipe JS files are loading correctly.</p>';
        }
    } catch (error) {
        console.error('Error loading recipes:', error);
        recipes = [];
        filteredRecipes = [];
        document.getElementById('recipesGrid').innerHTML = '<p>Error loading recipes.</p>';
    }
}

function getInitials(title) {
    return title.split(' ').slice(0, 2).map(w => w[0] ? w[0].toUpperCase() : '').join('');
}

function renderRecipes(recipesToRender) {
    const grid = document.getElementById('recipesGrid');
    grid.innerHTML = recipesToRender.map(recipe => {
        const initials = getInitials(recipe.title);
        const imageContent = recipe.image 
            ? `<img src="${recipe.image}" alt="${recipe.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`
            : `<div class="recipe-initials">${initials}</div>`;
        
        return `
        <div class="recipe-card" onclick="openModal(${recipe.id})" role="button" tabindex="0">
            <div class="recipe-image">
                ${imageContent}
                <div class="recipe-category">${recipe.category}</div>
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <div style="display:flex;gap:.6rem;align-items:center">
                        <div class="meta-item">⏱ ${recipe.time}</div>
                        <div class="meta-item">👥 ${recipe.servings}</div>
                    </div>
                    <button class="view-recipe" type="button">View Recipe</button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function filterRecipes(category, btn) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    filteredRecipes = category === 'all' ? [...recipes] : recipes.filter(r => r.category === category);
    renderRecipes(filteredRecipes);
}

function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    // clear filter active state
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    filteredRecipes = recipes.filter(r => r.title.toLowerCase().includes(searchTerm) || r.description.toLowerCase().includes(searchTerm));
    renderRecipes(filteredRecipes);
}

// --- Ingredient scaling helpers ---
function parseMixedNumber(token) {
    // handles "1 1/2" or "3/4"
    token = token.trim();
    const mixed = token.match(/^(\d+)\s+(\d+)\/(\d+)$/);
    if (mixed) {
        return parseInt(mixed[1], 10) + (parseInt(mixed[2], 10) / parseInt(mixed[3], 10));
    }
    const frac = token.match(/^(\d+)\/(\d+)$/);
    if (frac) {
        return parseInt(frac[1], 10) / parseInt(frac[2], 10);
    }
    const num = parseFloat(token);
    return isNaN(num) ? null : num;
}

function formatNumber(n) {
    if (n == null) return '';
    // integer
    if (Math.abs(n - Math.round(n)) < 1e-6) return String(Math.round(n));
    // handle mixed numbers > 1
    const whole = Math.floor(Math.abs(n));
    const fracPart = Math.abs(n) - whole;
    // candidate denominators we support
    const dens = [2, 3, 4, 6, 8];
    let best = { err: Infinity, num: 0, den: 1 };
    for (const d of dens) {
        const num = Math.round(fracPart * d);
        const err = Math.abs(fracPart - (num / d));
        if (err < best.err) { best = { err, num, den: d }; }
    }
    if (best.err < 0.03 && best.num !== 0) {
        const sign = n < 0 ? '-' : '';
        if (whole === 0) return `${sign}${best.num}/${best.den}`;
        return `${sign}${whole} ${best.num}/${best.den}`;
    }
    return (Math.round(n * 100) / 100).toString();
}

// Unit conversion helper: convert value and unit to target system
function convertUnit(value, unit, targetSystem) {
    if (!unit) return { value, unit };
    const u = unit.toLowerCase();
    // normalize to base: grams for weight, ml for volume
    const weightUnits = { g: 1, gram: 1, grams: 1, kg: 1000, kilogram: 1000, kilograms: 1000, oz: 0.0, ounce: 0.0, lb: 0.0, pound: 0.0 };
    const volumeUnits = { ml: 1, milliliter: 1, l: 1000, liter: 1000, litre: 1000, tsp: 4.92892, teaspoon: 4.92892, tbsp: 14.7868, tablespoon: 14.7868, cup: 240 };

    // detect weight units
    if (/^(g|gram|grams|kg|kilogram|kilograms|oz|ounce|ounces|lb|lbs|pound|pounds)$/i.test(u)) {
        // convert any to grams
        let grams = null;
        if (/^(g|gram|grams)$/i.test(u)) grams = value;
        else if (/^(kg|kilogram|kilograms)$/i.test(u)) grams = value * 1000;
        else if (/^(oz|ounce|ounces)$/i.test(u)) grams = value / 0.035274;
        else if (/^(lb|lbs|pound|pounds)$/i.test(u)) grams = value / 0.00220462;

        if (targetSystem === 'imperial') {
            // prefer oz, but if > 16 oz, use lb
            const oz = grams * 0.035274;
            if (oz >= 16) return { value: oz / 16, unit: 'lb' };
            return { value: oz, unit: 'oz' };
        } else {
            // metric: use g or kg
            if (grams >= 1000) return { value: grams / 1000, unit: 'kg' };
            return { value: grams, unit: 'g' };
        }
    }

    // detect volume units
    if (/^(ml|milliliter|l|liter|litre|tsp|teaspoon|tbsp|tablespoon|cup|cups|fl oz|floz|oz)$/i.test(u)) {
        // convert any to ml
        let ml = null;
        if (/^(ml|milliliter)$/i.test(u)) ml = value;
        else if (/^(l|liter|litre)$/i.test(u)) ml = value * 1000;
        else if (/^(tsp|teaspoon)$/i.test(u)) ml = value * 4.92892;
        else if (/^(tbsp|tablespoon)$/i.test(u)) ml = value * 14.7868;
        else if (/^(cup|cups)$/i.test(u)) ml = value * 240;
        else if (/^(fl oz|floz|oz)$/i.test(u)) ml = value / 0.033814;

        if (targetSystem === 'imperial') {
            const floz = ml * 0.033814;
            if (floz >= 8) return { value: floz / 8, unit: 'cup' }; // use cups for larger volumes
            return { value: floz, unit: 'fl oz' };
        } else {
            if (ml >= 1000) return { value: ml / 1000, unit: 'L' };
            return { value: ml, unit: 'ml' };
        }
    }

    // default: no conversion
    return { value, unit };
}

function scaleIngredient(ingredient, factor, targetUnits) {
    // Try to detect a leading quantity (mixed number, fraction, or decimal/integer, possibly attached to unit like '400g')
    const trimmed = ingredient.trim();
    // Mixed number like '1 1/2'
    const mixedMatch = trimmed.match(/^(\d+\s+\d+\/\d+)(?:\s+|\b)(.*)/);
    if (mixedMatch) {
        const val = parseMixedNumber(mixedMatch[1]);
        const scaled = val * factor;
        return `${formatNumber(scaled)} ${mixedMatch[2]}`.trim();
    }
    // fraction like '3/4'
    const fracMatch = trimmed.match(/^(\d+\/\d+)(?:\s+|\b)(.*)/);
    if (fracMatch) {
        const val = parseMixedNumber(fracMatch[1]);
        const scaled = val * factor;
        return `${formatNumber(scaled)} ${fracMatch[2]}`.trim();
    }
    // number with optional unit attached (e.g., '400g' or '2kg') at start
    const numUnitMatch = trimmed.match(/^([0-9]+(?:\.[0-9]+)?)([a-zA-Z%°µ]*)\b(?:\s*)(.*)$/);
    if (numUnitMatch) {
        const val = parseFloat(numUnitMatch[1]);
        if (!isNaN(val)) {
            const unit = numUnitMatch[2] || '';
            const rest = numUnitMatch[3] || '';
            const scaled = val * factor;
            // try unit conversion if requested
            if (targetUnits) {
                const converted = convertUnit(scaled, unit, targetUnits);
                return `${formatNumber(converted.value)}${converted.unit ? ' ' + converted.unit : ''} ${rest}`.trim();
            }
            return `${formatNumber(scaled)}${unit} ${rest}`.trim();
        }
    }
    // number with space then unit (e.g., '2 cups')
    const numSpaceMatch = trimmed.match(/^([0-9]+(?:\.[0-9]+)?)(?:\s+)([^\s].*)$/);
    if (numSpaceMatch) {
        const val = parseFloat(numSpaceMatch[1]);
        if (!isNaN(val)) {
            const rest = numSpaceMatch[2];
            const scaled = val * factor;
            // if rest starts with a unit token, attempt convert
            const unitTokenMatch = rest.match(/^([a-zA-Z%°µ]+)\b(.*)$/);
            if (unitTokenMatch && targetUnits) {
                const unit = unitTokenMatch[1];
                const tail = unitTokenMatch[2] ? unitTokenMatch[2].trim() : '';
                const converted = convertUnit(scaled, unit, targetUnits);
                return `${formatNumber(converted.value)} ${converted.unit ? converted.unit : unit} ${tail}`.trim();
            }
            return `${formatNumber(scaled)} ${rest}`.trim();
        }
    }
    // fallback: no leading number, return unchanged
    return ingredient;
}

function openModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    const origServings = Number(recipe.servings) || 1;
    // load persisted servings for this recipe if present
    const savedKey = `recipe_servings_${recipe.id}`;
    const saved = Number(localStorage.getItem(savedKey));
    const initialServings = saved && saved > 0 ? saved : origServings;
    const modalBody = document.getElementById('modalBody');
    // build ingredients list with data-original attributes so we can rescale
    const ingredientsHtml = recipe.ingredients.map(ing => `<li data-orig="${ing.replace(/"/g, '\"')}">${ing}</li>`).join('');
    const imageHtml = recipe.image 
        ? `<div style="text-align:center;margin-bottom:2rem;position:relative;">
             <img src="${recipe.image}" alt="${recipe.title}" style="max-width:100%;height:auto;border-radius:16px;max-height:300px;object-fit:cover;box-shadow:0 16px 40px rgba(23,32,42,0.15);">
             <div style="position:absolute;bottom:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--primary),var(--accent));color:white;padding:.5rem 1rem;border-radius:20px;font-size:.85rem;font-weight:600;box-shadow:0 8px 24px rgba(38,70,83,0.3);">${recipe.category}</div>
           </div>`
        : '';
    modalBody.innerHTML = `
        <h2>${recipe.title}</h2>
        ${imageHtml}
        <div class="modal-section">
            <h3>📋 Recipe Details</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin-bottom:1.5rem">
                <div style="text-align:center;padding:1rem;background:rgba(42,157,143,0.05);border-radius:12px;border:1px solid rgba(42,157,143,0.1)">
                    <div style="font-size:1.5rem;margin-bottom:.5rem">⏱️</div>
                    <div style="font-weight:600;color:var(--primary)">${recipe.time}</div>
                    <div style="font-size:.8rem;color:var(--muted)">Cook Time</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(42,157,143,0.05);border-radius:12px;border:1px solid rgba(42,157,143,0.1)">
                    <div style="font-size:1.5rem;margin-bottom:.5rem">👥</div>
                    <div style="font-weight:600;color:var(--primary)">${recipe.servings}</div>
                    <div style="font-size:.8rem;color:var(--muted)">Servings</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(42,157,143,0.05);border-radius:12px;border:1px solid rgba(42,157,143,0.1)">
                    <div style="font-size:1.5rem;margin-bottom:.5rem">📊</div>
                    <div style="font-weight:600;color:var(--primary)">${recipe.difficulty}</div>
                    <div style="font-size:.8rem;color:var(--muted)">Difficulty</div>
                </div>
            </div>
            <div style="display:flex;gap:1rem;align-items:center;justify-content:center;flex-wrap:wrap;background:rgba(247,249,251,0.8);padding:1.5rem;border-radius:12px;border:1px solid var(--border)">
                <label style="display:flex;align-items:center;gap:.5rem;font-weight:600;color:var(--primary)">
                    👥 Servings:
                    <input id="servingsInput" type="number" min="1" value="${initialServings}" style="width:70px;padding:.5rem;border:2px solid var(--border);border-radius:8px;text-align:center;font-weight:600">
                </label>
                <label style="display:flex;align-items:center;gap:.5rem;font-weight:600;color:var(--primary)">
                    📏 Units:
                    <select id="unitsSelect" style="padding:.5rem .75rem;border:2px solid var(--border);border-radius:8px;font-weight:600;background:white">
                        <option value="metric">Metric</option>
                        <option value="imperial">Imperial</option>
                    </select>
                </label>
                <button id="resetServingsBtn" type="button" style="background:linear-gradient(135deg,var(--primary),var(--accent));color:white;border:none;padding:.5rem 1rem;border-radius:8px;cursor:pointer;font-weight:600;transition:transform .2s ease">
                    🔄 Reset
                </button>
            </div>
        </div>
        <div class="modal-section">
            <h3>🥘 Ingredients</h3>
            <ul id="ingredientsList">${ingredientsHtml}</ul>
        </div>
        <div class="modal-section">
            <h3>👨‍🍳 Instructions</h3>
            <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
        </div>
    `;

    // attach input listener to rescale ingredients
    const servingsInput = document.getElementById('servingsInput');
    // units select initial value
    const unitsSelect = document.getElementById('unitsSelect');
    unitsSelect.value = unitsPref;
    unitsSelect.addEventListener('change', function () {
        unitsPref = this.value;
        try { localStorage.setItem('units_pref', unitsPref); } catch (e) { }
        rescale();
    });

    function rescale() {
        const desired = Number(servingsInput.value) || origServings;
        const factor = desired / origServings;
        const list = document.getElementById('ingredientsList');
        Array.from(list.children).forEach(li => {
            const orig = li.getAttribute('data-orig');
            // pass targetUnits based on unitsPref
            li.textContent = scaleIngredient(orig, factor, unitsPref === 'metric' ? 'metric' : 'imperial');
        });
        // persist chosen servings
        try { localStorage.setItem(savedKey, String(desired)); } catch (e) { /* ignore storage errors */ }
    }
    servingsInput.addEventListener('input', rescale);
    // reset button
    const resetBtn = document.getElementById('resetServingsBtn');
    resetBtn.addEventListener('click', function () {
        servingsInput.value = origServings;
        try { localStorage.removeItem(savedKey); } catch (e) { }
        rescale();
    });
    
    // Add hover effects to reset button
    resetBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    resetBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });

    // initial scale (in case origServings is not 1) and initial conversion
    rescale();

    document.getElementById('recipeModal').classList.add('active');
}

function closeModal() { 
    document.getElementById('recipeModal').classList.remove('active'); 
}

// Event listeners
document.getElementById('searchInput').addEventListener('keypress', function (e) { 
    if (e.key === 'Enter') searchRecipes(); 
});

document.getElementById('recipeModal').addEventListener('click', function (e) { 
    if (e.target === this) closeModal(); 
});

// Load recipes from external files when page loads
document.addEventListener('DOMContentLoaded', loadRecipes);
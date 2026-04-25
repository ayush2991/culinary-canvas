// Shim to support static recipe scripts for sites without a backend.
window.__registeredRecipes = window.__registeredRecipes || [];
window.registerRecipe = function (recipe) {
    if (typeof recipe === 'function') {
        try { window.__registeredRecipes.push(recipe()); } catch (e) { console.error(e); }
    } else {
        window.__registeredRecipes.push(recipe);
    }
};

// Process any pre-registered factories
if (Array.isArray(window.__preRegisteredRecipes)) {
    window.__preRegisteredRecipes.forEach(fn => {
        try { window.registerRecipe(fn); } catch (e) { console.error(e); }
    });
    window.__preRegisteredRecipes.length = 0;
}

let recipes = [];
let filteredRecipes = [];
let activeTags = new Set();

// Mapping for Home View bucketing
const COLLECTIONS = [
    { title: "Sips & Elixirs", categories: ["beverage"] },
    { title: "The Breakfast Table", categories: ["breakfast"] },
    { title: "Savory Mains & Bites", categories: ["mains", "appetizer", "dip"] },
    { title: "Sweet Retreats", categories: ["dessert"] }
];

function loadRecipes() {
    try {
        if (window.__registeredRecipes && window.__registeredRecipes.length) {
            recipes = window.__registeredRecipes.slice();
            renderRecipes(recipes);
            setTimeout(handleHashChange, 50);
        } else {
            document.getElementById('recipesGrid').innerHTML = '<p>No recipes available.</p>';
        }
    } catch (error) {
        console.error('Error loading recipes:', error);
        document.getElementById('recipesGrid').innerHTML = '<p>Error loading recipes.</p>';
    }
}

function getInitials(title) {
    return title.split(' ').slice(0, 2).map(w => w[0] ? w[0].toUpperCase() : '').join('');
}

function createRecipeCardHtml(recipe) {
    const initials = getInitials(recipe.title);
    const imageContent = recipe.image
        ? `<img src="${recipe.image}" alt="${recipe.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`
        : `<div class="recipe-initials">${initials}</div>`;

    const tags = Array.isArray(recipe.tags) && recipe.tags.length ? recipe.tags : [];
    const tagsHtml = tags.map(t => `<span class="recipe-tag">${t}</span>`).join(' ');

    return `
    <div class="recipe-card" data-id="${recipe.id}" role="button" tabindex="0">
        <div class="recipe-image">
            ${imageContent}
            ${tagsHtml ? `<div class="recipe-tags">${tagsHtml}</div>` : ''}
        </div>
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-meta">
                <div class="meta-item">
                    <svg width="14" height="14"><use href="#icon-time"/></svg>
                    ${recipe.time}
                </div>
                <div class="meta-item">
                    <svg width="14" height="14"><use href="#icon-users"/></svg>
                    ${recipe.servings}
                </div>
            </div>
        </div>
    </div>
    `;
}

function renderRecipes(recipesToRender) {
    const grid = document.getElementById('recipesGrid');
    const searchTerm = document.getElementById('searchInput')?.value.trim().toLowerCase();

    // If we're searching or filtering, show flat grid
    if (searchTerm || activeTags.size > 0) {
        grid.classList.remove('home-sections');
        const headerHtml = `
            <div style="grid-column: 1 / -1; margin-bottom: 2rem;">
                <h2 class="section-title">${searchTerm ? `Results for "${searchTerm}"` : 'Filtered Recipes'}</h2>
                <div style="font-size: 0.9rem; color: var(--muted); margin-top: 0.5rem;">${recipesToRender.length} ${recipesToRender.length === 1 ? 'recipe' : 'recipes'} found</div>
            </div>`;
        grid.innerHTML = headerHtml + recipesToRender.map(r => createRecipeCardHtml(r)).join('');
        return;
    }

    // Otherwise, show Curated Collections (Carousels)
    grid.classList.add('home-sections');
    let homeHtml = '';

    COLLECTIONS.forEach(collection => {
        const collectionRecipes = recipes.filter(r =>
            collection.categories.includes(r.category?.toLowerCase())
        );

        if (collectionRecipes.length > 0) {
            homeHtml += `
            <div class="carousel-container">
                <div class="section-header" role="button" tabindex="0">
                    <div style="display:flex;align-items:baseline;gap:0.75rem;">
                        <h2 class="section-title">${collection.title}</h2>
                        <span class="section-count">${collectionRecipes.length} recipes</span>
                    </div>
                    <svg class="section-chevron" width="20" height="20"><use href="#icon-chevron-down"/></svg>
                </div>
                <div class="carousel-track multi-row">
                    ${collectionRecipes.map(r => createRecipeCardHtml(r)).join('')}
                </div>
            </div>
            `;
        }
    });

    // Add "Everything Else" for recipes not in a main collection
    const categorizedIds = new Set();
    COLLECTIONS.forEach(c => recipes.filter(r => c.categories.includes(r.category?.toLowerCase())).forEach(r => categorizedIds.add(r.id)));
    const remaining = recipes.filter(r => !categorizedIds.has(r.id));

    if (remaining.length > 0) {
        homeHtml += `
        <div class="carousel-container">
            <div class="section-header" role="button" tabindex="0">
                <div style="display:flex;align-items:baseline;gap:0.75rem;">
                    <h2 class="section-title">Fresh Finds</h2>
                    <span class="section-count">${remaining.length} recipes</span>
                </div>
                <svg class="section-chevron" width="20" height="20"><use href="#icon-chevron-down"/></svg>
            </div>
            <div class="carousel-track multi-row">
                ${remaining.map(r => createRecipeCardHtml(r)).join('')}
            </div>
        </div>
        `;
    }

    grid.innerHTML = homeHtml;
}

// Delegate clicks on recipe cards
document.addEventListener('click', function (e) {
    const header = e.target.closest('.section-header');
    if (header) {
        const container = header.closest('.carousel-container');
        container.classList.toggle('collapsed');
        return;
    }

    const card = e.target.closest('.recipe-card');
    if (!card) return;
    const id = Number(card.dataset.id);
    if (!isNaN(id)) openModal(id);
});

// Keyboard accessibility
document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const active = document.activeElement;
    if (!active) return;

    if (active.classList.contains('section-header')) {
        e.preventDefault();
        active.closest('.carousel-container').classList.toggle('collapsed');
        return;
    }

    if (active.classList.contains('recipe-card')) {
        e.preventDefault();
        const id = Number(active.dataset.id);
        if (!isNaN(id)) openModal(id);
    }
});

// Wire up search and filter
const _searchInputEls = document.querySelectorAll('#searchInput');
_searchInputEls.forEach(el => el.addEventListener('input', searchRecipes));

const _filterContainer = document.querySelector('.filter-buttons');
if (_filterContainer) {
    _filterContainer.addEventListener('click', function (e) {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        const tag = btn.getAttribute('data-tag');
        if (!tag || tag === 'all') {
            activeTags.clear();
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        } else {
            if (activeTags.has(tag)) {
                activeTags.delete(tag);
                btn.classList.remove('active');
            } else {
                activeTags.add(tag);
                btn.classList.add('active');
                _filterContainer.querySelector('[data-tag="all"]')?.classList.remove('active');
            }
        }
        filterRecipesByTags();
    });
}

function filterRecipesByTags() {
    if (activeTags.size === 0) {
        filteredRecipes = [...recipes];
    } else {
        const tagsArray = Array.from(activeTags);
        filteredRecipes = recipes.filter(r => {
            const recipeTags = Array.isArray(r.tags) ? r.tags.map(t => t.toLowerCase()) : [];
            if (recipeTags.length === 0 && r.category) recipeTags.push(r.category.toLowerCase());
            return tagsArray.every(t => recipeTags.includes(t.toLowerCase()));
        });
    }
    renderRecipes(filteredRecipes);
}

function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));

    filteredRecipes = recipes.filter(r =>
        r.title.toLowerCase().includes(searchTerm) ||
        r.description.toLowerCase().includes(searchTerm)
    );

    renderRecipes(filteredRecipes);

    const countEl = document.getElementById('searchCount');
    if (countEl) {
        if (!searchTerm) {
            countEl.style.display = 'none';
        } else {
            countEl.style.display = 'block';
            countEl.textContent = String(filteredRecipes.length || 0);
        }
    }
}

// --- Ingredient scaling helpers ---
function parseMixedNumber(token) {
    if (!token || typeof token !== 'string') return null;
    token = token.trim();
    const mixed = token.match(/^(\d+)\s+(\d+)\/(\d+)$/);
    if (mixed) return parseInt(mixed[1], 10) + (parseInt(mixed[2], 10) / parseInt(mixed[3], 10));
    const frac = token.match(/^(\d+)\/(\d+)$/);
    if (frac) return parseInt(frac[1], 10) / parseInt(frac[2], 10);
    const num = parseFloat(token.replace(',', '.'));
    return isNaN(num) ? null : num;
}

function formatNumber(n) {
    if (n == null) return '';
    if (Math.abs(n - Math.round(n)) < 1e-6) return String(Math.round(n));
    const whole = Math.floor(Math.abs(n));
    const fracPart = Math.abs(n) - whole;
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

function formatAmount(amount, unit) {
    if (amount == null) return '';
    let amt = Number(amount);
    if (isNaN(amt)) return '';
    if (unit === 'g' && Math.abs(amt) >= 1000) return `${formatNumber(amt / 1000)} kg`;
    const normalizedUnit = (unit || '').trim();
    if (normalizedUnit === '%') return `${formatNumber(amt)}%`;
    if (normalizedUnit) return `${formatNumber(amt)} ${normalizedUnit}`;
    return formatNumber(amt);
}

function scaleIngredient(ingredient, factor) {
    if (!ingredient || typeof ingredient !== 'string') return ingredient;
    let trimmed = ingredient.trim();
    const prefixMatch = trimmed.match(/^(about|approx\.?|~|approximately)\s+/i);
    const prefix = prefixMatch ? prefixMatch[0] : '';
    if (prefix) trimmed = trimmed.slice(prefix.length).trim();
    let parenWrapper = false;
    if (trimmed.startsWith('(') && trimmed.endsWith(')')) {
        parenWrapper = true;
        trimmed = trimmed.slice(1, -1).trim();
    }
    const rangeMatch = trimmed.match(/^(\d+(?:[\.,]\d+)?|\d+\s+\d+\/\d+|\d+\/\d+)\s*(?:-|to)\s*(\d+(?:[\.,]\d+)?|\d+\s+\d+\/\d+|\d+\/\d+)\b(?:\s*)(.*)$/i);
    if (rangeMatch) {
        const a = parseMixedNumber(rangeMatch[1]); const b = parseMixedNumber(rangeMatch[2]);
        if (a == null || b == null) return ingredient;
        const out = `${formatNumber(a * factor)}-${formatNumber(b * factor)} ${rangeMatch[3] || ''}`.trim();
        return parenWrapper ? `(${prefix}${out})` : `${prefix}${out}`;
    }
    const tokenMatch = trimmed.match(/^((?:\d+\s+\d+\/\d+)|(?:\d+\/\d+)|(?:\d+[\.,]?\d*))\s*([\p{L}%µ°]{0,4})\b(?:\s*)(.*)$/u);
    if (tokenMatch) {
        const val = parseMixedNumber(tokenMatch[1].replace(',', '.'));
        if (val == null) return ingredient;
        const unit = tokenMatch[2] || '';
        const combined = `${formatNumber(val * factor)}${unit && /[\p{L}]/u.test(unit) ? ' ' : ''}${unit}${tokenMatch[3] ? ' ' + tokenMatch[3] : ''}`.trim();
        const withPrefix = `${prefix}${combined}`;
        return parenWrapper ? `(${withPrefix})` : withPrefix;
    }
    return ingredient;
}

function openModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    updateUrlHash(recipe.id);
    const origServings = Number(recipe.servings) || 1;
    const initialServings = recipe.id === 3 ? 1 : origServings;
    const modalBody = document.getElementById('modalBody');
    const ingredientsHtml = recipe.ingredients.map(ing => {
        if (typeof ing === 'object') {
            const json = JSON.stringify(ing).replace(/"/g, '&quot;');
            const display = ing.amount == null ? ing.rest + (ing.note ? ` (${ing.note})` : '') : `${formatAmount(ing.amount, ing.unit)} ${ing.rest}${ing.note ? ` (${ing.note})` : ''}`.replace(/\s+/g, ' ').trim();
            return `<li data-orig="${json}">${display}</li>`;
        }
        return `<li data-orig="${ing.replace(/"/g, '\"')}">${ing}</li>`;
    }).join('');
    // mobile branch only
    const imageHtml = recipe.image
        ? `<div style="text-align:center;margin-bottom:2rem;position:relative;">
             <img src="${recipe.image}" alt="${recipe.title}" style="max-width:100%;height:auto;border-radius:16px;max-height:300px;object-fit:cover;box-shadow:0 16px 40px rgba(0,0,0,0.15);">
             <div style="position:absolute;bottom:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--primary),var(--accent));color:white;padding:.5rem 1rem;border-radius:20px;font-size:.85rem;font-weight:600;">${recipe.category}</div>
           </div>`
        : `<div style="text-align:center;margin-bottom:2rem;position:relative;background:var(--secondary);padding:3rem;border-radius:16px;">
             <h3>${recipe.title}</h3>
             <div style="position:absolute;bottom:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--primary),var(--accent));color:white;padding:.5rem 1rem;border-radius:20px;font-size:.85rem;font-weight:600;">${recipe.category}</div>
           </div>`;
    const referencesHtml = recipe.references && recipe.references.length > 0 ? `
        <div style="margin-top: 1.5rem; border-top: 1px solid var(--border); padding-top: 1.25rem;">
            <div class="pane-section-label">References</div>
            <ul style="list-style: none; padding: 0; margin: 0;">
                ${recipe.references.map(ref => {
                    const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(ref) || ref.startsWith('images/');
                    if (isImage) {
                        return `<li style="margin-bottom: 1rem;">
                            <img src="${ref}" alt="Reference" style="max-height: 200px; border-radius: 4px; border: 1px solid var(--border); cursor: pointer;" onclick="window.open('${ref}', '_blank')">
                        </li>`;
                    }
                    return `<li style="margin-bottom: 0.5rem;">
                        <a href="${ref}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; font-weight: 500;">
                            <svg width="14" height="14" style="flex-shrink:0"><use href="#icon-share"/></svg>
                            ${ref}
                        </a>
                    </li>`;
                }).join('')}
            </ul>
        </div>` : '';
    const isSmall = window.innerWidth <= 700;
    const compactHtml = isSmall ? `
        <div class="compact-modal-header" style="padding: 1.5rem 4.5rem 0.5rem 1.5rem;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;margin-bottom:1.5rem;">
                <h2 style="margin:0;font-family:'Merriweather',serif;">${recipe.title}</h2>
                <button type="button" id="shareRecipeBtn" class="reset-btn" style="flex-shrink:0;padding:0.5rem;width:40px;height:40px;display:flex;align-items:center;justify-content:center;margin-right:-0.5rem;"><svg width="18" height="18"><use href="#icon-share"/></svg></button>
            </div>
            <div class="modal-stat-bar" style="background:transparent;border:none;padding:0;margin-bottom:1.5rem;display:flex;flex-wrap:wrap;gap:1rem;">
                <div class="stat-col">
                    <span class="stat-label">Time</span>
                    <span class="stat-value">${recipe.time}</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-col">
                    <span class="stat-label">Difficulty</span>
                    <span class="stat-value">${recipe.difficulty}</span>
                </div>
            </div>
        </div>
        <div class="compact-servings">
            <div class="servings-label"><span class="stat-label">Servings</span></div>
            <div class="stat-servings-stepper">
                <button type="button" class="servings-step-btn" id="servingsDecBtn">−</button>
                <input id="servingsInput" type="number" min="1" value="${initialServings}" class="stat-servings-input">
                <button type="button" class="servings-step-btn" id="servingsIncBtn">+</button>
            </div>
            <button id="resetServingsBtn" type="button" class="reset-btn" style="margin-left:auto;">Reset</button>
        </div>
        <div class="collapsible">
            <details open><summary>Ingredients</summary><ul id="ingredientsList">${ingredientsHtml}</ul></details>
            <details open><summary>Instructions</summary><ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol></details>
            ${recipe.references && recipe.references.length > 0 ? `
                <details><summary>References</summary>
                    <ul style="list-style: none; padding-left: 0; margin-top: 1rem;">
                        ${recipe.references.map(ref => {
        const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(ref) || ref.startsWith('images/');
        if (isImage) {
            return `
                                    <li style="margin-bottom: 1rem;">
                                        <img src="${ref}" alt="Reference" style="width: 100%; border-radius: 8px; box-shadow: var(--shadow); cursor: pointer;" onclick="window.open('${ref}', '_blank')">
                                    </li>
                                `;
        }
        return `
                                <li style="margin-bottom: 0.75rem;">
                                    <a href="${ref}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; word-break: break-all; font-size: 0.9rem;">
                                        <svg width="14" height="14" style="flex-shrink: 0;"><use href="#icon-share"/></svg>
                                        ${ref}
                                    </a>
                                </li>
                            `;
    }).join('')}
                    </ul>
                </details>
            ` : ''}
        </div>
    ` : `
        <div class="modal-header">
            <div class="modal-header-top">
                <h2 class="modal-title">${recipe.title}</h2>
                <button type="button" id="shareRecipeBtn" class="reset-btn"><svg width="18" height="18"><use href="#icon-share"/></svg> Share</button>
            </div>
            <div class="modal-stat-bar">
                <div class="stat-col">
                    <span class="stat-label">Time</span>
                    <span class="stat-value">${recipe.time}</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-col">
                    <span class="stat-label">Difficulty</span>
                    <span class="stat-value">${recipe.difficulty}</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-col">
                    <span class="stat-label">Servings</span>
                    <div class="stat-servings-stepper">
                        <button type="button" class="servings-step-btn" id="servingsDecBtn">−</button>
                        <input id="servingsInput" type="number" min="1" value="${initialServings}" class="stat-servings-input">
                        <button type="button" class="servings-step-btn" id="servingsIncBtn">+</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-pane-body">
            <div class="modal-pane pane-ingredients">
                <div class="pane-section-label">Ingredients</div>
                <ul id="ingredientsList">${ingredientsHtml}</ul>
            </div>
            <div class="modal-pane pane-instructions">
                <div class="pane-section-label">Instructions</div>
                <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
                ${referencesHtml}
            </div>
        </div>
    `;
    modalBody.innerHTML = compactHtml;
    const modalEl = document.getElementById('recipeModal');
    const modalContent = modalEl.querySelector('.modal-content');
    if (isSmall) {
        modalEl.classList.add('sheet');
        modalContent.classList.remove('desktop-modal');
    } else {
        modalContent.classList.add('desktop-modal');
    }

    const servingsInput = document.getElementById('servingsInput');
    function rescale() {
        const desired = Number(servingsInput.value) || origServings;
        const factor = desired / origServings;
        const list = document.getElementById('ingredientsList');
        Array.from(list.children).forEach(li => {
            const origData = li.getAttribute('data-orig');
            try {
                const parsed = JSON.parse(origData);
                if (parsed && typeof parsed === 'object') {
                    const amt = parsed.amount == null ? null : formatAmount(parsed.amount * factor, parsed.unit);
                    li.textContent = amt ? `${amt} ${parsed.rest}${parsed.note ? ` (${parsed.note})` : ''}`.replace(/\s+/g, ' ').trim() : `${parsed.rest}${parsed.note ? ` (${parsed.note})` : ''}`;
                    return;
                }
            } catch (e) { }
            li.textContent = scaleIngredient(origData, factor);
        });
    }
    servingsInput?.addEventListener('input', rescale);
    document.getElementById('servingsDecBtn')?.addEventListener('click', () => { servingsInput.value = Math.max(1, Number(servingsInput.value) - 1); rescale(); });
    document.getElementById('servingsIncBtn')?.addEventListener('click', () => { servingsInput.value = Number(servingsInput.value) + 1; rescale(); });
    document.getElementById('resetServingsBtn')?.addEventListener('click', () => { servingsInput.value = origServings; rescale(); });
    rescale();
    modalEl.classList.add('active');

    document.getElementById('shareRecipeBtn')?.addEventListener('click', () => {
        const url = `${window.location.origin}${window.location.pathname}#${createSlugFromTitle(recipe.title)}`;
        if (navigator.share) {
            navigator.share({ title: recipe.title, url }).catch(() => fallbackShare(url));
        } else {
            fallbackShare(url);
        }
    });

    function fallbackShare(url) {
        navigator.clipboard.writeText(url).then(() => {
            const btn = document.getElementById('shareRecipeBtn');
            const old = btn.innerHTML;
            btn.innerHTML = '✓ Copied!';
            setTimeout(() => btn.innerHTML = old, 2000);
        });
    }

}

function closeModal() {
    const modalEl = document.getElementById('recipeModal');
    modalEl.classList.remove('active');
    modalEl.classList.remove('sheet');
    modalEl.querySelector('.modal-content')?.classList.remove('desktop-modal');
    window.history.replaceState(null, null, window.location.pathname);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

function createSlugFromTitle(title) {
    return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim('-');
}

function updateUrlHash(id) {
    const r = recipes.find(x => x.id === id);
    if (r) window.history.replaceState(null, null, `#${createSlugFromTitle(r.title)}`);
}

function handleHashChange() {
    const hash = window.location.hash.substring(1);
    const r = recipes.find(x => createSlugFromTitle(x.title) === hash);
    if (r) openModal(r.id);
}

document.addEventListener('DOMContentLoaded', loadRecipes);
window.addEventListener('hashchange', handleHashChange);

// --- Theme toggle ---
(function () {
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const THEME_KEY = 'user_theme';
    const apply = (t) => {
        root.setAttribute('data-theme', t);
        btn.innerHTML = `<svg width="20" height="20"><use href="#icon-${t === 'dark' ? 'sun' : 'moon'}"/></svg>`;
        btn.setAttribute('aria-label', `Switch to ${t === 'dark' ? 'light' : 'dark'} mode`);
    };
    let theme = localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    apply(theme);
    btn?.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        apply(theme);
        localStorage.setItem(THEME_KEY, theme);
    });
})();
// Shim to support static recipe scripts for sites without a backend.
// Recipe files will either call `registerRecipe(recipe)` directly or
// push a factory into `window.__preRegisteredRecipes` if registerRecipe
// isn't available yet. This shim collects them and exposes registerRecipe.
window.__registeredRecipes = window.__registeredRecipes || [];
window.registerRecipe = function (recipe) {
    // Accept either a recipe object or a function that returns one
    if (typeof recipe === 'function') {
        try { window.__registeredRecipes.push(recipe()); } catch (e) { console.error(e); }
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
// maintain a set of active tag filters (empty means show all)
let activeTags = new Set();

// Load recipes from registered JS files (single source of truth)
function loadRecipes() {
    try {
        if (window.__registeredRecipes && window.__registeredRecipes.length) {
            recipes = window.__registeredRecipes.slice();
            filteredRecipes = [...recipes];
            renderRecipes(recipes);

            // After recipes are loaded, check if URL hash points to a specific recipe
            setTimeout(handleHashChange, 50);
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
        // render tag badges (use category as fallback tag if no tags defined)
        const tags = Array.isArray(recipe.tags) && recipe.tags.length ? recipe.tags : (recipe.category ? [recipe.category] : []);
        const tagsHtml = tags.map(t => `<span class="recipe-tag">${t}</span>`).join(' ');

        return `
        <div class="recipe-card" data-id="${recipe.id}" role="button" tabindex="0">
            <div class="recipe-image">
                ${imageContent}
                <div class="recipe-tags">${tagsHtml}</div>
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <div style="display:flex;gap:.6rem;align-items:center">
                        <div class="meta-item">
                            <svg width="14" height="14"><use href="#icon-time"/></svg>
                            ${recipe.time}
                        </div>
                        <div class="meta-item">
                            <svg width="14" height="14"><use href="#icon-users"/></svg>
                            ${recipe.servings}
                        </div>
                    </div>
                    <button class="view-recipe" type="button">View Recipe</button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// Delegate clicks on recipe cards to open modals (avoids inline onclick)
document.addEventListener('click', function (e) {
    const grid = document.getElementById('recipesGrid');
    if (!grid) return;
    const card = e.target.closest('.recipe-card');
    if (!card || !grid.contains(card)) return;
    const id = Number(card.dataset.id);
    if (!isNaN(id)) openModal(id);
});

// Keyboard accessibility: Enter/Space should open focused recipe card
document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const active = document.activeElement;
    if (!active || !active.classList.contains('recipe-card')) return;
    const id = Number(active.dataset.id);
    if (!isNaN(id)) {
        e.preventDefault();
        openModal(id);
    }
});

// Wire up search input and filter-buttons via event delegation
const _searchInputEls = document.querySelectorAll('#searchInput');
if (_searchInputEls && _searchInputEls.length) _searchInputEls.forEach(el => el.addEventListener('input', searchRecipes));

const _filterContainer = document.querySelector('.filter-buttons');
if (_filterContainer) {
    // Buttons will now represent tags. Allow multi-select.
    _filterContainer.addEventListener('click', function (e) {
        const btn = e.target.closest('.filter-btn');
        if (!btn || !_filterContainer.contains(btn)) return;
        const tag = btn.getAttribute('data-tag');
        if (!tag || tag === 'all') {
            // clear all active tags
            activeTags.clear();
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterRecipesByTags();
            return;
        }
        // toggle tag
        if (activeTags.has(tag)) {
            activeTags.delete(tag);
            btn.classList.remove('active');
        } else {
            activeTags.add(tag);
            btn.classList.add('active');
            // ensure 'All' is not active
            const allBtn = _filterContainer.querySelector('[data-tag="all"]');
            if (allBtn) allBtn.classList.remove('active');
        }
        filterRecipesByTags();
    });
}

function filterRecipesByTags() {
    // If no active tags, show all recipes
    if (!activeTags || activeTags.size === 0) {
        filteredRecipes = [...recipes];
        renderRecipes(filteredRecipes);
        return;
    }
    // Show recipes that include ALL selected tags (AND behavior)
    const tagsArray = Array.from(activeTags);
    filteredRecipes = recipes.filter(r => {
        const recipeTags = Array.isArray(r.tags) ? r.tags.map(t => t.toLowerCase()) : [];
        // fallback: if tags aren't defined, consider category as a single tag for compatibility
        if (recipeTags.length === 0 && r.category) recipeTags.push(r.category.toLowerCase());
        return tagsArray.every(t => recipeTags.includes(t.toLowerCase()));
    });
    renderRecipes(filteredRecipes);
}

function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    // clear filter active state
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    filteredRecipes = recipes.filter(r => r.title.toLowerCase().includes(searchTerm) || r.description.toLowerCase().includes(searchTerm));
    renderRecipes(filteredRecipes);

    // update search count in the search icon
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
    // handles "1 1/2", "3/4", decimals, and plain integers
    // conservative: return null on anything unexpected
    if (!token || typeof token !== 'string') return null;
    token = token.trim();
    // mixed number like '1 1/2'
    const mixed = token.match(/^(\d+)\s+(\d+)\/(\d+)$/);
    if (mixed) {
        return parseInt(mixed[1], 10) + (parseInt(mixed[2], 10) / parseInt(mixed[3], 10));
    }
    // simple fraction like '3/4'
    const frac = token.match(/^(\d+)\/(\d+)$/);
    if (frac) {
        return parseInt(frac[1], 10) / parseInt(frac[2], 10);
    }
    // decimal or integer (allow comma as decimal separator)
    const normalized = token.replace(',', '.');
    const num = parseFloat(normalized);
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

// Format an amount with unit normalization (e.g., 1000g -> 1 kg) and consistent display
function formatAmount(amount, unit) {
    if (amount == null) return '';
    let amt = Number(amount);
    if (isNaN(amt)) return '';
    // Normalize grams to kg when large
    if (unit === 'g' && Math.abs(amt) >= 1000) {
        return `${formatNumber(amt / 1000)} kg`;
    }
    // normalize common abbreviations
    const normalizedUnit = (unit || '').trim();
    if (normalizedUnit === '%') return `${formatNumber(amt)}%`;
    if (normalizedUnit) return `${formatNumber(amt)} ${normalizedUnit}`;
    return formatNumber(amt);
}

function scaleIngredient(ingredient, factor) {
    // Try to detect a leading quantity (mixed number, fraction, or decimal/integer, possibly attached to unit like '400g')
    if (!ingredient || typeof ingredient !== 'string') return ingredient;
    const original = ingredient;
    let trimmed = ingredient.trim();

    // preserve and strip common loose prefixes like 'about', '~', 'approx.'
    const prefixMatch = trimmed.match(/^(about|approx\.?|~|approximately)\s+/i);
    const prefix = prefixMatch ? prefixMatch[0] : '';
    if (prefix) trimmed = trimmed.slice(prefix.length).trim();

    // strip surrounding parentheses once (e.g. '(1 cup)') but remember them
    let parenWrapper = false;
    if (trimmed.startsWith('(') && trimmed.endsWith(')')) {
        parenWrapper = true;
        trimmed = trimmed.slice(1, -1).trim();
    }

    // handle simple ranges like '1-2 cups' or '1 to 2 cups' -> scale both sides
    const rangeMatch = trimmed.match(/^(\d+(?:[\.,]\d+)?|\d+\s+\d+\/\d+|\d+\/\d+)\s*(?:-|to)\s*(\d+(?:[\.,]\d+)?|\d+\s+\d+\/\d+|\d+\/\d+)\b(?:\s*)(.*)$/i);
    if (rangeMatch) {
        const a = parseMixedNumber(rangeMatch[1]);
        const b = parseMixedNumber(rangeMatch[2]);
        const rest = rangeMatch[3] || '';
        if (a == null || b == null) return original;
        const aScaled = formatNumber(a * factor);
        const bScaled = formatNumber(b * factor);
        const out = `${aScaled}-${bScaled} ${rest}`.trim();
        return parenWrapper ? `(${prefix}${out})` : `${prefix}${out}`;
    }

    // tokenise leading number (mixed, fraction, decimal) and optional unit (letters, %, µ, or abbreviations like 'tbsp')
    // Accept units attached (400g) or separated (400 g)
    const tokenMatch = trimmed.match(/^((?:\d+\s+\d+\/\d+)|(?:\d+\/\d+)|(?:\d+[\.,]?\d*))\s*([\p{L}%µ°]{0,4})\b(?:\s*)(.*)$/u);
    if (tokenMatch) {
        const numToken = tokenMatch[1];
        const unit = tokenMatch[2] || '';
        const rest = tokenMatch[3] || '';
        const val = parseMixedNumber(numToken.replace(',', '.'));
        if (val == null) return original;
        const scaled = val * factor;
        const scaledStr = formatNumber(scaled);
        // keep unit next to number if originally attached or present
        // put a space between number and alphabetic unit (e.g., '1 cup'),
        // but keep symbol-only units attached (e.g., '50%')
        const needsSpace = unit && /[\p{L}]/u.test(unit);
        const spaceBetween = needsSpace ? ' ' : '';
        const combined = `${scaledStr}${spaceBetween}${unit}${rest ? ' ' + rest : ''}`.trim();
        const withPrefix = `${prefix}${combined}`;
        return parenWrapper ? `(${withPrefix})` : withPrefix;
    }

    // No parsable leading number — leave unchanged
    return original;
}

function openModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    // Update URL hash to allow direct linking
    updateUrlHash(recipe.id);

    const origServings = Number(recipe.servings) || 1;
    // load persisted servings for this recipe if present
    const savedKey = `recipe_servings_${recipe.id}`;
    // Clear any persisted servings so modal always opens with the recipe's default
    try { localStorage.removeItem(savedKey); } catch (e) { /* ignore storage errors */ }
    const saved = Number(localStorage.getItem(savedKey));
    // Force oat turmeric latte (id: 3) to always default to 1 serving
    const initialServings = recipe.id === 3 ? 1 : (saved && saved > 0 ? saved : origServings);
    const modalBody = document.getElementById('modalBody');
    // build ingredients list with data-original attributes so we can rescale
    const ingredientsHtml = recipe.ingredients.map(ing => {
        if (typeof ing === 'object') {
            const json = JSON.stringify(ing).replace(/"/g, '&quot;');
            const display = (() => {
                if (ing.amount == null) return ing.rest + (ing.note ? ` (${ing.note})` : '');
                return `${formatAmount(ing.amount, ing.unit)} ${ing.rest}${ing.note ? ` (${ing.note})` : ''}`.replace(/\s+/g, ' ').trim();
            })();
            return `<li data-orig="${json}">${display}</li>`;
        }
        return `<li data-orig="${ing.replace(/"/g, '\"')}">${ing}</li>`;
    }).join('');
    const imageHtml = recipe.image
        ? `<div style="text-align:center;margin-bottom:2rem;position:relative;">
                         <img src="${recipe.image}" alt="${recipe.title}" style="max-width:100%;height:auto;border-radius:16px;max-height:300px;object-fit:cover;box-shadow:0 16px 40px rgba(23,32,42,0.15);">
                         <div style="position:absolute;bottom:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--primary),var(--accent));color:white;padding:.5rem 1rem;border-radius:20px;font-size:.85rem;font-weight:600;box-shadow:0 8px 24px rgba(38,70,83,0.3);">${recipe.category}</div>
                     </div>`
        : `<div style="text-align:center;margin-bottom:2rem;position:relative;">
                         <svg width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice" style="border-radius:16px;max-height:300px;object-fit:cover;box-shadow:0 16px 40px rgba(23,32,42,0.08);background:linear-gradient(135deg,rgba(139,77,107,0.06),rgba(212,132,138,0.04));">
                             <rect width="100%" height="100%" fill="transparent" />
                             <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="var(--muted)" font-size="20">${recipe.title}</text>
                         </svg>
                         <div style="position:absolute;bottom:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--primary),var(--accent));color:white;padding:.5rem 1rem;border-radius:20px;font-size:.85rem;font-weight:600;box-shadow:0 8px 24px rgba(38,70,83,0.3);">${recipe.category}</div>
                     </div>`;
    // Insert a small top-nav for quick jumps (Ingredients / Instructions)
    const topNavHtml = `
        <div class="modal-top-nav">
            <button type="button" data-jump="ingredients" class="active">Ingredients</button>
            <button type="button" data-jump="instructions">Instructions</button>
        </div>`;

    // Decide if we're on a small screen before rendering compact HTML
    const isSmall = window.innerWidth <= 700;

    // On small screens render a compact layout with collapsible sections
    const compactHtml = isSmall ? `
        <div class="compact-modal-header">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                <h2 style="margin:0; flex: 1;">${recipe.title}</h2>
                <button type="button" id="shareRecipeBtn" title="Share recipe">
                    <svg width="18" height="18"><use href="#icon-share"/></svg> 
                    Share
                </button>
            </div>
            <div class="compact-meta">
                <div class="meta-item">
                     <svg width="14" height="14"><use href="#icon-time"/></svg>
                     ${recipe.time}
                </div>
                <div class="meta-item">
                    <svg width="14" height="14"><use href="#icon-users"/></svg>
                    ${recipe.servings}
                </div>
                <div class="meta-item">
                    <svg width="14" height="14"><use href="#icon-difficulty"/></svg>
                    ${recipe.difficulty}
                </div>
            </div>
            ${imageHtml}
        </div>
        <div class="compact-servings">
            <label class="servings-label">
                <svg width="16" height="16"><use href="#icon-users"/></svg>
                Servings:
                <input id="servingsInput" type="number" min="1" value="${initialServings}" class="servings-input">
            </label>
            <button id="resetServingsBtn" type="button" class="reset-btn">Reset</button>
        </div>
        <div class="collapsible">
            <details open>
                <summary>Ingredients</summary>
                <ul id="ingredientsList">${ingredientsHtml}</ul>
            </details>
        </div>
        <div class="collapsible">
            <details open>
                <summary>Instructions</summary>
                <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
            </details>
        </div>
    ` : `
        <h2 style="display: flex; justify-content: space-between; align-items: center;">
            ${recipe.title}
            <button type="button" id="shareRecipeBtn" title="Share recipe" class="desktop-share-btn">
                <svg width="18" height="18"><use href="#icon-share"/></svg> 
                Share
            </button>
        </h2>
        ${imageHtml}
        ${topNavHtml}
        <div class="modal-section details-grid">
            <div class="detail-item">
                <div class="detail-icon"><svg width="24" height="24"><use href="#icon-time"/></svg></div>
                <div class="detail-value">${recipe.time}</div>
                <div class="detail-label">Cook Time</div>
            </div>
            <div class="detail-item">
                <div class="detail-icon"><svg width="24" height="24"><use href="#icon-users"/></svg></div>
                <div class="detail-value">${recipe.servings}</div>
                <div class="detail-label">Servings</div>
            </div>
            <div class="detail-item">
                <div class="detail-icon"><svg width="24" height="24"><use href="#icon-difficulty"/></svg></div>
                <div class="detail-value">${recipe.difficulty}</div>
                <div class="detail-label">Difficulty</div>
            </div>
        </div>
        
        <div class="compact-servings desktop-servings">
            <label class="servings-label">
                <svg width="16" height="16"><use href="#icon-users"/></svg>
                Servings:
                <input id="servingsInput" type="number" min="1" value="${initialServings}" class="servings-input">
            </label>
            <button id="resetServingsBtn" type="button" class="reset-btn">Reset</button>
        </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:1rem" class="recipe-content-grid">
            <div class="modal-section">
                <h3>Ingredients</h3>
                <ul id="ingredientsList">${ingredientsHtml}</ul>
            </div>
            <div class="modal-section">
                <h3>Instructions</h3>
                <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
            </div>
        </div>
    `;

    // Insert the constructed modal HTML into the modal body so queried
    // elements (servingsInput, reset button, ingredient list, etc.) exist
    // before we try to attach event listeners to them.
    if (!modalBody) {
        console.error('openModal: #modalBody element not found');
        return;
    }
    modalBody.innerHTML = compactHtml;

    // If on small screens, treat modal as a sheet (slide from bottom)
    const modalEl = document.getElementById('recipeModal');
    if (modalEl && isSmall) modalEl.classList.add('sheet');

    // attach input listener to rescale ingredients (elements now exist)
    const servingsInput = document.getElementById('servingsInput');

    function rescale() {
        // Use servingsInput value if available, otherwise use original servings
        const desired = servingsInput ? (Number(servingsInput.value) || origServings) : origServings;
        const factor = desired / origServings;
        const list = document.getElementById('ingredientsList');
        if (!list) return; // safety check
        Array.from(list.children).forEach(li => {
            const origData = li.getAttribute('data-orig');
            try {
                const parsed = JSON.parse(origData);
                // structured ingredient object
                if (parsed && typeof parsed === 'object' && parsed.hasOwnProperty('rest')) {
                    const amt = parsed.amount == null ? null : formatAmount(parsed.amount * factor, parsed.unit);
                    const note = parsed.note ? ` (${parsed.note})` : '';
                    li.textContent = amt ? `${amt} ${parsed.rest}${note}`.replace(/\s+/g, ' ').trim() : `${parsed.rest}${note}`;
                    return;
                }
            } catch (e) {
                // not JSON — fall back to legacy string handling
            }
            const orig = origData;
            // scale ingredients without unit conversion
            li.textContent = scaleIngredient(orig, factor);
        });
        // persist chosen servings only if we have servings input
        if (servingsInput) {
            try { localStorage.setItem(savedKey, String(desired)); } catch (e) { /* ignore storage errors */ }
        }
    }

    // Only add event listeners if the elements exist (desktop layout)
    if (servingsInput) {
        servingsInput.addEventListener('input', rescale);
    }

    // reset button
    const resetBtn = document.getElementById('resetServingsBtn');
    if (resetBtn && servingsInput) {
        resetBtn.addEventListener('click', function () {
            servingsInput.value = origServings;
            try { localStorage.removeItem(savedKey); } catch (e) { }
            rescale();
        });
    }
    // Add hover effects to reset button (only if it exists)
    if (resetBtn) {
        resetBtn.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        resetBtn.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }

    // initial scale (in case origServings is not 1) and initial conversion
    // Always call rescale to ensure ingredients are properly formatted
    rescale();

    document.getElementById('recipeModal').classList.add('active');

    // Share button functionality
    const shareBtn = document.getElementById('shareRecipeBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function () {
            const slug = createSlugFromTitle(recipe.title);
            const recipeUrl = `${window.location.origin}${window.location.pathname}#${slug}`;

            // Try to use the Web Share API if available (mobile devices)
            if (navigator.share) {
                navigator.share({
                    title: recipe.title,
                    text: `Check out this recipe: ${recipe.title}`,
                    url: recipeUrl
                }).catch(err => {
                    console.log('Error sharing:', err);
                    fallbackShare(recipeUrl);
                });
            } else {
                fallbackShare(recipeUrl);
            }
        });
    }

    function fallbackShare(url) {
        // Fallback: copy to clipboard
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(url).then(() => {
                showShareFeedback('Link copied to clipboard!');
            }).catch(() => {
                showShareFeedback('Share URL: ' + url);
            });
        } else {
            // Older browsers fallback
            const textArea = document.createElement('textarea');
            textArea.value = url;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showShareFeedback('Link copied to clipboard!');
            } catch (err) {
                showShareFeedback('Share URL: ' + url);
            }
            document.body.removeChild(textArea);
        }
    }

    function showShareFeedback(message) {
        const shareBtn = document.getElementById('shareRecipeBtn');
        if (shareBtn) {
            const originalText = shareBtn.innerHTML;
            shareBtn.innerHTML = '✓ ' + (message.includes('copied') ? 'Copied' : 'Ready');
            setTimeout(() => {
                const icon = `<svg width="18" height="18"><use href="#icon-share"/></svg>`;
                shareBtn.innerHTML = icon + ' Share';
                // Reset style handled by CSS primarily, but inline style override removal might be needed
            }, 2000);
        }
    }

    // Quick-jump handlers
    const topNav = modalBody.querySelector('.modal-top-nav');
    if (topNav) {
        const ingEl = document.querySelector('#ingredientsList');
        const instrEl = modalBody.querySelector('ol');
        topNav.addEventListener('click', function (e) {
            const btn = e.target.closest('button[data-jump]');
            if (!btn) return;
            const target = btn.getAttribute('data-jump');
            if (target === 'ingredients' && ingEl) {
                ingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (target === 'instructions' && instrEl) {
                instrEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // mark active
            topNav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    }

    // Persist and restore modal scroll position per recipe (session only)
    const modalContent = document.querySelector('.modal-content');
    const scrollKey = `modal_scroll_${recipe.id}`;
    // restore
    try {
        const saved = sessionStorage.getItem(scrollKey);
        if (saved && modalContent) modalContent.scrollTop = Number(saved) || 0;
    } catch (e) { }
    // save on scroll (throttle)
    let scrollTimer;
    if (modalContent) {
        modalContent.addEventListener('scroll', function () {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(function () {
                try { sessionStorage.setItem(scrollKey, String(modalContent.scrollTop)); } catch (e) { }
            }, 120);
        });
    }
}

function closeModal() {
    const modalEl = document.getElementById('recipeModal');
    modalEl.classList.remove('active');
    // remove sheet class so next open animates correctly
    modalEl.classList.remove('sheet');

    // Clear URL hash when closing modal
    clearUrlHash();
}

// URL hash management for direct linking to recipes
// Creates user-friendly URLs like: #chocolate-mousse-ninja-blender, #palak-tofu, etc.
function createSlugFromTitle(title) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .trim('-'); // Remove leading/trailing hyphens
}

function updateUrlHash(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        const slug = createSlugFromTitle(recipe.title);
        window.history.replaceState(null, null, `#${slug}`);
    }
}

function clearUrlHash() {
    window.history.replaceState(null, null, window.location.pathname + window.location.search);
}

function getRecipeIdFromHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#')) {
        const slug = hash.substring(1); // Remove '#' prefix
        // Find recipe by matching slug to title
        const recipe = recipes.find(r => createSlugFromTitle(r.title) === slug);
        return recipe ? recipe.id : null;
    }
    return null;
}

function handleHashChange() {
    const recipeId = getRecipeIdFromHash();
    if (recipeId) {
        // Only open modal if recipes are loaded and recipe exists
        if (recipes.length > 0 && recipes.find(r => r.id === recipeId)) {
            openModal(recipeId);
        }
    } else {
        // If no hash or invalid hash, close modal if it's open
        const modalEl = document.getElementById('recipeModal');
        if (modalEl && modalEl.classList.contains('active')) {
            closeModal();
        }
    }
}

// Event listeners
const _searchInput = document.getElementById('searchInput');
if (_searchInput) {
    _searchInput.addEventListener('input', function () { searchRecipes(); });
    _searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') searchRecipes();
    });
}

// Search icon focus and '/' shortcut
const _searchIcon = document.getElementById('searchIcon');
if (_searchIcon && _searchInput) {
    _searchIcon.addEventListener('click', function () { _searchInput.focus(); });
}
document.addEventListener('keydown', function (e) {
    // ignore if user is typing in input or textarea
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;
    if (e.key === '/') {
        e.preventDefault();
        _searchInput && _searchInput.focus();
    }
});

const _recipeModal = document.getElementById('recipeModal');
if (_recipeModal) {
    _recipeModal.addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });
}

// Load recipes from external files when page loads
document.addEventListener('DOMContentLoaded', loadRecipes);

// Handle URL hash changes for direct linking
window.addEventListener('hashchange', handleHashChange);

// Check for recipe hash on page load (after recipes are loaded)
window.addEventListener('load', function () {
    // Give a small delay to ensure recipes are fully loaded
    setTimeout(handleHashChange, 100);
});

// --- Theme toggle logic ---
(function () {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('themeToggle');
    const THEME_KEY = 'user_theme';

    // Apply theme based on localStorage or system
    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme'); // fallback to system
        }
    }

    // Detect system theme
    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Initial theme setup - check for saved preference first
    const savedTheme = localStorage.getItem(THEME_KEY);
    let initialTheme;

    if (savedTheme) {
        // User has a saved preference, use it
        initialTheme = savedTheme;
    } else {
        // No saved preference, use system preference
        initialTheme = getSystemTheme();
    }

    // Always explicitly set the theme to ensure it overrides any CSS defaults
    applyTheme(initialTheme);

    // Reflect initial state in the toggle button UI
    function updateToggleUI(theme) {
        if (!toggleBtn) return;
        if (theme === 'dark') {
            toggleBtn.innerHTML = '<svg width="20" height="20"><use href="#icon-sun"/></svg>';
            toggleBtn.setAttribute('aria-label', 'Switch to light mode');
        } else {
            toggleBtn.innerHTML = '<svg width="20" height="20"><use href="#icon-moon"/></svg>';
            toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
    updateToggleUI(initialTheme);

    // Toggle button click handler
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            let current = root.getAttribute('data-theme');
            let next;
            if (!current) {
                next = getSystemTheme() === 'dark' ? 'light' : 'dark';
            } else {
                next = current === 'dark' ? 'light' : 'dark';
            }
            applyTheme(next);
            localStorage.setItem(THEME_KEY, next);
            updateToggleUI(next);
        });
    }

    // Listen for system theme changes if no manual override
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem(THEME_KEY)) {
            const newSystemTheme = e.matches ? 'dark' : 'light';
            applyTheme(newSystemTheme);
            updateToggleUI(newSystemTheme);
        }
    });
})();
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

No build step required. Serve files via a local web server (required due to CORS restrictions):

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## Architecture

This is a static, no-backend recipe gallery. There are three source files:

- **`index.html`** — Shell with SVG sprites, filter buttons, the recipes grid, and modal markup. Also contains the ordered `<script>` tags that load each recipe file before `script.js`.
- **`script.js`** — All application logic: recipe registration shim, rendering (home carousels vs. search/filter flat grid), modal with ingredient scaling, search, tag filtering, URL hash routing, and theme toggle.
- **`styles.css`** — All styling.
- **`recipes/*.js`** — One file per recipe. Each self-registers via `window.registerRecipe`.

### Recipe Registration Flow

Recipe files load before `script.js`. If `registerRecipe` isn't defined yet, recipes push a factory into `window.__preRegisteredRecipes`. When `script.js` loads, it defines `window.registerRecipe` and immediately drains `__preRegisteredRecipes`.

### Home View vs. Search/Filter View

`renderRecipes()` in `script.js` branches on whether a search term or active tag filters exist:
- **No active search/filter**: Renders curated carousel sections defined by the `COLLECTIONS` array (Sips & Elixirs, The Breakfast Table, Savory Mains & Bites, Sweet Retreats), plus a "Fresh Finds" catch-all for uncategorized recipes.
- **Active search/filter**: Renders a flat grid with a result count header.

### Ingredient Scaling

Ingredients can be stored as either plain strings or structured objects `{ amount, unit, rest, note }`. The optional `note` field (e.g. `"to taste"`) is shown in parentheses after the ingredient and is never scaled. If `amount` is `null` or omitted, only `rest` (and `note`) are displayed. The `scaleIngredient()` function handles plain strings (including ranges, fractions, and mixed numbers). Structured objects are scaled directly in `openModal()`. The `data-orig` attribute on each `<li>` stores the original value for rescaling.

## Adding a New Recipe

1. Create `recipes/<slug>.js` using this pattern (see any existing recipe for reference):

```javascript
(function () {
    const recipe = {
        id: <next available integer>,
        title: "Recipe Name",
        description: "One-line description",
        category: "beverage|breakfast|mains|dessert|appetizer|dip",
        tags: ["tag1", "tag2"],   // used for filter buttons
        time: "XX min",
        servings: "X",
        difficulty: "Easy|Medium|Hard",
        image: "images/<slug>.png",   // omit if no image
        references: [],               // image paths or URLs
        ingredients: [
            { amount: 1, unit: 'cup', rest: 'water' },
            "plain string ingredient"
        ],
        instructions: ["Step 1", "Step 2"]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();
```

2. Add a `<script src="recipes/<slug>.js"></script>` tag in `index.html` **before** the `<script src="script.js">` tag.

3. Place the image (if any) in `images/`.

### Recipe IDs

IDs must be unique integers. Find the current highest with:
```bash
grep -h "id:" recipes/*.js | grep -o '[0-9]*' | sort -n | tail -1
```

### Tags vs. Category

- `category` controls which **carousel section** a recipe appears in on the home view.
- `tags` controls which **filter buttons** match the recipe. Tags and category are independent; a recipe should have both.

### Valid filter tags (defined in `index.html` filter buttons)
`caffeine-free`, `gluten-free`, `dairy-free`

### The `references` field

Each entry in `references` is either an image path (matched by extension or `images/` prefix — rendered inline) or a URL (rendered as a link). References appear in a collapsible section at the bottom of the modal.

## Modal Layout

The modal has two layouts driven by `window.innerWidth <= 700`:
- **Desktop (> 700px)**: Two-pane layout — left pane shows the image/stats/ingredients, right pane shows instructions and references.
- **Mobile (≤ 700px)**: Single-column layout with collapsible `<details>` sections for ingredients and instructions.

## Carousel Collapsibility

Each collection section on the home view is a `.carousel-container`. Clicking (or pressing Enter/Space on) the `.section-header` toggles the `collapsed` class on the container, which hides its content. This is purely CSS-driven via the `collapsed` class in `styles.css`.

# Recipe Gallery

A modern recipe gallery application with single-source recipe definitions for optimal efficiency.

## Project Structure

```
recipes/
├── index.html                 # Main application file
├── recipes/                   # Recipe data directory
│   ├── veggie-stir-fry.js    # Veggie Stir Fry recipe (single source)
│   └── palak-tofu.js         # Palak Tofu recipe (single source)
└── README.md                 # This file
```

## Features

- **Single-Source Recipes**: Each recipe is defined exactly once in its own JS file
- **No Duplication**: Eliminated redundant JSON files for maximum efficiency
- **Static-Friendly**: Works perfectly on GitHub Pages and other static hosting
- **Dynamic Loading**: Recipes register themselves when their JS files load
- **Responsive Design**: Works on desktop and mobile devices
- **Recipe Scaling**: Automatically scales ingredients based on servings
- **Unit Conversion**: Supports metric and imperial units
- **Search & Filter**: Search recipes and filter by category
- **Modal Views**: Detailed recipe view in overlay modal

## Adding New Recipes

1. Create a new JS file in the `recipes/` directory following this pattern:

```javascript
(function(){
  // Single definition of your recipe
  const recipe = {
    id: 3, // Use next available ID
    title: "Your Recipe Name",
    description: "Brief description",
    category: "lunch|dinner|breakfast|dessert",
    time: "XX min",
    servings: "X",
    difficulty: "Easy|Medium|Hard",
    ingredients: [
      "ingredient 1",
      "ingredient 2"
    ],
    instructions: [
      "step 1",
      "step 2"
    ]
  };

  // Register the recipe (single source of truth)
  if (typeof window.registerRecipe === 'function') {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();
```

2. Add the filename to the script injection list in `index.html` (search for `var scripts = ['veggie-stir-fry.js','palak-tofu.js'];`)

## Why This Approach?

- ✅ **Zero Duplication**: Each recipe exists in exactly one place
- ✅ **Smaller Files**: No redundant JSON copies
- ✅ **Easier Maintenance**: Change a recipe in one place only
- ✅ **GitHub Pages Ready**: No backend or build process required
- ✅ **Fast Loading**: Recipes register immediately when scripts execute

## Running the Application

Due to CORS restrictions, you'll need to serve the files through a web server:

### Option 1: Python (if installed)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Option 2: Node.js (if installed)
```bash
npx serve .
```

### Option 3: PHP (if installed)
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Browser Compatibility

- Modern browsers with ES6+ support
- Fetch API support required
- Local file access restrictions apply (must use web server)
# Recipe Gallery

A modern recipe gallery application with individual recipe files for better organization.

## Project Structure

```
recipes/
├── index.html                 # Main application file
├── recipes/                   # Recipe data directory
│   ├── index.json            # List of all recipe files
│   ├── veggie-stir-fry.json  # Veggie Stir Fry recipe data
│   └── palak-tofu.json       # Palak Tofu recipe data
└── README.md                 # This file
```

## Features

- **Modular Recipe Storage**: Each recipe is stored in its own JSON file
- **Dynamic Loading**: Recipes are loaded from external files using fetch API
- **Responsive Design**: Works on desktop and mobile devices
- **Recipe Scaling**: Automatically scales ingredients based on servings
- **Unit Conversion**: Supports metric and imperial units
- **Search & Filter**: Search recipes and filter by category
- **Modal Views**: Detailed recipe view in overlay modal

## Adding New Recipes

1. Create a new JSON file in the `recipes/` directory with the recipe data
2. Follow the existing format (see `veggie-stir-fry.json` as example)
3. Add the filename to `recipes/index.json`

### Recipe JSON Format

```json
{
    "id": 1,
    "title": "Recipe Name",
    "description": "Brief description",
    "category": "lunch|dinner|breakfast|dessert",
    "time": "XX min",
    "servings": "X",
    "difficulty": "Easy|Medium|Hard",
    "ingredients": [
        "ingredient 1",
        "ingredient 2"
    ],
    "instructions": [
        "step 1",
        "step 2"
    ]
}
```

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
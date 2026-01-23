(function () {
    const recipe = {
        id: 21,
        title: "Rajma (Kidney Bean Curry)",
        description: "A comforting North Indian staple featuring tender kidney beans simmered in a rich, spiced tomato-onion gravy with a hint of yogurt for creaminess. Perfect with steamed basmati rice.",
        category: "mains",
        tags: ["vegetarian", "gluten-free"],
        time: "45 min",
        servings: "2",
        difficulty: "Medium",
        image: "images/rajma.png",
        references: ["https://docs.google.com/document/d/1titM6fsADb8gf8R2OuG4Rxy_nAXnPSbmax2Z6wBiJb0/edit?usp=sharing"],
        ingredients: [
            { amount: 1, unit: 'rice cup', rest: 'Rajma (Kidney beans)', note: 'soaked overnight' },
            { amount: 3, unit: 'rice cups', rest: 'Water', note: 'approx 180 ml each, for cooking' },
            { amount: 1, unit: 'tbsp', rest: 'Oil', note: '' },
            { amount: 0.5, unit: 'tsp', rest: 'Cumin seeds (Jeera)', note: '' },
            { amount: 0.33, unit: '', rest: 'Onion (or 1 rice cup)', note: 'finely chopped' },
            { amount: 1.5, unit: 'medium', rest: 'Tomatoes', note: 'pureed or finely cut' },
            { amount: 0.25, unit: 'tsp', rest: 'Turmeric powder', note: '' },
            { amount: 0.5, unit: 'tsp', rest: 'Salt', note: 'for masala' },
            { amount: 1, unit: 'tsp', rest: 'Red chilli powder', note: '' },
            { amount: 1, unit: 'tsp', rest: 'Cumin powder', note: '' },
            { amount: 1, unit: 'tsp', rest: 'Coriander powder', note: '' },
            { amount: 0.25, unit: 'tsp', rest: 'Garam masala', note: '' },
            { amount: 0.25, unit: 'cup', rest: 'Yogurt (Curd)', note: '' },
            { amount: 1, unit: 'handful', rest: 'Fresh coriander', note: 'for garnish' }
        ],
        instructions: [
            "Pressure Cook: Rinse the soaked rajma and add to the pressure cooker with 3 rice cups of water (submerge by about 1 inch). Cook for 2 whistles until tender.",
            "Season Beans: Add a pinch of salt to the boiled rajma and simmer for 2 minutes to allow the beans to absorb the salt.",
            "Temper: Heat oil in a pan. Add cumin seeds and let them sizzle. Add the chopped onions and fry until golden brown.",
            "Masala Base: Add the tomato puree (or finely cut tomatoes), turmeric, salt, red chilli powder, cumin powder, and coriander powder. Cook until the oil begins to separate from the masala.",
            "Add Yogurt: Remove the pan from heat and let it cool slightly. Whisk the yogurt and add it slowly to the masala paste, stirring constantly to prevent splitting.",
            "Combine: Add the cooked rajma (along with its cooking water) back to the pan with the masala. Stir well and adjust salt if needed.",
            "Finish: Simmer for a few minutes until the gravy reaches your desired consistency. Add garam masala and garnish with freshly chopped coriander. Serve hot with rice."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

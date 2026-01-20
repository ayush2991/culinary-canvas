(function () {
    const recipe = {
        id: 19,
        title: "10 Minute Air Fryer Broccoli",
        description: "Ultra-crispy, healthy, and quick air-fried broccoli florets. A perfect side dish that takes only 10 minutes from prep to plate.",
        category: "appetizer",
        tags: ["vegetarian", "vegan", "gluten-free", "healthy"],
        time: "10 min",
        servings: "2",
        difficulty: "Easy",
        image: "images/air-fryer-broccoli.png",
        references: ["https://momsdish.com/air-fryer-broccoli"],
        ingredients: [
            { amount: 12, unit: 'oz', rest: 'Broccoli Florets', note: 'fresh' },
            { amount: 2, unit: 'tbsp', rest: 'Olive Oil', note: '' },
            { amount: 0.5, unit: 'tsp', rest: 'Garlic Powder', note: '' },
            { amount: 0.5, unit: 'tsp', rest: 'Salt', note: '' },
            { amount: 0.25, unit: 'tsp', rest: 'Ground Black Pepper', note: '' }
        ],
        instructions: [
            "Season the Broccoli: In a large bowl, toss broccoli florets with olive oil, garlic powder, salt, and pepper until evenly coated.",
            "Air Fry: Place the broccoli in the air fryer tray in a single layer to ensure even crisping.",
            "Cook: Air fry at 370°F (188°C) for 8–10 minutes. Toss or shake the basket halfway through to promote even browning.",
            "Serve: Serve hot as a side dish. Optional: Garnish with freshly grated parmesan cheese or a squeeze of lemon juice for extra flavor."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

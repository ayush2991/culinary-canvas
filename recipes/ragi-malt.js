(function () {
    const recipe = {
        id: 9,
        title: "Ragi Malt",
        description: "A nutritious, calcium-rich drink made from finger millet flour. Sweetened with jaggery and flavored with cardamom, it's a perfect warming breakfast.",
        category: "breakfast",
        tags: ["breakfast", "beverage", "gluten-free", "vegetarian"],
        time: "10 min",
        servings: "2",
        difficulty: "Easy",
        image: "images/ragi-malt.png",
        ingredients: [
            { amount: 3, unit: 'tbsp', rest: 'ragi flour (finger millet flour)' },
            { amount: 0.5, unit: 'cup', rest: 'water', note: 'to dissolve flour' },
            { amount: 1.5, unit: 'cup', rest: 'milk', note: 'dairy or plant-based' },
            { amount: 2, unit: 'tbsp', rest: 'jaggery powder', note: 'adjust to taste' },
            { amount: 0.25, unit: 'tsp', rest: 'cardamom powder' },
            { amount: null, unit: '', rest: 'chopped nuts (almonds/pistachios)', note: 'optional topping' }
        ],
        instructions: [
            "In a small bowl, whisk the ragi flour with 1/2 cup of water until there are no lumps.",
            "In a saucepan, bring the milk to a boil over medium heat.",
            "Lower the heat and slowly pour in the ragi mixture while stirring constantly to prevent lumps.",
            "Add the jaggery powder and continue to cook on low heat for 5-6 minutes until the mixture thickens and turns glossy.",
            "Stir in the cardamom powder.",
            "Pour into cups and serve warm, topped with chopped nuts if desired."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

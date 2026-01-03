(function () {
    const recipe = {
        id: 7,
        title: "Hot Chocolate",
        description: "Creamy Homemade Hot Chocolate. A combination of cocoa powder and chocolate chips make this hot chocolate extra flavorful and delicious! Ready in minutes.",
        category: "dessert",
        tags: ["dessert", "beverage", "gluten-free"],
        time: "10 min",
        servings: "2",
        difficulty: "Easy",
        image: "images/homemade-hot-chocolate.png",
        references: ["https://celebratingsweets.com/homemade-hot-chocolate/#recipe"],
        ingredients: [
            { amount: 2, unit: 'cup', rest: 'milk', note: 'whole milk or extra creamy oat milk' },
            { amount: 2, unit: 'tbsp', rest: 'unsweetened cocoa powder' },
            { amount: 1, unit: 'tbsp', rest: 'granulated sugar' },
            { amount: 4, unit: 'tbsp', rest: 'bittersweet or semisweet chocolate chips', note: 'or chopped chocolate bar' },
            { amount: 0.125, unit: 'tsp', rest: 'pure vanilla extract' },
            { amount: null, unit: '', rest: 'pinch of salt', note: 'optional' }
        ],
        instructions: [
            "Place milk, cocoa powder and sugar in a small saucepan.",
            "Heat over medium heat, whisking frequently, until warm (but not boiling).",
            "Add chocolate chips and whisk constantly until the chocolate chips melt and distribute evenly into the milk.",
            "Whisk in vanilla extract and a pinch of salt (if desired), serve immediately."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

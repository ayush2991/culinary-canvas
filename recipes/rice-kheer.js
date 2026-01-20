(function () {
    const recipe = {
        id: 20,
        title: "Rice Kheer (Indian Rice Pudding)",
        description: "A classic Indian dessert made with slow-cooked rice, full-fat milk, and aromatic cardamom. This rich and creamy pudding is a staple for celebrations and comfort.",
        category: "dessert",
        tags: ["dessert", "vegetarian", "gluten-free"],
        time: "40 min",
        servings: "2",
        difficulty: "Medium",
        image: "images/rice-kheer.png",
        references: [],
        ingredients: [
            { amount: 2, unit: 'tbsp', rest: 'Basmati Rice', note: 'soaked for 20 mins' },
            { amount: 500, unit: 'ml', rest: 'Full-fat Milk' },
            { amount: 3, unit: 'tbsp', rest: 'Sugar' },
            { amount: 2, unit: 'tbsp', rest: 'Chopped Nuts', note: 'Almonds, pistachios, or cashews' },
            { amount: 0.25, unit: 'tsp', rest: 'Cardamom Powder' },
            { amount: 6, unit: 'strands', rest: 'Saffron' }
        ],
        instructions: [
            "Boil the Milk: Pour the 2 cups of milk into a medium, heavy-bottomed pot. Bring to a boil over medium heat.",
            "Add Rice: Once boiling, drain the soaked rice and add it to the milk. Turn the heat down to low.",
            "The Slow Simmer: Cook for 20–25 minutes. Since it's a smaller batch, the milk will reduce more quickly, so stir every 2–3 minutes to prevent the rice from sticking to the bottom.",
            "Sweeten: Once the rice is soft and the milk looks creamy, stir in the 3 tbsp of sugar. Cook for another 3–5 minutes until the sugar dissolves.",
            "Flavor: Stir in the cardamom powder and saffron.",
            "The Double Garnish: Stir half the nuts directly into the kheer for texture, and sprinkle the remaining half on top before serving."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

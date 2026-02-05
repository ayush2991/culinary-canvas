(function () {
    const recipe = {
        id: 23,
        title: "Non-Dairy Rice Kheer",
        description: "A rich, creamy, and entirely plant-based version of the classic Indian rice pudding. Made with coconut and almond milk for a luscious texture without the dairy.",
        category: "dessert",
        tags: ["dessert", "vegan", "dairy-free", "gluten-free"],
        time: "60 min",
        servings: "4",
        difficulty: "Medium",
        image: "images/non-dairy-kheer.png",
        references: [],
        ingredients: [
            { amount: 0.25, unit: 'cup', rest: 'Basmati Rice', note: '' },
            { amount: 400, unit: 'ml', rest: 'Full-fat Coconut Milk', note: '1 can' },
            { amount: 2.25, unit: 'cups', rest: 'Almond Milk', note: '' },
            { amount: 0.5, unit: 'tsp', rest: 'Coconut Oil', note: 'for sauteeing nuts' },
            { amount: 4.5, unit: 'tbsp', rest: '', note: 'Jaggery' },
            { amount: 0.3, unit: 'tsp', rest: 'Cardamom Powder' },
            { amount: 1, unit: 'pinch', rest: 'Saffron' },
            { amount: 10, unit: '', rest: 'Cashews', note: 'chopped' },
            { amount: 10, unit: '', rest: 'Almonds', note: 'slivered' },
            { amount: null, unit: '', rest: 'Raisins and Pistachios', note: 'for garnish' }
        ],
        instructions: [
            "In a heavy-bottomed pot, bring the plant milk to a gentle simmer over medium high heat.",
            "Meanwhile, wash and soak basmati rice.",
            "Once the milk is simmering, reduce the heat to medium-low and let it simmer and reduce for 20 minutes, stirring occasionally.",
            "Crush some rice grains with your fingers to release starch",
            "Stir in the rice. Cook for another 10 minutes, stirring frequently to prevent the bottom from burning.",
            "While the kheer is cooking, heat a small pan over medium heat with a teaspoon of coconut oil (or ghee). Saute the chopped cashews and slivered almonds until they are starting to brown and become fragrant.",
            "Pat nuts dry with a paper towel and set aside.",
            "The kheer is ready when the rice is completely soft and the liquid has reduced by about a third.",
            "Stir in your sweetener, cardamom powder, saffron, and the sauteed nuts. If using jaggery, turn off the heat and let it cool for 5-10 minutes before adding it to prevent the milk from curdling.",
            "Garnish with raisins and any extra nuts. Best served chilled."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

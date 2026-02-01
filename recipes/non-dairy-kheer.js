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
            { amount: 0.25, unit: 'cup', rest: 'Basmati Rice', note: 'soaked for 30 minutes and drained' },
            { amount: 400, unit: 'ml', rest: 'Full-fat Coconut Milk', note: '1 can' },
            { amount: 2, unit: 'cups', rest: 'Almond Milk', note: 'Barista-blend oat milk also works well' },
            { amount: 4.5, unit: 'tbsp', rest: '', note: 'Jaggery' },
            { amount: 0.3, unit: 'tsp', rest: 'Cardamom Powder' },
            { amount: 1, unit: 'pinch', rest: 'Saffron' },
            { amount: 10, unit: '', rest: 'Cashews', note: 'chopped' },
            { amount: 10, unit: '', rest: 'Almonds', note: 'slivered' },
            { amount: null, unit: '', rest: 'Raisins and Pistachios', note: 'for garnish' }
        ],
        instructions: [
            "Prep the Rice: After soaking, lightly crush the rice grains with your fingers or a mortar and pestle to release starch, which helps thicken the milk.",
            "Simmer: In a heavy-bottomed pot, bring the plant milk to a gentle simmer over medium heat. Let it simmer and reduce for 15 minutes, stirring occasionally.",
            "Add Rice & Thicken: Stir in the crushed rice and reduce the heat to low. Cook for another 15 minutes, stirring frequently to prevent the bottom from burning. The kheer is ready when the rice is completely soft and the liquid has reduced by about a third.",
            "Saute Nuts: While the kheer is cooking, heat a small pan over medium heat with a teaspoon of coconut oil. Saute the chopped cashews and slivered almonds until they are starting to brown and become fragrant.",
            "Season: Stir in your sweetener, cardamom powder, saffron, and the sauteed nuts. If using jaggery, turn off the heat and let it cool for 5 minutes before adding it to prevent the milk from curdling.",
            "Finish: Garnish with raisins and any extra nuts. You can serve this warm or chilled."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

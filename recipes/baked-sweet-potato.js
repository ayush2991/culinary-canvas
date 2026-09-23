(function () {
    const recipe = {
        id: 35,
        title: "Baked Sweet Potato",
        description: "Whole sweet potatoes baked until fluffy inside with tender, caramelized edges. An easy side dish with simple toppings.",
        category: "mains",
        tags: ["dairy-free", "gluten-free"],
        time: "90 min",
        servings: "2",
        difficulty: "Easy",
        references: ["https://www.loveandlemons.com/baked-sweet-potato/"],
        image: "images/baked-sweet-potato.jpeg",
        ingredients: [
            { amount: 2, unit: '', rest: 'sweet potatoes' },
            { amount: null, unit: '', rest: 'butter or vegan butter, for serving', note: 'optional' },
            { amount: null, unit: '', rest: 'sea salt, for serving', note: 'optional' }
        ],
        instructions: [
            "Preheat the oven to 425°F and line a rimmed baking sheet with foil or parchment paper.",
            "Use a fork to poke holes in the sweet potatoes and place them on the baking sheet. Leave them unwrapped.",
            "Bake for 45-75 minutes, until easily pierced with a fork or butter knife through the core.",
            "Slit through the skin and serve hot topped with butter and sea salt, if desired."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

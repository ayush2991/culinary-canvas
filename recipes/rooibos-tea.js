(function () {
    const recipe = {
        id: 32,
        title: "Rooibos Tea",
        description: "A soothing, naturally caffeine-free red tea steeped with honey and a splash of warm oat milk.",
        category: "beverage",
        tags: ["caffeine-free", "gluten-free", "dairy-free"],
        time: "12 min",
        servings: "1",
        difficulty: "Easy",
        image: "images/rooibos-tea.png",
        references: [],
        ingredients: [
            { amount: 4, unit: 'tsp', rest: 'loose rooibos tea (Harney & Sons Organic)' },
            { amount: 0.75, unit: 'cup', rest: 'boiling water' },
            { amount: 2, unit: 'tsp', rest: 'honey' },
            { amount: 1 / 3, unit: 'cup', rest: 'oat milk (Califia Farms Barista Blend)', note: 'microwaved' }
        ],
        instructions: [
            "Add the loose rooibos tea to a steel strainer in the mug.",
            "Pour the boiling water over the tea and let it steep for 10 minutes.",
            "Stir in the honey until dissolved.",
            "Add the warmed oat milk.",
            "Let sit for 30 seconds, then remove the tea pouch and serve."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

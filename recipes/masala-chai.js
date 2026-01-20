(function () {
    const recipe = {
        id: 10,
        title: "Authentic Indian Masala Chai",
        description: "A perfect cup of traditional masala chai, brewed with aromatic spices and fresh milk for a rich, cooked-milk flavor.",
        category: "beverage",
        tags: ["beverage", "vegetarian", "gluten-free"],
        time: "10 min",
        servings: "2",
        difficulty: "Easy",
        image: "images/masala-chai.png",
        references: [],
        ingredients: [
            { amount: 1.5, unit: 'cup', rest: 'water' },
            { amount: 0.5, unit: 'inch', rest: 'ginger' },
            { amount: 4, unit: 'pods', rest: 'green cardamom' },
            { amount: 2, unit: '', rest: 'cloves' },
            { amount: 0.5, unit: 'inch', rest: 'cinnamon stick' },
            { amount: 3, unit: 'tsp', rest: 'black tea leaves (CTC)' },
            { amount: 4, unit: 'tsp', rest: 'sugar', note: 'to taste' },
            { amount: 1, unit: 'cup', rest: 'whole milk', note: 'adjust for desired creaminess' }
        ],
        instructions: [
            "Tip: For the perfect cup, use a small pot so the liquid doesn't evaporate too quickly. Use CTC tea (Crush, Tear, Curl), which looks like small brown pebbles and produces a much stronger, maltier brew than standard tea bags.",
            "Crush the spices: Lightly crush the ginger, cardamom pods, cloves, and cinnamon stick using a mortar and pestle. You want to release their oils, not pulverize them into a paste.",
            "Bring the water to a boil in a small saucepan. Add the crushed ginger and cardamom. Let them simmer for about 2 minutes until the water turns slightly yellow/green.",
            "Add the tea leaves. Boil for 2 minutes until the mixture is very dark and fragrant. Avoid over-boiling the tea leaves as it can make the chai bitter.",
            "Pour in the milk.",
            "Bring the chai to a boil. When the foam rises to the top of the pot, turn the heat down or lift the pot. Do this 3-5 times to develop a rich, cooked-milk flavor.",
            "Turn off the heat and strain the chai directly into your mug.",
            "Add the sugar and stir until dissolved."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

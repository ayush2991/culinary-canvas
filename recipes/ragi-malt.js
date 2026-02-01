(function () {
    const recipe = {
        id: 9,
        title: "Ragi Malt",
        description: "A nutritious, calcium-rich drink made from finger millet flour. Sweetened with jaggery and flavored with cardamom, it's a perfect warming breakfast.",
        category: "beverage",
        tags: ["breakfast", "beverage", "gluten-free", "vegetarian"],
        time: "10 min",
        servings: "1",
        difficulty: "Easy",
        image: "images/ragi-malt.png",
        references: ["images/ragi-malt-ref.png"],
        ingredients: [
            { amount: 0.75, unit: 'cup', rest: 'water' },
            { amount: 0.25, unit: 'cup', rest: 'water', note: 'to dissolve flour' },
            { amount: 0.5, unit: 'cup', rest: 'milk', note: 'almond milk for dairy free version' },
            { amount: 1.5, unit: 'tbsp', rest: 'ragi flour' },
            { amount: 1, unit: 'spoon', rest: 'honey or jaggery' }
        ],
        instructions: [
            "Bring the main portion of water to boil.",
            "Meanwhile mix ragi flour with the reserved room temperature water thoroughly.",
            "Once water is boiling, add the dissolved ragi water to the pot slowly and whisk or mix as you add to prevent clumps.",
            "Bring that to boil and let it boil for 5 mins until ragi cooks and mix periodically.",
            "Add milk to the pot and let it warm up to desired drinking temperature.",
            "Pour into a cup, mix in honey or jaggery to sweeten and enjoy!"
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

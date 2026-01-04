(function () {
    const recipe = {
        id: 14,
        title: "Kanda Batata Poha",
        description: "A classic Maharashtrian snack of flattened rice. Light, savory, and accented with onions, potatoes, and crunchy peanuts—the ultimate comfort breakfast.",
        category: "breakfast",
        tags: ["breakfast", "vegan", "gluten-free"],
        time: "20 min",
        servings: "2",
        difficulty: "Easy",
        image: "images/poha.png",
        references: ["https://www.indianhealthyrecipes.com/poha-recipe-kanda-batata-poha/"],
        ingredients: [
            { amount: 1.5, unit: 'cups', rest: 'Poha (beaten rice flakes)', note: 'thick to medium variety' },
            { amount: 1, unit: 'sprig', rest: 'Curry leaves' },
            { amount: 1.5, unit: 'tbsp', rest: 'Oil' },
            { amount: 3, unit: 'tbsp', rest: 'Peanuts or cashews' },
            { amount: 0.75, unit: 'tsp', rest: 'Mustard seeds' },
            { amount: 0.75, unit: 'tsp', rest: 'Cumin seeds (jeera)' },
            { amount: null, unit: '', rest: 'Pinch of hing (asafoetida)' },
            { amount: 1, unit: 'medium', rest: 'Onion, finely chopped' },
            { amount: 1, unit: 'medium', rest: 'Potato, cubed small', note: 'optional' },
            { amount: 2, unit: '', rest: 'Green chilies, chopped' },
            { amount: 0.25, unit: 'tsp', rest: 'Turmeric powder' },
            { amount: 0.33, unit: 'tsp', rest: 'Salt', note: 'adjust to taste' },
            { amount: 0.75, unit: 'tsp', rest: 'Sugar', note: 'optional' },
            { amount: null, unit: '', rest: 'Lemon juice', note: 'as needed' },
            { amount: 2, unit: 'tbsp', rest: 'Coriander leaves, chopped' }
        ],
        instructions: [
            "Quickly rinse poha in a colander and set aside to soften",
            "Gently mix salt and a pinch of sugar into the damp poha",
            "Heat oil and fry peanuts/cashews until golden; set aside",
            "In the same pan, add tempering seeds and let them sizzle",
            "Add onions, curry leaves, and green chilies; sauté until translucent",
            "Add potatoes (if using), cover, and cook on low until tender",
            "Stir in turmeric and the softened poha",
            "Cover and steam on low for 2-3 minutes until hot",
            "Turn off heat; squeeze lemon and toss in coriander and roasted nuts",
            "Serve hot with a side of sev or fresh coconut. Enjoy! 😋"
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

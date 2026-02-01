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
            { amount: 0.5, unit: 'tsp', rest: 'Salt', note: 'adjust to taste' },
            { amount: 0.75, unit: 'tsp', rest: 'Sugar', note: 'optional' },
            { amount: 1.5, unit: 'tbsp', rest: 'Oil' },
            { amount: 3, unit: 'tbsp', rest: 'roasted peanuts' },
            { amount: 0.75, unit: 'tsp', rest: 'Mustard seeds' },
            { amount: 0.75, unit: 'tsp', rest: 'Cumin seeds (jeera)' },
            { amount: null, unit: '', rest: 'Pinch of hing (asafoetida)' },
            { amount: 1, unit: 'medium', rest: 'Onion, finely chopped' },
            { amount: 1, unit: 'sprig', rest: 'Curry leaves' },
            { amount: 2, unit: '', rest: 'Green chilies, chopped' },
            { amount: 1, unit: 'medium', rest: 'Potato, cubed small', note: 'optional' },
            { amount: 1, unit: 'cup', rest: 'Frozen peas', note: 'optional' },
            { amount: 0.25, unit: 'tsp', rest: 'Turmeric powder' },
            { amount: null, unit: '', rest: 'Lemon juice', note: 'as needed' },
            { amount: 2, unit: 'tbsp', rest: 'Coriander leaves, chopped' }
        ],
        instructions: [
            "Quickly rinse poha in a colander and set aside to soften",
            "Gently mix salt and a pinch of sugar into the damp poha",
            "While poha soaks, chop and boil potatoes until 80% done; add frozen peas for the last 1-2 minutes",
            "In a large pan, add oil and tempering seeds and let them sizzle",
            "Add onions, curry leaves, and green chilies; sauté until translucent",
            "Stir in the par-boiled potatoes and peas, and cook briefly",
            "Stir in turmeric and the softened poha",
            "Cover and steam on low for 2-3 minutes until warm",
            "Turn off heat; squeeze plenty of lemon or aamchur and toss in coriander and roasted peanuts",
            "Serve warm with a side of bhujia or sev. Enjoy! 😋"
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

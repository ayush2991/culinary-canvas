(function () {
    const recipe = {
        id: 36,
        title: "Pan-Fried Chicken Tenders",
        description: "Chicken tenders marinated in coconut cream, ginger-garlic, and warm chicken masala, then pan-fried until browned and crisp.",
        category: "mains",
        tags: ["dairy-free", "gluten-free"],
        time: "40 min",
        servings: "2",
        difficulty: "Easy",
        references: [],
        image: "images/pan-fried-chicken-tenders.jpeg",
        ingredients: [
            { amount: 350, unit: 'g', rest: 'chicken tenders, cleaned and chopped' },
            { amount: 1, unit: 'tbsp', rest: 'Everest chicken masala' },
            { amount: 1, unit: 'tsp', rest: 'ginger-garlic paste' },
            { amount: 2, unit: 'tbsp', rest: 'coconut cream' },
            { amount: 1, unit: 'tsp', rest: 'red chili powder' },
            { amount: 0.75, unit: 'tsp', rest: 'salt' },
            { amount: null, unit: '', rest: 'avocado oil, for cooking' },
            { amount: null, unit: '', rest: 'dried fenugreek leaves, crushed', note: 'optional' }
        ],
        instructions: [
            "In a medium bowl, mix the coconut cream, chicken masala, ginger-garlic paste, red chili powder, and salt. Taste and adjust the seasoning before adding the chicken.",
            "Add the chicken and mix until all the pieces are coated. Cover and refrigerate for 25 minutes.",
            "Heat avocado oil in a large non-stick pan. Add the chicken pieces in a single layer, separating them as needed.",
            "Cook on one side for about 5 minutes, until it starts to brown. Flip the pieces, starting from the center, and cook until the other side begins to brown.",
            "Raise the heat to medium-high. Cook, stirring often, until dark brown spots form and the chicken looks crisp.",
            "If desired, crush dried fenugreek leaves between your palms and sprinkle them over the chicken."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

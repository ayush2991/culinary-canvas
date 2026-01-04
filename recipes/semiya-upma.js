(function () {
    const recipe = {
        id: 15,
        title: "Semiya Upma (Vermicelli Upma)",
        description: "A quick, non-sticky South Indian breakfast. Roasted vermicelli tossed with crunchy nuts, tempered spices, and optional veggies for a perfectly textured morning meal.",
        category: "breakfast",
        tags: ["breakfast", "vegetarian", "vegan"],
        time: "20 min",
        servings: "4",
        difficulty: "Easy",
        image: "images/semiya-upma.png",
        references: ["https://www.indianhealthyrecipes.com/semiya-upma-vermicelli-upma-recipe/"],
        ingredients: [
            { amount: 1, unit: 'cup', rest: 'Semiya (vermicelli)' },
            { amount: 1.5, unit: 'tbsp', rest: 'Oil or Ghee' },
            { amount: 2, unit: 'tbsp', rest: 'Peanuts or cashews' },
            { amount: 0.25, unit: 'tsp', rest: 'Mustard seeds' },
            { amount: 0.5, unit: 'tsp', rest: 'Cumin seeds' },
            { amount: 1, unit: 'tsp', rest: 'Chana dal (split bengal gram)', note: 'optional' },
            { amount: 1, unit: 'tsp', rest: 'Urad dal (skinned black gram)', note: 'optional' },
            { amount: null, unit: '', rest: 'Pinch of asafoetida (hing)', note: 'optional' },
            { amount: 1, unit: 'small', rest: 'Onion, thinly sliced' },
            { amount: 1, unit: '', rest: 'Green chili & small piece of ginger, chopped' },
            { amount: 1, unit: 'sprig', rest: 'Curry leaves' },
            { amount: 1.5, unit: 'cup', rest: 'Mixed vegetables (carrot, peas, beans)', note: 'optional' },
            { amount: 1.5, unit: 'cups', rest: 'Water' },
            { amount: 0.66, unit: 'tsp', rest: 'Salt', note: 'adjust to taste' },
            { amount: 1, unit: 'tbsp', rest: 'Lemon juice', note: 'optional' },
            { amount: 2, unit: 'tbsp', rest: 'Coriander leaves, chopped' }
        ],
        instructions: [
            "Dry roast semiya until lightly golden (skip if pre-roasted)",
            "Heat oil and fry peanuts/cashews until crunchy; remove and set aside",
            "In the same oil, add tempering seeds and dals; fry until golden",
            "Add onions, ginger, green chili, and curry leaves; sauté until translucent",
            "Add veggies (if using) and sauté until slightly tender",
            "Pour water, add salt, and bring to a rapid boil",
            "Add roasted semiya and stir immediately",
            "Cook uncovered until water is absorbed and semiya is tender",
            "Turn off heat, cover, and let sit for 5 minutes to fluff up",
            "Finish with lemon juice, coriander, and the roasted nuts. Serve hot! 😋"
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

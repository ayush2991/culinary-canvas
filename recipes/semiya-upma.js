(function () {
    const recipe = {
        id: 15,
        title: "Semiya Upma (Vermicelli Upma)",
        description: "A quick and flavorful South Indian breakfast made with roasted vermicelli, tempered spices, and crunchy nuts. This non-sticky version is both nutritious and comforting, perfect for busy mornings.",
        category: "breakfast",
        tags: ["breakfast", "vegetarian", "vegan"],
        time: "20 min",
        servings: "4",
        difficulty: "Easy",
        image: "images/semiya-upma.png",
        references: ["https://www.indianhealthyrecipes.com/semiya-upma-vermicelli-upma-recipe/"],
        ingredients: [
            { amount: 1, unit: 'cup', rest: 'Semiya (vermicelli)', note: 'approx. 110g' },
            { amount: 1.5, unit: 'cups', rest: 'Water', note: 'use 1 cup for thin variety' },
            { amount: 0.66, unit: 'tsp', rest: 'Salt', note: 'adjust to taste' },
            { amount: 1, unit: 'small', rest: 'Onion, thinly sliced or chopped' },
            { amount: 1, unit: '', rest: 'Green chili, slit or chopped' },
            { amount: 1, unit: 'sprig', rest: 'Curry leaves' },
            { amount: 0.5, unit: 'tsp', rest: 'Ginger, finely chopped' },
            { amount: 1.5, unit: 'tbsp', rest: 'Oil or Ghee' },
            { amount: 0.25, unit: 'tsp', rest: 'Mustard seeds' },
            { amount: 0.5, unit: 'tsp', rest: 'Cumin seeds' },
            { amount: 1, unit: 'tsp', rest: 'Chana dal (split bengal gram)', note: 'optional' },
            { amount: 1, unit: 'tsp', rest: 'Urad dal (skinned black gram)', note: 'optional' },
            { amount: null, unit: '', rest: 'Pinch of asafoetida (hing)', note: 'optional' },
            { amount: 2, unit: 'tbsp', rest: 'Peanuts or cashews' },
            { amount: 1.5, unit: 'cup', rest: 'Mixed vegetables (carrot, peas, beans)', note: 'finely chopped, optional' },
            { amount: 1, unit: 'tbsp', rest: 'Lemon juice', note: 'to serve, optional' },
            { amount: 2, unit: 'tbsp', rest: 'Coriander leaves, chopped', note: 'for garnish' }
        ],
        instructions: [
            "If using unroasted semiya, dry roast it in a pan on medium heat until lightly golden and fragrant. Transfer to a plate and set aside.",
            "Heat oil or ghee in the same pan. Fry peanuts or cashews until golden and crunchy. Remove and set aside.",
            "Add mustard seeds, cumin seeds, chana dal, and urad dal to the pan. Fry until the dals turn golden brown.",
            "Add hing (if using), onions, ginger, green chili, and curry leaves. Sauté for 2-3 minutes until onions turn translucent.",
            "If using vegetables, add them now and sauté for 3 minutes. Cover and cook on low heat until slightly tender.",
            "Pour in the water and add salt. Bring it to a rapid boil.",
            "Add the roasted semiya to the boiling water and stir immediately.",
            "Cook uncovered on a medium flame until all the water is absorbed and the vermicelli is cooked through.",
            "Turn off the heat, cover the pan, and let it sit for 5-6 minutes to fluff up.",
            "Squeeze lemon juice, garnish with coriander leaves, roasted nuts, and optionally fresh grated coconut. Serve hot."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

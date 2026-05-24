(function () {
    const recipe = {
        id: 20,
        title: "Moong Dal Sprout Chaat",
        description: "A streamlined, foolproof, and refreshing sprouted mung bean salad packed with fresh veggies, crunchy peanuts, and tangy spices.",
        category: "appetizer",
        tags: ["vegetarian", "vegan", "gluten-free", "healthy", "salad"],
        time: "1.5 days",
        servings: "2-4",
        difficulty: "Easy",
        image: "images/moong-dal-sprout-chaat.png",
        references: [],
        ingredients: [
            { amount: 1, unit: 'cup', rest: 'Green Moong Dal', note: 'soaked and sprouted' },
            { amount: 1, unit: 'small', rest: 'Onion', note: 'finely chopped' },
            { amount: 1, unit: 'medium', rest: 'Tomato', note: 'finely chopped' },
            { amount: 0.25, unit: 'cup', rest: 'Dry Roasted Peanuts', note: '' },
            { amount: 1, unit: 'tsp', rest: 'Chaat Masala', note: '' },
            { amount: 0.5, unit: 'tsp', rest: 'Roasted Cumin Powder', note: '' },
            { amount: 1, unit: 'pinch', rest: 'Salt', note: 'or to taste' },
            { amount: 1, unit: 'tbsp', rest: 'Fresh Lemon Juice', note: '' },
            { amount: 1, unit: 'small', rest: 'Green Chili', note: 'finely chopped, optional' }
        ],
        instructions: [
            "Soak: Rinse the green moong dal 2-3 times in fresh water. Submerge it in a bowl with twice the amount of water and let it soak overnight.",
            "Sprout: Drain the water completely. Place the dal in a clean glass jar, cover it with a dark cloth, and let it sit for about 1.5 days. Rinse and drain once a day to keep them fresh, stopping when sprouts are ¼ to ½ inch long.",
            "Parboil: Transfer the sprouts to a pot. Add water until they are halfway submerged and add a pinch of salt. Bring to a boil, then lower the heat and simmer covered for 3 to 5 minutes until tender but still crisp. Drain well.",
            "Toss & Serve: Combine the warm sprouts with the chopped onion, tomato, and peanuts in a large bowl. Toss in the chaat masala, roasted cumin powder, salt, green chili, and lemon juice. Mix well and serve immediately."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();
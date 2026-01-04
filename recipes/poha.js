(function () {
    const recipe = {
        id: 14,
        title: "Kanda Batata Poha",
        description: "A classic Maharashtrian breakfast dish made with flattened rice, tempered with aromatic spices, onions, and potatoes. It's light, nutritious, and perfectly balanced with sweet, tangy, and spicy notes.",
        category: "breakfast",
        tags: ["breakfast", "vegan", "gluten-free"],
        time: "20 min",
        servings: "2",
        difficulty: "Easy",
        image: "images/poha.png",
        references: ["https://www.indianhealthyrecipes.com/poha-recipe-kanda-batata-poha/"],
        ingredients: [
            { amount: 1.5, unit: 'cups', rest: 'Poha (beaten rice flakes)', note: 'thick to medium variety' },
            { amount: 1, unit: 'medium', rest: 'Onion, finely chopped' },
            { amount: 2, unit: '', rest: 'Green Chilies, slit or chopped', note: 'adjust to taste' },
            { amount: 1, unit: 'sprig', rest: 'Curry leaves' },
            { amount: 1, unit: 'medium', rest: 'Potato, cubed to 1/2 inch', note: 'optional' },
            { amount: 1.5, unit: 'tbsp', rest: 'Oil' },
            { amount: 3, unit: 'tbsp', rest: 'Peanuts or cashews' },
            { amount: 0.75, unit: 'tsp', rest: 'Mustard seeds' },
            { amount: 0.75, unit: 'tsp', rest: 'Cumin seeds (jeera)' },
            { amount: null, unit: '', rest: 'Pinch of hing (asafoetida)' },
            { amount: 0.25, unit: 'tsp', rest: 'Turmeric powder' },
            { amount: 0.33, unit: 'tsp', rest: 'Salt', note: 'adjust to taste' },
            { amount: 0.75, unit: 'tsp', rest: 'Sugar', note: 'optional' },
            { amount: null, unit: '', rest: 'Lemon juice', note: 'as needed' },
            { amount: 2, unit: 'tbsp', rest: 'Coriander leaves, chopped' }
        ],
        instructions: [
            "Rinse poha in a colander or strainer quickly under running water. Drain completely and set aside to soften. It should be soft enough to break easily when pressed between fingers.",
            "Add salt and sugar (if using) to the softened poha. Mix gently with your fingers to break any lumps.",
            "Heat oil in a pan. Fry the peanuts/cashews on medium heat until golden and crunchy. Remove and set aside.",
            "In the same pan, add mustard seeds and cumin seeds. When they begin to pop, add hing, onions, curry leaves, and green chilies.",
            "Sauté until the onions turn translucent and lightly pink.",
            "If using potatoes, add them now and sauté for a minute. Cover and cook on low heat until soft. Sprinkle a little water if needed.",
            "Add turmeric powder and the prepared poha. Mix well and cover the pan.",
            "Cook on very low heat for 2-3 minutes until heated through. If it feels dry, sprinkle a little water and steam.",
            "Turn off the heat. Squeeze lemon juice and garnish with chopped coriander and roasted peanuts.",
            "Serve hot, optionally topped with sev, farsan, or fresh coconut."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

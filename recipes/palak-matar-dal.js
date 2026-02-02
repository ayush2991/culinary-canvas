(function () {
    const recipe = {
        id: 24,
        title: "Tadka-First Palak Matar Toor–Masoor Dal (No Onion)",
        description: "A nutritious, comforting, and onion-free dal made with a blend of toor and masoor lentils, fresh spinach, and sweet green peas. The unique 'tadka-first' method ensures a rich, garlic-infused flavor base.",
        category: "mains",
        tags: ["mains", "vegetarian", "gluten-free"],
        time: "35 min",
        servings: "3",
        difficulty: "Easy",
        image: "images/palak-matar-dal.png",
        references: ["images/palak-matar-dal-ref.png"],
        ingredients: [
            { amount: 0.5, unit: 'rice cup', rest: 'Toor dal', note: '' },
            { amount: 0.5, unit: 'rice cup', rest: 'Masoor dal', note: '' },
            { amount: 1.5, unit: 'medium', rest: 'Tomatoes', note: 'finely chopped' },
            { amount: 0.5, unit: 'rice cup', rest: 'Petite green peas', note: '' },
            { amount: 1, unit: 'US cup', rest: 'Palak (Spinach)', note: 'chopped' },
            { amount: 0.5, unit: 'tsp', rest: 'Turmeric', note: '' },
            { amount: 1, unit: 'tsp', rest: 'Coriander powder', note: '' },
            { amount: 0.75, unit: 'tsp', rest: 'Red chilli powder', note: 'adjust 0.5-1 tsp' },
            { amount: 1, unit: 'pinch', rest: 'Salt', note: 'to taste' },
            { amount: 1.25, unit: 'tbsp', rest: 'Ghee or Oil', note: 'adjust 1-1.5 tbsp' },
            { amount: 0.5, unit: 'tsp', rest: 'Cumin seeds', note: '' },
            { amount: 1.5, unit: 'tsp', rest: 'Garlic paste', note: 'adjust 1-1.5 tsp' },
            { amount: 1, unit: 'sprig', rest: 'Curry leaves', note: '' },
            { amount: 0.5, unit: 'piece', rest: 'Dried red chilli', note: '' },
            { amount: 1, unit: 'splash', rest: 'Lemon juice', note: 'to finish' },
            { amount: 1, unit: 'handful', rest: 'Cilantro leaves', note: 'for garnish' }
        ],
        instructions: [
            "Boil the Dal: Combine toor and masoor dal. Use a 1:2.5 ratio of dal to water. Soak for 15 minutes to a few hours. Pressure cook for 3 whistles until soft. Set aside.",
            "Make the Tadka (in the pot): Heat oil or ghee in your main pot. Add cumin seeds and let them splutter. Add curry leaves and dried red chilli. Stir in the garlic paste and cook until fragrant, keeping heat medium to avoid burning.",
            "Cook Tomatoes: Add chopped tomatoes and a pinch of salt. Sauté until the tomatoes soften and become jammy (about 3–5 minutes). Wait until the oil looks glossy again.",
            "Add Spices: Lower the heat. Add turmeric, red chilli powder, and coriander powder. Stir for 10–15 seconds, being careful not to burn the spices.",
            "Cook Peas: Add green peas and 3 tbsp of water. Cover and cook for a few minutes until the peas soften.",
            "Combine: Pour in the boiled dal along with any remaining water. Mash lightly and mix well. Simmer for 5 minutes so the flavors merge.",
            "Add Spinach: Stir in the chopped palak (spinach). Cook for 2–3 minutes only until wilted. Taste and adjust salt.",
            "Finish: Add a squeeze of lemon and fresh cilantro leaves. If the dal is too thick, add a bit of hot water to adjust the consistency. Cover and let it rest for 2 minutes before serving."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

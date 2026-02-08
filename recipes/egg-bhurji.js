(function () {
    const recipe = {
        id: 25,
        title: "Egg Bhurji",
        description: "A vibrant and savory Indian street-food classic. These masala scrambled eggs are packed with onions, tomatoes, green chilies, and a blend of aromatic spices, making for a quick, high-protein breakfast or a satisfying meal with rice or roti.",
        category: "breakfast",
        tags: ["gluten-free", "dairy-free", "breakfast"],
        time: "15 min",
        servings: "2",
        difficulty: "Easy",
        image: "images/egg-bhurji.png",
        references: [],
        ingredients: [
            { amount: 4, unit: 'large', rest: 'Eggs' },
            { amount: 2, unit: 'tsp', rest: 'Oil' },
            { amount: 0.5, unit: 'tsp', rest: 'Cumin seeds' },
            { amount: 0.33, unit: 'medium', rest: 'Onion, finely chopped' },
            { amount: 2, unit: '', rest: 'small Green chilies, finely chopped', note: 'optional' },
            { amount: 0.5, unit: 'medium', rest: 'Tomato, finely chopped' },
            { amount: 0.25, unit: 'tsp', rest: 'Turmeric powder' },
            { amount: 0.33, unit: 'tsp', rest: 'Red chili powder' },
            { amount: 0.33, unit: 'tsp', rest: 'Coriander powder' },
            { amount: 0.125, unit: 'tsp', rest: 'Garam masala', },
            { amount: null, unit: '', rest: 'Salt to taste' },
            { amount: 2, unit: 'tbsp', rest: 'Fresh coriander, chopped', note: 'optional' }
        ],
        instructions: [
            "Crack the eggs into a bowl, add a pinch of salt, and whisk lightly. Set aside.",
            "Heat oil in a pan over medium heat. Add cumin seeds and let them splutter.",
            "Add the green chilies and chopped onions and sauté until they become translucent and light golden.",
            "Add the chopped tomatoes, turmeric, red chilli, coriander powder, garam masala and salt. ",
            "Mix well and cook for 3-5 minutes until tomatoes are fully cooked so there's no moisture left.",
            "Pour the whisked eggs into the pan and scramble into the masala.",
            "Continuously break the eggs in the pan as they cook until they are well done.",
            "Turn off the heat and continue to break and cook them until they have a keema texture. Add salt to taste.",
            "Garnish with fresh coriander. Serve hot with rice."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

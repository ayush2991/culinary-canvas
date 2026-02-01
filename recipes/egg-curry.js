(function () {
    const recipe = {
        id: 22,
        title: "Indian Egg Curry",
        description: "A flavorful and protein-packed North Indian curry featuring hard-boiled eggs shallow-fried and simmered in a rich, spiced tomato-onion gravy. Perfect with paratha or steamed basmati rice.",
        category: "mains",
        tags: ["mains", "gluten-free"],
        time: "60 min",
        servings: "3",
        difficulty: "Medium",
        image: "images/egg-curry.png",
        references: [],
        ingredients: [
            { amount: 6, unit: '', rest: 'Eggs' },
            { amount: 0.25, unit: 'tsp', rest: 'Turmeric powder', note: 'for eggs' },
            { amount: 0.5, unit: 'tsp', rest: 'Red chili powder', note: 'for eggs' },
            { amount: 1, unit: 'pinch', rest: 'Salt', note: 'to taste, for frying eggs' },
            { amount: 2, unit: 'tsp', rest: 'Oil', note: 'for shallow frying' },
            { amount: 2, unit: 'tbsp', rest: 'Oil', note: 'for curry' },
            { amount: 1, unit: 'tsp', rest: 'Cumin seeds', note: '' },
            { amount: 1, unit: 'piece', rest: 'Bay leaf', note: '' },
            { amount: 1, unit: 'sprig', rest: 'Curry leaves', note: '' },
            { amount: 2, unit: '', rest: 'Green chili', note: 'chopped' },
            { amount: 1, unit: 'large', rest: 'Onion', note: 'thinly sliced' },
            { amount: 1, unit: 'tbsp', rest: 'Ginger-garlic paste', note: '' },
            { amount: 2, unit: 'medium', rest: 'Tomatoes', note: 'finely chopped' },
            { amount: 0.5, unit: 'tsp', rest: 'Turmeric powder', note: 'for curry' },
            { amount: 1, unit: 'tsp', rest: 'Red chili powder', note: 'adjust to taste' },
            { amount: 1.5, unit: 'tsp', rest: 'Coriander powder', note: '' },
            { amount: 1, unit: 'tsp', rest: 'Cumin powder', note: '' },
            { amount: 1, unit: 'tsp', rest: 'Curry powder', note: '' },
            { amount: 0.5, unit: 'tsp', rest: 'Garam masala', note: '' },
            { amount: 1, unit: 'tsp', rest: 'Salt', note: 'to taste' },
            { amount: 1, unit: 'cup', rest: 'Water', note: 'for gravy' },
            { amount: 2, unit: 'tbsp', rest: 'Fresh coriander leaves', note: 'chopped, for garnish' }
        ],
        instructions: [
            "Boil the eggs in an egg boiler.",
            "Peel the boiled eggs and lightly slit them so they absorb the flavors.",
            "Prepare the eggs: Heat oil in a pan. Add turmeric, chili powder, and salt. Add the eggs, toss them in the spices and shallow-fry until lightly golden and the skin is slightly blistered. Set aside.",
            "Make the base: Heat oil in a wide pan. Add the cumin seeds and bay leaf, allowing them to splutter.",
            "Add the curry leaves, green chilies, and onions. Sauté over medium heat until the onions are caramelized.",
            "Add the ginger-garlic paste and cook for 1-2 minutes until the raw aroma disappears.",
            "Add the tomatoes and stir in the turmeric, chili powder, cumin powder, coriander powder, curry powder, garam masala, and some salt (add the remaining salt at the end).",
            "Cook until the tomatoes turn soft and the oil starts separating from the sides.",
            "Add water (adjust to get your desired gravy consistency) and reduce the gravy partially.",
            "Add the fried eggs. Cover and simmer on low-medium heat for 5-8 minutes so the eggs absorb the flavors of the gravy.",
            "Garnish with fresh coriander."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

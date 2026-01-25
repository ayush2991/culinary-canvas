(function () {
    const recipe = {
        id: 22,
        title: "Indian Egg Curry",
        description: "A flavorful and protein-packed North Indian curry featuring hard-boiled eggs shallow-fried and simmered in a rich, spiced tomato-onion gravy. Perfect with paratha or steamed basmati rice.",
        category: "mains",
        tags: ["mains", "gluten-free"],
        time: "40 min",
        servings: "3",
        difficulty: "Medium",
        image: "images/egg-curry.png",
        references: [],
        ingredients: [
            { amount: 6, unit: '', rest: 'Eggs', note: 'hard-boiled and peeled' },
            { amount: 0.25, unit: 'tsp', rest: 'Turmeric powder', note: 'for eggs' },
            { amount: 0.5, unit: 'tsp', rest: 'Red chili powder', note: 'for eggs' },
            { amount: 1, unit: 'pinch', rest: 'Salt', note: 'to taste, for frying eggs' },
            { amount: 2, unit: 'tsp', rest: 'Oil', note: 'for shallow frying' },
            { amount: 2, unit: 'tbsp', rest: 'Oil', note: 'for curry' },
            { amount: 1, unit: 'tsp', rest: 'Cumin seeds', note: '' },
            { amount: 1, unit: 'piece', rest: 'Bay leaf', note: '' },
            { amount: 1, unit: 'large', rest: 'Onion', note: 'finely chopped' },
            { amount: 1, unit: 'tbsp', rest: 'Ginger-garlic paste', note: '' },
            { amount: 2, unit: 'medium', rest: 'Tomatoes', note: 'finely chopped or pureed' },
            { amount: 0.5, unit: 'tsp', rest: 'Turmeric powder', note: 'for curry' },
            { amount: 1, unit: 'tsp', rest: 'Red chili powder', note: 'adjust to taste' },
            { amount: 1.5, unit: 'tsp', rest: 'Coriander powder', note: '' },
            { amount: 0.5, unit: 'tsp', rest: 'Garam masala', note: '' },
            { amount: 1, unit: 'pinch', rest: 'Salt', note: 'to taste' },
            { amount: 1, unit: 'cup', rest: 'Water', note: 'approx 240ml, for gravy' },
            { amount: 2, unit: 'tbsp', rest: 'Fresh coriander leaves', note: 'chopped, for garnish' }
        ],
        instructions: [
            "Prep the eggs: Heat 1-2 tsp oil in a pan. Lightly slit the boiled eggs so they absorb flavors. Toss with turmeric, chili powder, and salt. Shallow-fry until lightly golden and the skin is slightly blistered. Set aside.",
            "Make the base: Heat 2 tbsp oil in the same or a fresh pan. Add cumin seeds and bay leaf; let them splutter. Add chopped onions and sauté over medium heat until golden brown.",
            "Aromatics: Add ginger-garlic paste; cook for 1-2 minutes until the raw smell disappears.",
            "Tomato & Spices: Add tomatoes and cook until soft and oil starts separating from the sides. Stir in turmeric, chili powder, coriander powder, and salt. Mix well and cook for 1–2 minutes to toast the spices.",
            "Simmer: Add water (adjust to get your desired gravy consistency). Bring to a gentle boil, then gently add the fried eggs.",
            "Flavor Infusion: Cover and simmer on low-medium heat for 8–10 minutes so the eggs absorb the flavors of the gravy.",
            "Finish: Sprinkle garam masala over the curry and garnish with fresh coriander. Turn off heat and let it rest for 5 minutes before serving (the flavor improves!)."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

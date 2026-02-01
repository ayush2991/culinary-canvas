(function () {
    // Single definition of the Chikudikaya Kura recipe
    const recipe = {
        id: 4,
        title: "Chikudikaya Kura (Cluster Bean Curry)",
        description: "A comforting, heritage-style cluster bean curry simmered in a rich tomato-onion masala. Infused with tempered mustard seeds and earthy urad dal, this mildly spiced dish offers a deep, savory flavor profile finished with a burst of fresh cilantro.",
        category: "mains",
        tags: ["mains", "vegan"],
        time: "25 min",
        servings: "4",
        difficulty: "Easy",
        image: "images/chikudikaya_kura.png",
        references: ["images/chikudikaya-ref.png"],
        ingredients: [
            { amount: 450, unit: 'g', rest: 'cluster beans (Chikudikaya), trimmed and cut into 1–2 inch pieces', note: 'approx 1 lb' },
            { amount: null, unit: '', rest: 'Water to cover beans in pressure cooker' },
            { amount: 0.5, unit: 'tsp', rest: 'salt', note: 'for cooking beans' },
            { amount: 2, unit: 'tbsp', rest: 'cooking oil (sesame or vegetable)' },
            { amount: 1, unit: 'tsp', rest: 'mustard seeds' },
            { amount: 1, unit: 'tsp', rest: 'cumin seeds' },
            { amount: 1, unit: 'tsp', rest: 'urad dal (split black gram)' },
            { amount: 2.5, unit: '', rest: 'dry red chilies (broken)', note: 'adjust to taste' },
            { amount: 1, unit: 'tsp', rest: 'fresh ginger, grated', note: 'optional' },
            { amount: 1, unit: '', rest: 'medium onion, finely chopped' },
            { amount: 1, unit: '', rest: 'medium tomato, finely diced' },
            { amount: 0.5, unit: 'tsp', rest: 'turmeric powder' },
            { amount: 1, unit: 'tsp', rest: 'red chili powder', note: 'adjust to taste' },
            { amount: null, unit: '', rest: 'Salt to taste (additional)' },
            { amount: null, unit: '', rest: 'Fresh cilantro, for garnish' }
        ],
        instructions: [
            "Rinse the cluster beans, trim any tough ends and cut into 1–2 inch pieces.",
            "Place the beans in a pressure cooker, add enough water to just cover them and 1/2 tsp salt. Cook for 2–3 whistles until tender but still holding shape. Drain and set aside.",
            "Heat oil in a pan over medium heat. Add mustard seeds and when they begin to splutter add cumin seeds, urad dal and broken red chilies. Fry until the dal turns light golden.",
            "Add grated ginger (if using) and sauté briefly until fragrant.",
            "Add the chopped onion with a pinch of salt and sauté until translucent, about 5–7 minutes.",
            "Add the diced tomato and cook until the tomatoes break down and oil begins to separate, about 5–8 minutes.",
            "Lower the heat and stir in turmeric powder, red chili powder and additional salt. Cook the spices for about 1 minute to remove the raw taste.",
            "Add the cooked cluster beans and toss to coat them evenly with the masala. Cover and simmer on low for 3–5 minutes to let the flavors meld.",
            "Turn off the heat, garnish with chopped cilantro and serve hot with roti, chapati or steamed rice."
        ]
    };

    // Register the recipe (single source of truth)
    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();
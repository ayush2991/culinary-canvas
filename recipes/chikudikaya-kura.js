(function(){
    // Single definition of the Chikudikaya Kura recipe
    const recipe = {
        id: 4,
        title: "Chikudikaya Kura (Cluster Bean Curry)",
        description: "Home-style cluster bean curry with tomato-onion masala — mildly spiced and garnished with cilantro.",
        category: "lunch",
        time: "25 min",
        servings: "4",
        difficulty: "Easy",
        image: "images/chikudikaya_kura.png",
        ingredients: [
            "Cluster beans (Chikudikaya) — 1 lb (about 450 g), trimmed and cut into 1–2 inch pieces",
            "Water — enough to cover the beans in the pressure cooker",
            "Salt — 1/2 tsp (for cooking beans)",
            "Cooking oil (sesame or vegetable) — 2 tbsp",
            "Mustard seeds — 1 tsp",
            "Cumin seeds — 1 tsp",
            "Urad dal (split black gram) — 1 tsp",
            "Dry red chilies (broken) — 2–3, adjust to taste",
            "Fresh ginger, grated (optional) — 1 tsp",
            "Onion — 1 medium, finely chopped",
            "Tomato — 1 medium, finely diced",
            "Turmeric powder — 1/2 tsp",
            "Red chili powder — 1 tsp (adjust to taste)",
            "Salt — to taste (additional)",
            "Fresh cilantro — for garnish"
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

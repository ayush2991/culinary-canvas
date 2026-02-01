(function () {
    // Single definition of the Chikudikaya Kura recipe
    const recipe = {
        id: 4,
        title: "Chikudikaya (Valor) Curry (WIP)",
        description: "A comforting, heritage-style cluster bean curry simmered in a rich tomato-onion masala. Infused with tempered mustard seeds and earthy urad dal, this mildly spiced dish offers a deep, savory flavor profile finished with a burst of fresh cilantro.",
        category: "mains",
        tags: ["mains", "vegan"],
        time: "60 min",
        servings: "3",
        difficulty: "Medium",
        image: "images/chikudikaya_kura.png",
        references: ["images/chikudikaya-ref.png"],
        ingredients: [
            { amount: 450, unit: 'g', rest: 'valor beans (chikudikaya), trimmed and cut into 1–2 inch pieces', note: 'approx 1 lb' },
            { amount: null, unit: '', rest: 'Water to cover beans in pressure cooker' },
            { amount: 0.5, unit: 'tsp', rest: 'salt', note: 'for cooking beans' },
            { amount: 2, unit: 'tbsp', rest: 'cooking oil' },
            { amount: 1, unit: 'tsp', rest: 'mustard seeds' },
            { amount: 1, unit: 'tsp', rest: 'cumin seeds' },
            { amount: 2, unit: '', rest: 'dry red chilies (broken)', note: 'adjust to taste' },
            { amount: 1, unit: 'sprig', rest: 'curry leaves' },
            { amount: 1, unit: 'tsp', rest: 'fresh ginger, grated', note: 'optional' },
            { amount: 1, unit: '', rest: 'small onion, finely chopped' },
            { amount: 1, unit: '', rest: 'medium tomato, finely diced' },
            { amount: 0.5, unit: 'tsp', rest: 'turmeric powder' },
            { amount: 1, unit: 'tsp', rest: 'red chili powder', note: 'adjust to taste' },
            { amount: null, unit: '', rest: 'Salt to taste (additional)' },
            { amount: null, unit: '', rest: 'Fresh cilantro, for garnish' }
        ],
        instructions: [
            "Prepare the chikudikaya by snapping off the edges and breaking or cutting them into small pieces of 1-2 beans each.",
            "Add the beans to a pressure cooker and cover with water. Add a little salt and cook for 2 whistles.",
            "In a wide pan, heat oil and add the tempering ingredients—mustard seeds, jeera, and red chilies.",
            "Optionally, add a little grated fresh ginger.",
            "Add the curry leaves and onions and fry until translucent.",
            "Add the diced tomatoes and stir in the salt, turmeric, and red chili powder. Cook until the tomatoes turn mushy.",
            "Add the cooked chikudikaya, cover, and cook on low for a few minutes so the beans absorb the flavors.",
            "Garnish with fresh cilantro and serve!"
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

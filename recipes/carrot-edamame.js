(function () {
    const recipe = {
        id: 13,
        title: "Carrot Edamame Dry Curry",
        description: "A simple, wholesome stir-fry of tender carrots and edamame (or peas), tempered with aromatic mustard seeds and cumin. Finished with earthy roasted sesame powder for a delightful nutty flavor.",
        category: "mains",
        tags: ["mains", "vegan", "gluten-free"],
        time: "20 min",
        servings: "2",
        difficulty: "Easy",
        image: "images/carrot-edamame.png",
        references: [],
        ingredients: [
            { amount: 4, unit: '', rest: 'medium carrots' },
            { amount: 1, unit: 'cup', rest: 'frozen edamame or green peas' },
            { amount: null, unit: '', rest: 'water for boiling' },
            { amount: 1, unit: 'tbsp', rest: 'oil' },
            { amount: 0.5, unit: 'tsp', rest: 'mustard seeds' },
            { amount: 0.5, unit: 'tsp', rest: 'cumin seeds (jeera)' },
            { amount: 0.5, unit: '', rest: 'dry red chili' },
            { amount: 0.5, unit: 'cup', rest: 'diced onion' },
            { amount: 0.25, unit: 'tsp', rest: 'turmeric powder' },
            { amount: 0.5, unit: 'tsp', rest: 'salt', note: 'plus pinch for boiling' },
            { amount: 1, unit: 'tbsp', rest: 'roasted sesame powder' }
        ],
        instructions: [
            "Cut carrots into large 4-6 inch pieces. Place carrots and edamame in a pressure cooker with water reaching half the veggie height, a pinch of salt, and turmeric. Cook for 1 whistle, then remove from heat and let cool. Once cool, dice into small pieces.",
            "If using frozen peas instead of edamame, soak in boiling water for 5-10 minutes.",
            "Heat oil in a pan over medium heat. Add mustard seeds and cumin seeds. Let them splutter.",
            "Break the dry red chili and add it to the oil.",
            "Add the diced onion and sauté until translucent.",
            "Stir in the turmeric powder, remaining salt, and the prepared boiled vegetables (carrots and peas/edamame). Toss gently to combine.",
            "Turn off the heat. Sprinkle the roasted sesame powder over the top and mix well. Serve warm."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

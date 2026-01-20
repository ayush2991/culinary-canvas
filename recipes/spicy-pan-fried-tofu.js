(function () {
    const recipe = {
        id: 18,
        title: "Spicy Pan-Fried Tofu",
        description: "Crispy, golden-brown tofu cubes glazed in a savory, spicy sauce. A versatile dish that works as a snack, side, or protein for bowls.",
        category: "mains",
        tags: ["vegetarian", "vegan", "dairy-free"],
        time: "20 min",
        servings: "3",
        difficulty: "Easy",
        image: "images/spicy-pan-fried-tofu.png",
        references: ["images/spicy-pan-fried-tofu-ref.jpg"],
        ingredients: [
            { amount: 1, unit: 'block', rest: 'Firm Tofu', note: 'drained and patted dry' },
            { amount: 3, unit: 'tbsp', rest: 'Oil', note: 'plus more if needed' },
            { amount: 4, unit: 'cloves', rest: 'Garlic', note: 'finely chopped' },
            { amount: 0.5, unit: 'tsp', rest: 'Salt', note: '' },
            { amount: 1 / 3, unit: 'tsp', rest: 'Chili Powder', note: '' },
            { amount: 1, unit: 'tbsp', rest: 'Soy Sauce', note: '' },
            { amount: 1, unit: 'tbsp', rest: 'Ketchup', note: '' },
            { amount: 1, unit: 'tsp', rest: 'Sriracha Powder', note: '' },
            { amount: 1, unit: 'tsp', rest: 'Cumin Powder', note: '' },
            { amount: 0.5, unit: 'tsp', rest: 'Black Pepper Powder', note: '' },
            { amount: 1, unit: 'pinch', rest: 'Sugar', note: '' }
        ],
        instructions: [
            "Prepare the tofu: Drain the tofu and rinse briefly under running water. Pat dry thoroughly with kitchen paper to remove excess moisture. Optional: Toss with 1 tsp cornflour for extra crispiness.",
            "Cut: Cut the tofu into ½-inch cubes.",
            "Pan-fry: Heat 3 tbsp oil in a pan over medium heat. Add the tofu cubes and chopped garlic. Fry, turning occasionally, until the tofu starts turning lightly golden on multiple sides (about 5–10 minutes).",
            "Evaporate moisture: As the tofu cooks, some water will release. Let it evaporate completely, allowing the tofu to crisp slightly.",
            "Season: Lower the heat slightly and add salt, chili powder, soy sauce, ketchup, sriracha powder, cumin powder, black pepper, and a small pinch of sugar.",
            "Finish: Toss well so the spices coat the tofu evenly. Fry for another 4–5 minutes until the masalas seep in and the tofu looks well glazed. Add a little more oil only if the pan looks dry. Optional: Add a few drops of sesame oil for more depth.",
            "Serve: Serve hot as a snack, side dish, or stuffing for wraps and bowls. Optional: Garnish with chopped spring onions or coriander."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

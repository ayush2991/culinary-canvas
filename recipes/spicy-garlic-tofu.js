(function () {
  // Single definition of the Spicy Garlic Tofu recipe
  const recipe = {
    id: 28,
    title: "Spicy Garlic Tofu",
    description: "Firm tofu in a spicy garlic sauce with soy, sriracha, and red chili. Ready in 20 minutes over rice.",
    category: "mains",
    tags: ["dairy-free"],
    time: "20 min",
    servings: "2",
    difficulty: "Easy",
    image: "images/spicy-garlic-tofu.png",
    references: [],
    ingredients: [
      { amount: 1, unit: 'package', rest: 'firm tofu', note: 'House Foods brand (14oz)' },
      { amount: 2, unit: 'tbsp', rest: 'avocado oil' },
      { amount: 3, unit: 'tbsp', rest: 'garlic', note: 'minced or paste' },
      { amount: 0.66, unit: 'tsp', rest: 'salt' },
      { amount: 0.5, unit: 'tsp', rest: 'red chili powder' },
      { amount: 1, unit: 'tbsp', rest: 'soy sauce' },
      { amount: 1, unit: 'tbsp', rest: 'ketchup' },
      { amount: 1, unit: 'tsp', rest: 'sriracha' },
      { amount: 1, unit: 'tsp', rest: 'cumin powder' },
      { amount: null, unit: '', rest: 'black pepper', note: 'sprinkle' },
      { amount: null, unit: '', rest: 'sugar', note: 'pinch' },
      { amount: null, unit: '', rest: 'rice', note: 'for serving' }
    ],
    instructions: [
      "Drain the tofu, rinse it gently under water, wrap it in a clean kitchen towel, and squeeze out the excess water.",
      "Chop the tofu into bite-sized cubes.",
      "Heat the avocado oil in a pan or skillet and add the garlic.",
      "Add the tofu to the pan and let it cook for a short while.",
      "Stir in the salt, red chili powder, soy sauce, ketchup, sriracha, cumin powder, black pepper, and sugar until the tofu is evenly coated.",
      "Continue cooking until the tofu is nearly finished. Turn the heat up to medium-high to get some browning on the edges, but do not cook it for too long at this stage.",
      "Remove from the heat and serve hot alongside the rice."
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
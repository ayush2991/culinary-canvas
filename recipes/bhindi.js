(function () {
  // Single definition of the Bhindi (Okra) recipe
  const recipe = {
    id: 1,
    title: "Bhindi (Stir-fried Okra)",
    description: "Savor the crunch of perfectly stir-fried okra, tossed in a fragrant blend of turmeric, cumin, and coriander. This homestyle classic transforms tender bhindi into a crispy, non-sticky delight, accented by caramelized onions and softened tomatoes.",
    category: "lunch",
    tags: ["vegan"],
    time: "20 min",
    servings: "4",
    difficulty: "Easy",
    image: "images/bhindi.png",
    // Ingredients as structured objects for more reliable scaling
    ingredients: [
      { amount: 400, unit: 'g', rest: 'bhindi (okra), washed, dried and cut into 1/2–1 inch pieces' },
      { amount: 2.5, unit: 'tbsp', rest: 'cooking oil (vegetable or peanut)' },
      { amount: 1, unit: 'tsp', rest: 'minced garlic', note: 'optional' },
      { amount: 1, unit: '', rest: 'green chilies, slit', note: 'optional' },
      { amount: 1, unit: '', rest: 'medium onion, finely chopped' },
      { amount: 1, unit: '', rest: 'medium tomato, finely chopped' },
      { amount: 0.5, unit: 'tsp', rest: 'turmeric powder' },
      { amount: 1, unit: 'tsp', rest: 'cumin powder' },
      { amount: 1, unit: 'tsp', rest: 'coriander powder' },
      { amount: 1, unit: 'tsp', rest: 'red chili powder (adjust to taste)' },
      { amount: null, unit: '', rest: 'Salt to taste' }
    ],
    instructions: [
      "Heat oil in a wide pan on medium-high. Add the bhindi in a single layer (don't overcrowd) and fry, stirring occasionally, until the okra is no longer sticky and starts to brown — about 8-10 minutes.",
      "If using, add minced garlic and slit green chilies and fry for 1-2 minutes until fragrant.",
      "Add the chopped onions and cook until translucent and lightly golden.",
      "Add the chopped tomatoes and stir to combine. Cook until the tomatoes turn soft and mushy; you may cover and simmer for a few minutes if needed.",
      "Stir in turmeric, cumin powder, coriander powder and salt. Cook for another 1-2 minutes so spices bloom.",
      "Finish with red chili powder (and adjust salt). Serve hot with roti, paratha or steamed rice. Enjoy! 😋"
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

(function () {
  const recipe = {
    id: 1,
    title: "Bhindi (Stir-fried Okra)",
    description: "Savor the crunch of perfectly stir-fried okra, tossed in a fragrant blend of turmeric, cumin, and coriander. This homestyle classic transforms tender bhindi into a crispy, non-sticky delight, accented by caramelized onions and softened tomatoes.",
    category: "mains",
    tags: ["mains", "vegan"],
    time: "20 min",
    servings: "3",
    difficulty: "Easy",
    image: "images/bhindi.png",
    references: ["images/bhindi-fry-ref.png"],
    ingredients: [
      { amount: 2, unit: 'tbsp', rest: 'cooking oil' },
      { amount: 450, unit: 'g', rest: 'bhindi (okra), washed, dried and cut into 1/2–1 inch pieces' },
      { amount: 1, unit: 'tsp', rest: 'minced garlic', note: 'optional' },
      { amount: 1, unit: '', rest: 'green chili, slit', note: 'optional' },
      { amount: 0.33, unit: '', rest: 'large onion, finely chopped' },
      { amount: 1, unit: '', rest: 'small tomato, finely chopped' },
      { amount: 0.5, unit: 'tsp', rest: 'turmeric powder' },
      { amount: 0.75, unit: 'tsp', rest: 'cumin powder' },
      { amount: 0.75, unit: 'tsp', rest: 'coriander powder' },
      { amount: null, unit: '', rest: 'Salt to taste' },
      { amount: 0.5, unit: 'tsp', rest: 'red chili powder (adjust to taste)' }
    ],
    instructions: [
      "Heat oil in a wide pan and add the bhindi pieces.",
      "Fry until the bhindi is no longer sticky. At this stage, add the minced garlic and green chilies (if using) and fry for another 1–2 minutes.",
      "Add the finely chopped onions and sauté until they become translucent.",
      "Stir in the chopped tomatoes and add the salt, turmeric, cumin, coriander, and red chili powder. Stir well to combine.",
      "Cook until the tomatoes turn mushy. You can cover and cook here if needed.",
      "Add more salt if needed. Serve hot and enjoy!",
    ]
  };

  if (typeof window.registerRecipe === 'function') {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

(function(){
  // Single definition of the Oat Turmeric Latte recipe
  const recipe = {
    id: 3,
    title: "Oat Turmeric Latte",
    description: "Warming golden milk latte with aromatic spices and creamy oat milk",
    category: "breakfast",
    time: "5 min",
    servings: "1",
    difficulty: "Easy",
    image: "images/oat_turmeric_latte.png",
    ingredients: [
      "2/3 cup oat milk (enough to almost submerge instant frother)",
      "1/8 tsp cardamom powder",
      "1/8 tsp cinnamon powder", 
      "1/8 tsp turmeric powder",
      "1 pinch ground black pepper",
      "1 tsp honey"
    ],
    instructions: [
      "Add oat milk to your container until the instant frother is almost submerged.",
      "Add each of cardamom, cinnamon, and turmeric powder to the oat milk.",
      "Add a pinch of ground black pepper to enhance turmeric absorption.",
      "Blend on setting 4 (heat) and then for setting 2 (froth) for a few seconds.",
      "Pour the spiced oat milk into your serving cup.",
      "Add a small spoon of honey and stir to combine.",
      "Enjoy your warming golden turmeric latte!"
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
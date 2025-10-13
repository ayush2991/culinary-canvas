(function(){
  // Single definition of the Veggie Stir Fry recipe
  const recipe = {
    id: 1,
    title: "Veggie Stir Fry",
    description: "Colorful mix of fresh vegetables in a savory sauce",
    category: "lunch",
    time: "20 min",
    servings: "3",
    difficulty: "Easy",
    ingredients: [
      "2 cups mixed vegetables",
      "3 tablespoons soy sauce",
      "2 cloves garlic",
      "1 tablespoon sesame oil",
      "1 teaspoon ginger",
      "2 tablespoons vegetable oil"
    ],
    instructions: [
      "Heat oil in a wok or large pan",
      "Add garlic and ginger, stir-fry 30 seconds",
      "Add vegetables and stir-fry for 5-7 minutes",
      "Add soy sauce and sesame oil",
      "Serve hot over rice"
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
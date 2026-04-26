(function () {
  const recipe = {
    id: 29,
    title: "Iced Black Sesame Latte",
    description: "Decadent nutty latte ready in 5 minutes with just 5 ingredients.",
    category: "beverage",
    tags: ["gluten-free", "dairy-free", "caffeine-free"],
    time: "5 min",
    servings: "1",
    difficulty: "Easy",
    image: "images/iced-black-sesame-latte.png",
    references: ["https://www.ohhowcivilized.com/iced-black-sesame-latte/#wprm-recipe-container-29585"],
    ingredients: [
      { amount: 1, unit: 'tbsp', rest: 'black sesame paste', note: '(sugar-free)' },
      { amount: 1, unit: 'tbsp', rest: 'brown sugar', note: 'or 3/4 white sugar' },
      { amount: 0.25, unit: 'cup', rest: 'hot water' },
      { amount: 3, unit: 'cubes', rest: 'ice' },
      { amount: 1, unit: 'cup', rest: 'creamy oat milk', note: '(Califia Farms Barista Blend)' },
    ],
    instructions: [
      "Combine black sesame paste, brown sugar, and hot water in a cup. Mix with a handheld milk frother until fully combined. Some dark spots are normal — the paste won't dissolve completely.",
      "Pour the black sesame mixture into a glass.",
      "Add ice, then top with milk.",
      "Stir before drinking.",
    ]
  };

  if (typeof window.registerRecipe === 'function') {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();
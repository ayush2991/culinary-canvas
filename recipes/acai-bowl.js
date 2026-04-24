(function () {
  // Single definition of the Acai Bowl recipe
  const recipe = {
    id: 18,
    title: "Acai Bowl",
    description: "A refreshing and nutritious acai bowl topped with fresh mango, banana and peanut butter. Perfect for a healthy breakfast or snack.",
    category: "breakfast",
    tags: ["vegan", "dairy-free", "gluten-free"],
    time: "10 min",
    servings: "1",
    difficulty: "Easy",
    image: "images/acai-bowl.png",
    references: [],
    ingredients: [
      { amount: 1, unit: '', rest: 'fresh mango', note: 'for topping' },
      { amount: 1.5, unit: '', rest: 'banana', note: 'half for blending, half for topping' },
      { amount: 1, unit: 'packet', rest: 'frozen acai puree', note: 'unsweetened' },
      { amount: 1, unit: 'tbsp', rest: 'maple syrup'},
      { amount: 90, unit: 'ml', rest: 'almond milk' },
      { amount: 0.5, unit: 'cup', rest: 'antioxidant berry mix'},
      { amount: 2, unit: 'tbsp', rest: 'granola', note: 'for topping' },
      { amount: null, unit: '', rest: 'peanut butter', note: 'for topping' },
      { amount: null, unit: '', rest: 'coconut flakes', note: 'for topping' }
    ],
    instructions: [
      "Slice banana and dice mango first so they're ready to go for the topping.",
      "Break the frozen acai packet into chunks and blend with almond milk, antioxidant mix and banana until smooth but still slightly thick.",
      "Transfer the blended acai to a serving bowl.",
      "Arrange mango, sliced banana, and granola on top of the acai base.",
      "Drizzle with peanut butter and sprinkle coconut flakes.",
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
(function () {
  // Single definition of the Iced Beetroot Rose Latte recipe
  const recipe = {
    id: 26,
    title: "Iced Beetroot Rose Latte",
    description: "Pink latte with beetroot powder, rose water, and chilled oat milk over ice. Caffeine-free and naturally sweet.",
    category: "beverage",
    tags: ["dairy-free", "gluten-free", "caffeine-free"],
    time: "5 min",
    servings: "1",
    difficulty: "Easy",
    image: "images/iced-beetroot-rose-latte.png",
    references: [],
    ingredients: [
      { amount: 1, unit: 'tsp', rest: 'beetroot powder' },
      { amount: 0.5, unit: 'tsp', rest: 'rose water' },
      { amount: 1, unit: 'tsp', rest: 'maple syrup or agave', note: 'liquid sweeteners dissolve better in cold drinks' },
      { amount: 2, unit: 'tbsp', rest: 'hot water', note: 'to dissolve beetroot powder' },
      { amount: 3, unit: 'cubes', rest: 'ice' },
      { amount: 1, unit: 'cup', rest: 'chilled creamy oat milk (Califia Farms Barista Blend)' },
      { amount: null, unit: '', rest: 'dried rose petals', note: 'for garnish' }
    ],
    instructions: [
      "In a small bowl or cup, mix beetroot powder, rose water, and sweetener with hot water to create a smooth syrup.",
      "Add ice cubes to a tall glass (~12 oz capacity). Pour oat milk over the ice, leaving a little room at the top.",
      "Slowly pour pink beetroot mixture all over the milk. It will create a beautiful marble effect as it sinks.",
      "Add rose petals right on top of the ice so they stay afloat for that perfect photo look.",
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
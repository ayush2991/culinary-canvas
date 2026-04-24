(function () {
  // Chocolate Mousse (Ninja Blender) recipe
  const recipe = {
    id: 5,
    title: "Chocolate Mousse",
    description: "Silky chocolate mousse blended with cocoa, honey, and almond milk. Chilled to set, ready in 40 minutes.",
    category: "dessert",
    tags: ["dairy-free", "gluten-free"],
    time: "40 min",
    servings: "2",
    difficulty: "Easy",
    image: "images/chocolate-mousse.png",
    references: ["images/chocolate-pudding.jpeg"],
    ingredients: [
      { amount: 2, unit: '', rest: 'eggs' },
      { amount: 0.25, unit: 'cup', rest: 'almond milk' },
      { amount: 2, unit: 'tbsp', rest: 'honey' },
      { amount: 2, unit: 'tbsp', rest: 'cocoa powder' },
      { amount: 1, unit: 'tsp', rest: 'vanilla essence' },
      { amount: 1, unit: 'pinch', rest: 'cinnamon powder' },
      { amount: null, unit: '', rest: 'Chopped, soaked walnuts or almonds (optional)', note: 'a small handful' }
    ],
    instructions: [
      "Place all ingredients (eggs, milk, honey, cocoa powder, vanilla essence, and a pinch of cinnamon) into the Ninja blender pitcher.",
      "Blend on medium-high until completely smooth and well combined — about 20–30 seconds depending on your blender.",
      "Pour the mixture into serving bowls or glasses and refrigerate for at least 30 minutes to chill and slightly set.",
      "Serve chilled. Top with chopped walnuts, a dusting of cocoa, or fresh berries."
    ]
  };

  if (typeof window.registerRecipe === 'function') {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

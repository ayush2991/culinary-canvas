 (function(){
  // Chocolate Mousse (Ninja Blender) recipe
  const recipe = {
    id: 5,
    title: "Chocolate Mousse (Ninja Blender)",
    description: "A quick, silky chocolate mousse made in a Ninja blender",
  category: "dessert",
  tags: ["dessert"],
    time: "40 min",
    servings: "2",
    difficulty: "Easy",
    image: "images/chocolate-mousse.png",
    ingredients: [
      { amount: 2, unit: '', rest: 'eggs' },
      { amount: 0.25, unit: 'cup', rest: 'almond milk' },
      { amount: 2, unit: 'tbsp', rest: 'honey' },
      { amount: 2, unit: 'tbsp', rest: 'cocoa powder' },
      { amount: 1, unit: 'tsp', rest: 'vanilla essence' },
      {amount: null, unit: '', rest: 'Chopped, soaked walnuts or almonds (optional)', note: 'a small handful' }
    ],
    instructions: [
      "Place all ingredients (eggs, milk, honey, cocoa powder and vanilla essence) into the Ninja blender pitcher.",
      "Blend on medium-high until completely smooth and well combined — about 20–30 seconds depending on your blender.",
      "Pour the mixture into serving bowls or glasses and refrigerate for at least 30 minutes to chill and slightly set.",
      "Serve chilled. Optionally top with chopped walnuts, a dusting of cocoa, or fresh berries. Enjoy! 🍫"
    ]
  };

  if (typeof window.registerRecipe === 'function') {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

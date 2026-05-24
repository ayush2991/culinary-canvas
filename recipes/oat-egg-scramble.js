(function () {
  const recipe = {
    id: 29,
    title: "Oat Egg Scramble",
    description:
      "A warm, high-protein oat and egg breakfast finished with banana, apple, maple syrup, and chocolate chips.",
    category: "breakfast",
    tags: ["gluten-free", "dairy-free"],
    time: "25 min",
    servings: 2,
    difficulty: "Easy",
    image: "images/oat-egg-scramble.png",
    references: [],
    ingredients: [
      { amount: 4, unit: "", rest: "Egg whites" },
      { amount: 2, unit: "large", rest: "Eggs" },
      { amount: 0.66, unit: "cup", rest: "Rolled oats" },
      { amount: 1, unit: "tbsp", rest: "Maple syrup" },
      {
        amount: 0.5,
        unit: "",
        rest: "Banana",
        note: "sliced, or use up to 1 whole banana",
      },
      { amount: 0.5, unit: "", rest: "Apple", note: "diced" },
      { amount: null, unit: "", rest: "Chocolate chips", note: "for topping" },
      { amount: 1, unit: "tsp", rest: "Oil", note: "for cooking" },
    ],
    instructions: [
      "Beat the egg whites and whole eggs together in a bowl until evenly combined.",
      "Add the rolled oats and maple syrup, then mix well.",
      "Let the mixture sit for 15 minutes so the oats soften.",
      "Heat oil in a pan over medium heat. Add the oat and egg mixture and stir immediately so the eggs do not scramble into large curds.",
      "Move the pan on and off the heat as needed, reducing the heat if the eggs are cooking too quickly.",
      "Continue stirring and cooking until the egg is fully cooked and no liquid remains.",
      "Top with sliced banana, diced apple, and chocolate chips. Serve warm.",
    ],
  };

  if (typeof window.registerRecipe === "function") {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

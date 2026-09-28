(function () {
  const recipe = {
    id: 34,
    title: "Air Fryer Green Beans",
    description: "Crisp green beans with lemon and onion powder.",
    category: "appetizer",
    tags: ["dairy-free", "gluten-free"],
    time: "10–11 min",
    servings: "4",
    difficulty: "Easy",
    references: ["https://www.loveandlemons.com/air-fryer-green-beans/"],
    image: "images/air-fryer-green-beans.jpeg",
    ingredients: [
      { amount: 1, unit: "lb", rest: "fresh green beans, trimmed" },
      { amount: null, unit: "", rest: "olive oil" },
      { amount: null, unit: "", rest: "salt, to taste" },
      { amount: null, unit: "", rest: "onion powder, to taste" },
    ],
    instructions: [
      "Wash and trim the green beans, then pat them dry. Toss with olive oil, salt, and onion powder.",
      "Preheat the air fryer to 400°F",
      "Arrange the green beans in a single layer in the air fryer basket, working in batches if needed. Air fry for 10–11 minutes, until tender and browned in places.",
    ],
  };

  if (typeof window.registerRecipe === "function") {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

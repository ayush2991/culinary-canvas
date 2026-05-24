(function () {
  const recipe = {
    id: 28,
    title: "Moong Dal Sprout Chaat",
    description:
      "A refreshing sprouted mung bean salad packed with fresh veggies, crunchy peanuts, and tangy spices.",
    category: "appetizer",
    tags: ["gluten-free", "dairy-free"],
    time: "2 days",
    servings: 2,
    difficulty: "Easy",
    image: "images/moong-dal-sprout-chaat.png",
    references: [],
    ingredients: [
      { amount: 100, unit: "g", rest: "Green Moong Dal" },
      { amount: 0.66, unit: "tsp", rest: "Red Chili Powder" },
      { amount: 0.66, unit: "tsp", rest: "Coriander Powder" },
      { amount: 0.5, unit: "tsp", rest: "Garam Masala" },
      { amount: 4, unit: "tbsp", rest: "Onion", note: "finely chopped" },
      { amount: 0.5, unit: "medium", rest: "Tomato", note: "chopped" },
      { amount: 0.33, unit: "medium", rest: "Lemon", note: "juiced" },
      {
        amount: 1,
        unit: "handful",
        rest: "Roasted Peanuts",
        note: "for topping",
      },
      { amount: 1, unit: "pinch", rest: "Salt" },
    ],
    instructions: [
      "Rinse the green moong dal 2-3 times in fresh water. Submerge it in the sprouts jar with twice the amount of water and let it soak overnight (12 hours).",
      "Drain the water completely and rinse. Cover the glass jar with a dark cloth, tilt it and place on a trayand let it sit for about 1.5 days or until sprouts are ¼ to ½ inch long.",
      "Transfer the sprouts to a container and refrigerate until ready to use, up to 3 days.",
      "Transfer the sprouts to a pot. Add water until they are halfway submerged and add a generous pinch of salt. Bring to a boil, then lower the heat and simmer covered for 5 minutes until tender but still crisp. Drain well.",
      "Combine the warm sprouts with the chopped onion, tomato, and peanuts in a large bowl. Toss in the red chilli powder, garam masala, coriander powder, salt and lemon juice. Mix well and serve immediately.",
    ],
  };

  if (typeof window.registerRecipe === "function") {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

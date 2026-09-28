(function () {
  const recipe = {
    id: 37,
    title: "One Pot Chickpea Curry",
    description: "Chickpeas in a spiced coconut-tomato gravy.",
    category: "curry",
    tags: ["gluten-free", "dairy-free"],
    time: "45 min",
    servings: "3",
    difficulty: "Easy",
    image: "images/one-pot-chickpea-curry.png",
    references: [],
    ingredients: [
      {
        amount: 1,
        unit: "cup",
        rest: "Dry Chickpeas",
        note: "soaked roughly 15 hours, drained, and rinsed",
      },
      {
        amount: 1.25,
        unit: "cups",
        rest: "Onion",
        note: "finely chopped (about 1 large)",
      },
      {
        amount: 1,
        unit: "cup",
        rest: "Tomatoes",
        note: "finely chopped (about 2 medium)",
      },
      { amount: 1, unit: "tbsp", rest: "Ginger-Garlic Paste", note: "" },
      { amount: 1, unit: "", rest: "Green Chilli", note: "slit" },
      {
        amount: 2,
        unit: "tbsp",
        rest: "Avocado Oil",
        note: "or ghee if dairy is okay",
      },
      { amount: 2.5, unit: "cups", rest: "Water", note: "boiling" },
      { amount: 1, unit: "", rest: "Bay Leaf", note: "" },
      {
        amount: 3,
        unit: "",
        rest: "Green Cardamom Pods",
        note: "lightly crushed",
      },
      { amount: 1, unit: "stick", rest: "Cinnamon", note: "1-inch" },
      { amount: 0.5, unit: "tsp", rest: "Cumin Seeds", note: "" },
      { amount: 1, unit: "tsp", rest: "Garam Masala", note: "" },
      { amount: 2, unit: "tsp", rest: "Coriander Powder", note: "" },
      { amount: 1, unit: "tsp", rest: "Cumin Powder", note: "" },
      { amount: 0.75, unit: "tsp", rest: "Red Chilli Powder", note: "1 tsp if not using green chilli" },
      { amount: 0.25, unit: "tsp", rest: "Turmeric Powder", note: "" },
      { amount: 1.1, unit: "tsp", rest: "Salt", note: "adjust to taste" },
      { amount: 3, unit: "tbsp", rest: "Coconut Cream", note: "" },
      {
        amount: 0.5,
        unit: "tsp",
        rest: "Amchur (Dry Mango Powder)",
        note: "or squeeze of fresh lemon juice",
      },
      {
        amount: 1,
        unit: "tsp",
        rest: "Kasoori Methi (Dried Fenugreek Leaves)",
        note: "crushed between palms",
      },
    ],
    instructions: [
      "Set the Instant Pot to Sauté mode and heat the avocado oil (or ghee). Add the whole spices (bay leaf, cracked green cardamoms, cinnamon stick, cumin seeds) and let them sizzle for 30 seconds until fragrant.",
      "Add the finely chopped onions and cook for 6–8 minutes, stirring frequently, until deep golden brown. Stir in the ginger-garlic paste and green chilies, sautéing for another 60 seconds until the raw smell disappears.",
      "Pour in the pureed tomatoes and stir in the ground spices (garam masala, coriander, cumin, red chilli powder, turmeric, and salt). Sauté for 5-6 minutes until the oil begins to separate. Meanwhile, bring 2.5 cups of water to a boil.",
      "Pour in the hot water and deglaze the pot. Stir in the soaked chickpeas.",
      "Cancel Sauté mode and pressure cook on High Pressure for 18 minutes.",
      "Allow the pressure to release naturally for 15 minutes, then quick-release any remaining steam.",
      "Gently mash a small amount of chickpeas against the side of the pot with a ladle to thicken the gravy.",
      "Stir in the amchur (or lemon juice), crushed kasoori methi, and coconut cream. Serve hot.",
    ],
  };

  if (typeof window.registerRecipe === "function") {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

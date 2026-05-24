(function () {
  const recipe = {
    id: 30,
    title: "Ameer's Coconut Fish",
    description:
      "Pan-seared white fish warmed in a quick coconut milk sauce with curry leaves, mustard seeds, ginger, garlic, and citrus.",
    category: "mains",
    tags: ["dairy-free", "gluten-free"],
    time: "20 min",
    servings: 2,
    difficulty: "Easy",
    image: "images/ameers-coconut-fish.png",
    references: [],
    ingredients: [
      { amount: 2, unit: "", rest: "White fish filets", note: "such as flounder" },
      { amount: null, unit: "", rest: "Salt", note: "to taste" },
      { amount: null, unit: "", rest: "Black pepper", note: "to taste" },
      { amount: 2, unit: "tbsp", rest: "Oil", note: "divided, as needed" },
      { amount: 1, unit: "sprig", rest: "Curry leaves" },
      { amount: 0.5, unit: "tsp", rest: "Mustard seeds" },
      { amount: 1, unit: "tbsp", rest: "Ginger-garlic paste" },
      { amount: 1, unit: "cup", rest: "Coconut milk" },
      { amount: 0.5, unit: "", rest: "Lemon or lime", note: "juiced, plus more to taste" },
    ],
    instructions: [
      "Season the fish filets with salt and pepper. Let them rest for a few minutes, then pat away any excess moisture.",
      "Heat a thin layer of oil in a pan over medium-high heat. Add the filets and cook for 2-3 minutes per side, depending on thickness, until just cooked through.",
      "Transfer the fish to a plate and let it rest.",
      "In the same pan, add a little more oil if needed. Add the curry leaves and mustard seeds and saute until fragrant and the mustard seeds begin to pop.",
      "Add the ginger-garlic paste and saute briefly until the raw edge cooks off.",
      "Pour in the coconut milk, then lower the heat. Squeeze in the lemon or lime juice and stir to combine.",
      "Return the filets to the pan and warm them in the sauce for a couple of minutes.",
      "Adjust salt and citrus to taste, then serve immediately.",
    ],
  };

  if (typeof window.registerRecipe === "function") {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

(function () {
  const recipe = {
    id: 31,
    title: "Tandoori Salmon",
    description:
      "A single salmon fillet rubbed with ginger, garlic, lime, and warm tandoori spices, then air-fried or broiled until flaky with charred edges.",
    category: "mains",
    tags: ["dairy-free", "gluten-free"],
    time: "40 min",
    servings: 1,
    difficulty: "Easy",
    image: "images/tandoori-salmon.png",
    references: ["https://spicecravings.com/tandoori-salmon#recipe"],
    ingredients: [
      {
        amount: 5,
        unit: "oz",
        rest: "wild salmon fillet",
        note: "4-6 oz, boneless, skin on or off",
      },
      { amount: 0.5, unit: "tbsp", rest: "ginger garlic paste" },
      { amount: 0.25, unit: "tbsp", rest: "avocado oil or olive oil" },
      { amount: 0.5, unit: "tbsp", rest: "lime juice or lemon juice" },
      { amount: 0.25, unit: "tsp", rest: "salt", note: "adjust to taste" },
      { amount: 0.125, unit: "tsp", rest: "turmeric powder" },
      { amount: 0.375, unit: "tsp", rest: "garam masala" },
      { amount: 0.5, unit: "tsp", rest: "coriander powder" },
      {
        amount: 0.5,
        unit: "tsp",
        rest: "Kashmiri red chili powder or paprika",
        note: "use paprika for a milder fillet",
      },
    ],
    instructions: [
      "In a small bowl, stir together the ginger paste, garlic paste, oil, lime juice, salt, turmeric, garam masala, coriander, and Kashmiri chili powder until a thick marinade forms.",
      "Skin the salmon by cutting just the flesh leaving 1 inch at the end of one edge to create a handle and then slide your finger between the flesh and skin all the way to the end.",
      "Pat the salmon dry. Coat the fillet all over with the marinade, keeping it skin side down if it has skin.",
      "Refrigerate for 20-30 minutes. Avoid marinating longer than 2 hours because the citrus can soften the fish too much.",
      "Air fryer method: preheat to 400°F for 2 minutes, then cook the salmon skin side down for 9-10 minutes, depending on thickness.",
      "Oven method: place the salmon on a greased foil-lined baking sheet, skin side down if using. Broil 4-5 inches from the heating element for 8-10 minutes, until cooked through.",
      "The salmon is done when it flakes easily and reaches 145°F in the thickest part.",
    ],
  };

  if (typeof window.registerRecipe === "function") {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

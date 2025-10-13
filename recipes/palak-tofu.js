(function(){
  // Single definition of the Palak Tofu recipe
  const recipe = {
    id: 2,
    title: "Palak Tofu",
    description: "Spinach and tofu curry with aromatic spices and cashews",
    category: "dinner",
    time: "60 min",
    servings: "5",
    difficulty: "Medium",
    ingredients: [
      "Cooking oil and/or Ghee (as needed)",
      "1/3 tsp Cumin Seeds",
      "5 Green Cardamom Pods",
      "2 1/2-inch piece Cinnamon Stick",
      "5 Cloves",
      "3-4 Green Chilies (adjust to taste)",
      "1.5 cup (225g) Onions, chopped",
      "2 tsp Ginger-Garlic Paste",
      "1.25 cup Tomatoes, chopped",
      "1.25 tsp Salt (or to taste)",
      "1.5 tsp Garam Masala",
      "1 cup Water (for cooking gravy)",
      "300g Baby Spinach, triple-washed",
      "25 Roasted Cashews",
      "0.75 cup Water (for blending spinach)",
      "1 block (~400g) Firm Tofu, pressed and cubed",
      "1.5 tsp Kasuri Methi (dried fenugreek leaves), crushed"
    ],
    instructions: [
      "Heat oil/ghee. Add whole spices and sizzle, then add green chilies and onions; fry thoroughly. Stir in ginger-garlic paste.",
      "Add tomatoes, salt, and garam masala; cook until softened.",
      "Pour in 1 cup of water. Cover and cook until about 20% of the water remains.",
      "Cool completely, then blend the mixture into a smooth puree. Set aside.",
      "In a separate pan, cook the spinach until wilted and the raw scent is gone. Let it cool.",
      "In a blender, combine the cooled spinach, roasted cashews, and 3/4 cup water. Puree until smooth.",
      "Optional: Lightly sauté the tofu cubes in a separate pan for a firmer texture.",
      "Reheat the blended onion-tomato gravy. Stir in the crushed kasuri methi.",
      "Pour in the spinach puree and stir to combine.",
      "Add the tofu cubes and gently mix.",
      "Cover and let the curry sit for 3-4 hours to allow the tofu to absorb the flavors.",
      "Reheat and enjoy with rice or roti."
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
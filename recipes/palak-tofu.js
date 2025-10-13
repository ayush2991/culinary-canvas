(function(){
  // Single definition of the Palak Tofu recipe
  const recipe = {
    id: 2,
    title: "Palak Tofu",
    description: "Spinach and tofu curry with aromatic spices and cashews",
  category: "dinner",
  tags: ["vegan", "gluten-free"],
    time: "60 min",
    servings: "5",
    difficulty: "Medium",
    image: "images/palak_tofu.png",
    ingredients: [
      { amount: null, unit: '', rest: 'Cooking oil and/or Ghee', note: 'as needed' },
      { amount: 0.333, unit: 'tsp', rest: 'Cumin Seeds' },
      { amount: 5, unit: '', rest: 'Green Cardamom Pods' },
      { amount: null, unit: '', rest: '2 1/2-inch piece Cinnamon Stick' },
      { amount: 5, unit: '', rest: 'Cloves' },
      { amount: 3.5, unit: '', rest: 'Green Chilies', note: 'adjust to taste' },
      { amount: 1.5, unit: 'cup', rest: 'Onions, chopped', note: '≈225g' },
      { amount: 2, unit: 'tsp', rest: 'Ginger-Garlic Paste' },
      { amount: 1.25, unit: 'cup', rest: 'Tomatoes, chopped' },
      { amount: 1.25, unit: 'tsp', rest: 'Salt', note: 'or to taste' },
      { amount: 1.5, unit: 'tsp', rest: 'Garam Masala' },
      { amount: 1, unit: 'cup', rest: 'Water', note: 'for cooking gravy' },
      { amount: 300, unit: 'g', rest: 'Baby Spinach, triple-washed' },
      { amount: 25, unit: '', rest: 'Roasted Cashews' },
      { amount: 0.75, unit: 'cup', rest: 'Water', note: 'for blending spinach' },
      { amount: 400, unit: 'g', rest: 'Firm Tofu, pressed and cubed', note: 'approx' },
      { amount: 1.5, unit: 'tsp', rest: 'Kasuri Methi (dried fenugreek leaves), crushed' }
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
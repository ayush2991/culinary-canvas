(function(){
  // Refried bean dip recipe
  const recipe = {
    id: 6,
    title: "Refried Bean Dip",
    description: "A flavorful and easy vegan refried bean dip perfect for parties",
    category: "appetizer",
    tags: ["vegan", "appetizer", "dip"],
    time: "20 min",
    servings: "4",
    difficulty: "Easy",
    image: "images/refried-bean-dip.png",
    ingredients: [
      { amount: null, unit: '', rest: 'Oil', note: 'a little bit' },
      { amount: 4, unit: '', rest: 'garlic cloves, minced' },
      { amount: 1, unit: '', rest: 'small onion (or half of a large onion), diced' },
      { amount: null, unit: '', rest: 'Jalapeno, diced (optional, for more heat)' },
      { amount: 1, unit: 'can', rest: 'refried beans' },
      { amount: null, unit: '', rest: 'Salt to taste' },
      { amount: null, unit: '', rest: 'Cumin powder to taste' },
      { amount: 4, unit: 'tbsp', rest: 'salsa from a jar (or to taste)', note: 'spicy version works well' },
      { amount: null, unit: '', rest: 'Shredded vegan cheese' },
      { amount: null, unit: '', rest: 'Chopped onions for serving' }
    ],
    instructions: [
      "Add a little bit of oil to a pot or deep pan",
      "Add 3-4 cloves minced garlic",
      "Add 1 small diced onion (or half of a large onion) and optionally diced jalapeno for more heat",
      "Cook until onions are translucent",
      "Add 1 full can of refried beans and cook until evenly heated",
      "Add salt and cumin powder",
      "Mix in some salsa from a jar (3-4 tablespoons or to suit your taste)",
      "Add shredded vegan cheese",
      "Turn off heat",
      "Before serving, reheat if needed and add more chopped onions. Enjoy! 😋"
    ]
  };

  if (typeof window.registerRecipe === 'function') {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

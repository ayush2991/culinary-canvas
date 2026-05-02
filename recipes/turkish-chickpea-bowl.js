(function () {
  const recipe = {
    id: 27,
    title: "Vegan Turkish-Spiced Chickpea Bowls",
    description: "Roasted Turkish-spiced chickpeas and veggies over pistachio-raisin rice with a lemon-herb hummus drizzle.",
    category: "mains",
    tags: ["gluten-free", "dairy-free"],
    time: "40 min",
    servings: "2",
    difficulty: "Medium",
    image: "images/turkish-chickpea-bowl.png",
    references: ["https://www.hellofresh.com/recipes/vegan-turkish-spiced-chickpea-bowls-62f2aa31d05d2b368a0a6fef"],
    ingredients: [
      { amount: 0.5, unit: 'cup', rest: 'Basmati Rice' },
      { amount: 1, unit: 'unit', rest: 'Chickpeas', note: 'drained and rinsed' },
      { amount: 4, unit: 'oz', rest: 'Grape Tomatoes', note: 'halved' },
      { amount: 1, unit: 'unit', rest: 'Red Onion', note: 'cut into wedges, some minced' },
      { amount: 1, unit: 'unit', rest: 'Lemon', note: 'zested and quartered' },
      { amount: 1, unit: 'unit', rest: 'Veggie Stock Concentrate' },
      { amount: 1, unit: 'tbsp', rest: 'Turkish Spice Blend' },
      { amount: 0.5, unit: 'oz', rest: 'Pistachios', note: 'roughly chopped' },
      { amount: 4, unit: 'tbsp', rest: 'Hummus' },
      { amount: 1, unit: 'clove', rest: 'Garlic', note: 'minced' },
      { amount: 0.25, unit: 'oz', rest: 'Parsley', note: 'roughly chopped' },
      { amount: 0.25, unit: 'oz', rest: 'Chives', note: 'roughly chopped' },
      { amount: 1, unit: 'oz', rest: 'Golden Raisins' },
      { amount: 2, unit: 'tbsp', rest: 'Olive Oil' },
      { amount: 1, unit: 'tbsp', rest: 'Cooking Oil' },
      { amount: null, unit: '', rest: 'Salt and Pepper', note: 'to taste' }
    ],
    instructions: [
      "Preheat oven to 425 degrees. Wash and dry produce. Zest and quarter lemon. Cut onion into 1/2-inch-thick wedges; mince a few wedges until you have 2 TBSP. Mince or grate garlic. Roughly chop pistachios. Halve tomatoes lengthwise. Drain and rinse chickpeas; pat very dry. Roughly chop parsley and chives. Combine raisins with juice from one lemon wedge.",
      "Heat a drizzle of oil in a small pot over medium-high heat. Add minced onion, garlic, half the pistachios, half the Turkish Spice Blend, and a pinch of salt. Cook, stirring, for 1 minute. Stir in rice, 3/4 cup water, stock concentrate, and a big pinch of salt. Bring to a boil, then cover and reduce to a low simmer. Cook until rice is tender, 15-18 minutes.",
      "Meanwhile, toss onion wedges, tomatoes, and chickpeas on a baking sheet with a large drizzle of oil, remaining Turkish Spice Blend, salt, and pepper. Roast on top rack, tossing halfway through, until veggies are lightly charred and chickpeas are crispy, 18-20 minutes.",
      "While everything roasts, in a small bowl, combine hummus, half the parsley and chives, 2 TBSP olive oil, and juice from one lemon wedge. Season with salt. Stir in water 1 tsp at a time until mixture reaches a drizzling consistency.",
      "Fluff rice with a fork; stir in raisins and their pickling liquid and remaining parsley and chives. Season with salt and pepper. Toss roasted veggies and chickpeas with lemon zest.",
      "Divide rice between bowls. Top with roasted veggies and chickpeas. Drizzle with hummus sauce. Garnish with remaining pistachios and a squeeze of lemon juice. Serve with remaining lemon wedges."
    ]
  };

  if (typeof window.registerRecipe === 'function') {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

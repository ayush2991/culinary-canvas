(function () {
  const recipe = {
    id: 33,
    title: "Veggie Pesto Pasta",
    description:
      "Gluten-free pasta tossed with pesto, sauteed broccoli, mushrooms, and spinach. A quick, veggie-packed weeknight dinner.",
    category: "mains",
    tags: ["gluten-free", "dairy-free"],
    time: "45 min",
    servings: "3",
    difficulty: "Easy",
    image: "images/pasta.png",
    references: [],
    ingredients: [
      {
        amount: 6,
        unit: "oz",
        rest: "Gluten-Free Pasta",
        note: "e.g. Banza chickpea pasta or Jovial brown rice pasta",
      },
      {
        amount: null,
        unit: "",
        rest: "Pesto Sauce",
        note: "use a vegan pesto, e.g. Barilla, to keep it dairy-free",
      },
      { amount: 10, unit: "oz", rest: "Spinach", note: "organic, pre-washed" },
      {
        amount: 10,
        unit: "oz",
        rest: "Broccoli",
        note: "pre-cut, washed before use",
      },
      {
        amount: 8,
        unit: "oz",
        rest: "Baby Bella Mushrooms",
        note: "pre-chopped",
      },
      { amount: 2, unit: "tbsp", rest: "Avocado Oil" },
      { amount: null, unit: "", rest: "Salt", note: "for pasta water" },
      { amount: null, unit: "", rest: "Red Chili Flakes", note: "to taste" },
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. While it heats up, wash and chop the broccoli, mushrooms, and spinach into bite-sized pieces.",
      "Once the water reaches a rolling boil, add the pasta and cook according to the package instructions, plus an extra 2-3 minutes until fully tender.",
      "While the pasta cooks, heat avocado oil in a large pan and saute the broccoli, mushrooms, and spinach one at a time until tender.",
      "Before draining, reserve 1 cup of the pasta water. Drain the pasta and return it to the pot along with the sauteed veggies and pesto sauce. Toss to combine, adding reserved pasta water as needed to loosen the sauce.",
      "Serve hot, garnished with red chili flakes.",
    ],
  };

  if (typeof window.registerRecipe === "function") {
    window.registerRecipe(recipe);
  } else {
    window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
    window.__preRegisteredRecipes.push(() => recipe);
  }
})();

(function () {
    const recipe = {
        id: 17,
        title: "Two Over-Medium Eggs",
        description: "Perfectly cooked over-medium eggs with whites that are fully set and yolks that are thick, jammy, and just slightly runny. A quick, high-protein breakfast staple.",
        category: "breakfast",
        tags: ["breakfast", "gluten-free"],
        time: "5 min",
        servings: "1",
        difficulty: "Easy",
        image: "images/over-medium-eggs.png",
        references: [],
        ingredients: [
            { amount: 2, unit: 'large', rest: 'Eggs', note: 'fresh, cold or room temp' },
            { amount: 1, unit: 'tsp', rest: 'Unsalted Butter', note: 'or oil' },
            { amount: 1, unit: 'pinch', rest: 'Salt', note: 'to taste' },
            { amount: 1, unit: 'pinch', rest: 'Black Pepper', note: 'freshly cracked' },
            { amount: null, unit: '', rest: 'Optional: Chives or Parsley', note: 'finely chopped, for garnish' }
        ],
        instructions: [
            "Heat the Pan: Place a small non-stick skillet over medium-low heat. Add 1 tsp of butter and let it melt until it starts to bubble slightly but before it browns.",
            "Crack the Eggs: Carefully crack the eggs into the pan. Tip: Crack each egg into a small bowl first to avoid shells and ensure the yolk doesn't break. Do not crowd them; keep them separate if possible.",
            "Cook the First Side: Cook for about 2-3 minutes until the whites are mostly set and opaque, but the top is still slightly jiggly around the yolk.",
            "The Flip: Carefully slide a thin spatula under one egg. Gently flip it over. Repeat with the second egg. Be gentle to avoid breaking the yolk.",
            "Finish Cooking: Cook for another 30-45 seconds. This 'over-medium' stage means the whites are fully cooked and the yolk is heated through and thickened, but not hard-boiled.",
            "Serve: Slide the eggs onto a plate. Season with a pinch of salt and pepper. Garnish with fresh herbs if desired. Serve immediately with toast or avocado."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

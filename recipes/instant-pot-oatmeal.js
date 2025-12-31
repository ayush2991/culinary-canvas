(function () {
    const recipe = {
        id: 8,
        title: "Instant Pot Oatmeal",
        description: "Creamy, hands-off oatmeal made in the Instant Pot. Perfectly cooked rolled oats with warming spices and your favorite toppings.",
        category: "breakfast",
        tags: ["breakfast", "vegan", "gluten-free", "dairy-free"],
        time: "20 min",
        servings: "3",
        difficulty: "Easy",
        image: "images/instant-pot-oatmeal.png",
        ingredients: [
            { amount: 1, unit: 'cup', rest: 'rolled oats', note: 'preferably extra thick' },
            { amount: 2, unit: 'cup', rest: 'almond milk' },
            { amount: 2, unit: 'cup', rest: 'water' },
            { amount: 2, unit: 'tbsp', rest: 'maple syrup' },
            { amount: 0.125, unit: 'tsp', rest: 'salt' },
            { amount: 0.125, unit: 'tsp', rest: 'cinnamon powder' },
            { amount: 0.125, unit: 'tsp', rest: 'cardamom powder' },
            { amount: null, unit: '', rest: 'Toppings: chopped walnuts, pecans, almonds, dates, prunes, flax seeds, sunflower seeds' },
            { amount: 2, unit: 'tbsp', rest: 'peanut butter', note: 'to drizzle' }
        ],
        instructions: [
            "Add oats, almond milk, water, cinnamon powder, cardamom powder, maple syrup, salt to the Instant Pot inner pot.",
            "Close the lid and set the valve to Sealing. Cook on High Pressure for 2 minutes.",
            "Allow the pressure to release naturally (Natural Release).",
            "Open the lid and stir well. The oatmeal will thicken as it cools.",
            "Serve into bowls.",
            "Top with chopped nuts, seeds, and dried fruit as desired.",
            "Drizzle with a spoonful of peanut butter before serving."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

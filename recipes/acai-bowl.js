(function () {
    const recipe = {
        id: 26,
        title: "Acai Bowl",
        description: "A thick, creamy, and refreshing smoothie bowl topped with fresh fruit and granola.",
        category: "breakfast",
        tags: ["vegetarian", "vegan", "gluten-free", "healthy"],
        time: "10 min",
        servings: "1",
        difficulty: "Easy",
        ingredients: [
            { amount: 2, unit: 'packets', rest: 'frozen Acai puree', note: 'unsweetened, 100g each' },
            { amount: 1, unit: '', rest: 'frozen Banana', note: 'sliced' },
            { amount: 0.5, unit: 'cup', rest: 'frozen Mixed Berries', note: 'strawberries, blueberries, etc.' },
            { amount: 0.5, unit: 'cup', rest: 'Unsweetened Almond Milk', note: 'or any milk of choice' },
            { amount: 1, unit: 'tbsp', rest: 'Honey or Maple Syrup', note: 'optional' }
        ],
        instructions: [
            "Prepare the Acai: Remove the frozen acai packets from the freezer and break them into smaller chunks.",
            "Blend: In a high-powered blender, combine the acai chunks, frozen banana, mixed berries, almond milk, and honey or maple syrup.",
            "Process: Blend on high until smooth and creamy. If it's too thick, add a splash more almond milk. The texture should be thick and spoonable.",
            "Assemble: Pour the acai mixture into a bowl.",
            "Garnish: Top with your favorite toppings such as granola, sliced fresh fruit, coconut flakes, or chia seeds."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

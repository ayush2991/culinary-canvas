(function () {
    const recipe = {
        id: 16,
        title: "Vermicelli Kheer (Seviyan Kheer)",
        description: "Vermicelli Kheer (also known as Seviyan Kheer or Semiya Payasam) is one of the most beloved and quickest Indian desserts. It’s creamy, aromatic, and can be enjoyed both warm or chilled. A rich and delicious foolproof recipe.",
        category: "dessert",
        tags: ["dessert", "vegetarian"],
        time: "25 min",
        servings: "2",
        difficulty: "Easy",
        image: "images/vermicelli-kheer.png",
        references: [],
        ingredients: [
            { amount: 0.5, unit: 'cup', rest: 'vermicelli (Seviyan)', note: 'thin wheat variety, broken into 1-2 inch pieces' },
            { amount: 0.5, unit: 'liter', rest: 'full-fat milk', note: 'about 2 cups' },
            { amount: 3.5, unit: 'tbsp', rest: 'brown sugar', note: 'adjust to preference' },
            { amount: 2, unit: 'tsp', rest: 'ghee' },
            { amount: 12, unit: '', rest: 'mixed nuts (cashews, almonds)', note: 'slivered' },
            { amount: 0.5, unit: 'tbsp', rest: 'raisins' },
            { amount: 0.25, unit: 'tsp', rest: 'cardamom powder', note: 'or 1-2 pods crushed' },
            { amount: 1, unit: 'pinch', rest: 'saffron strands', note: 'optional, for golden hue' }
        ],
        instructions: [
            "Roast the Nuts and Raisins: Heat 2 tsp ghee in a heavy-bottomed pan or kadai over medium-low heat. Add cashews and almonds. Fry until light golden brown. Add raisins and fry until they puff up. Remove and set aside.",
            "Roast the Vermicelli: In the same pan (add another tsp ghee if needed), add the vermicelli. Roast on low heat, stirring continuously, until golden-brown and nutty. Note: Pre-roasted vermicelli should still be fried for 1-2 minutes.",
            "Simmer with Milk: Pour the milk into the pan with the roasted vermicelli. Increase heat to medium-high to bring to a boil. Once boiling, reduce to low-medium and simmer. Stir occasionally to prevent sticking.",
            "Cook until Soft: Cook for 8-10 minutes until vermicelli is soft (strands look translucent and plump) and milk has thickened slightly.",
            "Add Sweetener & Aromatics: Add sugar, cardamom powder, and saffron. Stir well and simmer for another 2-3 minutes until sugar dissolves and kheer reaches a creamy consistency.",
            "Garnish and Serve: Stir in the fried nuts and raisins. Turn off heat. Serve hot immediately, or cool and refrigerate for a chilled dessert."
        ]
    };

    if (typeof window.registerRecipe === 'function') {
        window.registerRecipe(recipe);
    } else {
        window.__preRegisteredRecipes = window.__preRegisteredRecipes || [];
        window.__preRegisteredRecipes.push(() => recipe);
    }
})();

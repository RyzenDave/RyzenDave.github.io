async function fetchRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    console.log("All Recipes:", data.recipes); // This logs all recipes
    return data.recipes; // Return the array of recipes
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array on error
  }
}

// HELPER FUNCTIONS DOWN BELOW

function filterDesserts(recipes) {
  return recipes.filter((recipe) => recipe.mealType.includes("Dessert"));
}

function filterPopularRecipes(recipes) {
  return recipes.filter((recipe) => recipe.reviewCount >= 30);
}
function filterRecipesWithCinnamon(recipes) {
  return recipes.filter((recipe) => {
    return recipe.ingredients && recipe.ingredients.includes("Cinnamon");
  });
}
function filterLunchDinner(recipes) {
  return recipes.filter((recipe) =>
    recipe.mealType.includes("Dinner", "Lunch")
  );
}
function getIngredientsById(recipes, id) {
  const recipe = recipes.find((recipe) => recipe.id === id);

  return recipe ? recipe.ingredients : [];
}
function getAverageCaloriesForAmericanRecipes(recipes) {
  const americanRecipes = recipes.filter(
    (recipe) => recipe.cuisine === "American"
  );
  if (americanRecipes.length === 0) return 0;
  const totalCalories = americanRecipes.reduce(
    (sum, recipe) => sum + recipe.caloriesPerServing,
    0
  );
  return totalCalories / americanRecipes.length;
}
function getPastaRecipes(recipes) {
  const pastaRecipes = recipes.filter(
    (recipe) => recipe.name && recipe.name.toLowerCase().includes("pasta")
  );

  const totalPastaTime = pastaRecipes.reduce(
    (sum, recipe) => sum + (recipe.cookTimeMinutes || 0),
    0
  );
  const avgPastaCookingTime = pastaRecipes.length
    ? totalPastaTime / pastaRecipes.length
    : 0;

  return avgPastaCookingTime;
}
function recipeLowestReviews(recipes) {
  const low = recipes.reduce((minRecipe, recipe) => {
    if (
      !minRecipe ||
      (recipe.reviewCount || 0) < (minRecipe.reviewCount || 0)
    ) {
      return recipe;
    }
    return minRecipe;
  }, null);
  return low;
}

async function displayRecipes() {
  try {
    const recipes = await fetchRecipes();
    console.log("Desserts:", filterDesserts(recipes));
    console.log("Popular Recipes:", filterPopularRecipes(recipes));
    console.log("Recipes with Cinnamon:", filterRecipesWithCinnamon(recipes));
    console.log("Served as Lunch/Dinner:", filterLunchDinner(recipes));
    const ingredients = getIngredientsById(recipes, 5);
    console.log("Chicken Salsa recipe:", ingredients);

    const averageCalories = getAverageCaloriesForAmericanRecipes(recipes);
    console.log(
      "Average calories for American cuisine recipes:",
      averageCalories
    );

    console.log(
      "The average cooking time of all pasta recipes",
      getPastaRecipes(recipes)
    );
    console.log(
      "Find the recipe with the lowest number of reviews",
      recipeLowestReviews(recipes)
    );
  } catch (error) {
    console.error("Error displaying recipes:", error);
  }
}

displayRecipes();

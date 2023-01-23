import { defineStore } from "pinia";
import axios from "axios";

const ApiKey = import.meta.env.VITE_SPOON_API_KEY;

export const useRecipeSearchStore = defineStore("recipeSearch", {
  state: () => ({
    searchItem: "",
    recipes: {},
    recipe: {},
    instructions: {},
  }),
  getters: {
    getRecipes: (state) => state.recipes,
    getInstructions: (state) => state.instructions,
  },
  actions: {
    async searchRecipes(search) {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${ApiKey}`
      );
      this.recipes = data;
    },
    async getRecipeById(recipeId) {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${ApiKey}`
      );
      this.recipe = data;
    },
    async getRecipeInstruction(recipeId) {
      const { data } = axios.get(
        "https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=a8557f703b894e18bdf9059027bba2a5"
        // `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${ApiKey}`
      );
      this.instructions = data;
    },
    setSearchItem(search) {
      this.searchItem = search;
    },
  },
});

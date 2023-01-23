<script setup>
    import { useRecipeSearchStore } from "../store/recipeSearchStore"
    import { storeToRefs } from "pinia"
    import { ref } from "vue"

    const recipeSearch = useRecipeSearchStore()

    let search = ref('');
   
    const { searchItem, recipes, recipe } = storeToRefs(recipeSearch)

    const handleSearch = () => {
        recipeSearch.searchRecipes(search.value)
    }

    const getRecipe = (id) => {
       recipeSearch.getRecipeById(id)
       recipeSearch.getRecipeInstruction(id)
    }

</script>

<template>
    <form @submit.prevent="handleSearch">
        <input type="text" v-model="search" class="text-black"/>
        <button type="submit" class="m-4">search</button>
    </form>

    <div class="flex flex-row flex-wrap justify-center">
        <div v-if="recipes" v-for="recipe in recipes.results" @click="getRecipe(recipe.id)" class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 m-5">
                <img :src=recipe.image class="w-full"/>
                <div class="px-6 py-4">
                    <p class="font-bold text-xl mb-2 text-gray-500">{{ recipe.title }}</p>
                    <RouterLink class="text-black" to="/recipe">recipe</RouterLink>
                </div>
        </div>
    </div>
</template>
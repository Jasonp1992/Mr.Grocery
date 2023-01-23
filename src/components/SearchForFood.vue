<script setup>
    import { useRecipeSearchStore } from "../store/recipeSearchStore"
    import { storeToRefs } from "pinia"
    import { ref } from "vue"

    const recipeSearch = useRecipeSearchStore()

    let search = ref('');
   
    const { recipes } = storeToRefs(recipeSearch)

    const handleSearch = () => {
        recipeSearch.searchRecipes(search.value)
    }

    const getRecipe = (id) => {
       recipeSearch.getRecipeById(id)
       //recipeSearch.getRecipeInstruction(id)
    }

</script>

<template>
    <div>
        <form @submit.prevent="handleSearch" class="ml-20">
            <input type="text" v-model="search" class="text-black"/>
            <button type="submit" class="m-4">search</button>
        </form>

        <div class="flex flex-row flex-wrap justify-center">
            <div v-for="recipe in recipes.results" @click="getRecipe(recipe.id)" class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 m-5">
                <div>    
                    <img :src=recipe.image class="w-full max-h-15"/>
                    <div class="px-6 py-4">
                        <p class="font-bold text-xl mb-2 text-gray-500">{{ recipe.title }}</p>
                        <RouterLink class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" to="/recipe"> 
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Go To Recipe
                            </span>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
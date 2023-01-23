<script setup>
    import { useRecipeSearchStore } from "../store/recipeSearchStore"
    import { storeToRefs } from "pinia"
    import { collection, addDoc } from "firebase/firestore"; 
    import { db, auth } from '../firebase/index'

    const recipeSearch = useRecipeSearchStore()

    const { searchItem, recipes, recipe, instructions } = storeToRefs(recipeSearch)
    

    const addToShoppingList = async() => {
        try {
            recipe.value.extendedIngredients.forEach( async item => {
                const userDoc = collection(db, `shoppingList`)
                await addDoc(userDoc, { userId: auth.currentUser.uid, content: item.original, active: false })
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
</script>

<template>
        <dic class="max-w-lg rounded overflow-hidden shadow-lg bg-gray-100 m-5 mt-14 ml-40 h-max">
            <img :src=recipe.image class="w-full"/>
            <div class="m-8 text-black font-san">
                <h2 class="border-b-2 border-gray-300 text-4xl text-center p-5">{{ recipe.title }}</h2>
                <span class="leading-loose">{{ recipe.summary ? recipe.summary.replace(/<(.*?)>/gm, '') : null }}</span>
                <ul class="p-10 list-disc">
                    <li v-for="item in recipe.extendedIngredients">{{ item.original }}</li>
                </ul>
                <RouterLink class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" to="/"> 
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Return To Search
                    </span>
                </RouterLink>
                <button @click="addToShoppingList" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" to="/"> 
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add To Shopping list
                    </span>
                </button>
            </div>
        </dic>   
</template>


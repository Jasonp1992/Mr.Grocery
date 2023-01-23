<script setup>
  import { ref } from 'vue';
  import { db, auth } from '../firebase/index'
  import { collection, onSnapshot, query, where, updateDoc, doc } from "firebase/firestore"; 
  import DeleteTodo from './DeleteTodo.vue';
import { async } from '@firebase/util';

  let todos = ref([])

  auth.onAuthStateChanged(function(user) {
    if (user) {
      const q = query(collection(db, "shoppingList"), where("userId", "==", `${auth.currentUser.uid}`));
    onSnapshot(q, (querySnapshot) => {
      const fbTodos = [];
      querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            content: doc.data().content,
            active: doc.data().active,
          }
          fbTodos.push(todo);
      });
      todos.value = fbTodos
    });
    } else {
      todos.value = []
    }
  })

  const handleGotIt = async (list) => {
    let active = list.active
    const listRef = doc(db, "shoppingList", `${list.id}`);

    await updateDoc(listRef, {
      active: !active
    })  
  };

</script>

<template>
  <div class="todo-content">
    <h2>Shopping List</h2>
    <ul>
        <div v-for="todo in todos" class="rounded-md p-3 m-2 max-w-md bg-purple-300 flex flex-row gap-20">
          <p class="flex-1" :class="{ active: todo.active }">{{ todo.content }}</p>
          <button @click="handleGotIt(todo)">Got It</button>
          <DeleteTodo :itemId='todo.id'/>
        </div>
    </ul>
  </div>
</template>

<style scoped>
  .todo-content{
    margin: 20px;
  }

  .active {
    text-decoration: line-through;
  }
</style>

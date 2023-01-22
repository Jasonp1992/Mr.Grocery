<script setup>
  import { ref, onMounted } from 'vue';
  import { db, auth } from '../firebase/index'
  import { collection, onSnapshot, query, where } from "firebase/firestore"; 
  import DeleteTodo from './DeleteTodo.vue';

  let todos = ref([])

  // onMounted(async () => {
  //   const q = query(collection(db, "todos"), where("userId", "==", `${auth.currentUser.uid}`));
  //   onSnapshot(q, (querySnapshot) => {
  //     const fbTodos = [];
  //     querySnapshot.forEach((doc) => {
  //         const todo = {
  //           id: doc.id,
  //           content: doc.data().content
  //         }
  //         fbTodos.push(todo);
  //     });
  //     todos.value = fbTodos
  //   });
  // })

  auth.onAuthStateChanged(function(user) {
    if (user) {
      const q = query(collection(db, "todos"), where("userId", "==", `${auth.currentUser.uid}`));
    onSnapshot(q, (querySnapshot) => {
      const fbTodos = [];
      querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            content: doc.data().content
          }
          fbTodos.push(todo);
      });
      todos.value = fbTodos
    });
    } else {
      todos.value = []
    }
})

</script>

<template>
  <div class="todo-content">
    <h2>Todos</h2>
    <ul>
        <div v-for="todo in todos" class="rounded-md p-3 m-2 max-w-md bg-purple-300 flex flex-row">
          <p class="flex-1" >{{ todo.content }}</p>
          <DeleteTodo :itemId='todo.id'/>
        </div>
    </ul>
  </div>
</template>

<style scoped>
  .todo-content{
    margin: 20px;
  }
</style>

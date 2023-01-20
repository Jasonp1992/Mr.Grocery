<script setup>
  import { ref, onMounted } from 'vue';
  import { db } from '../firebase/index'
  import { collection, onSnapshot } from "firebase/firestore"; 
  import DeleteTodo from './DeleteTodo.vue';

  let todos = ref([])

  onMounted(async () => {
    onSnapshot(collection(db, "todos"), (querySnapshot) => {
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

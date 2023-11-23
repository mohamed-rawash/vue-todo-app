<template>
  <div class="home">
    <input-todo-component @addTodo="addingTodo" />
    <div class="container">
      <div class="show-todos">
        <todo-component
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          :index="index"
          @delete="deleteTodo"
          @completed="markAsComplete"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import InputTodoComponent from "@/components/InputTodoComponent.vue";
import TodoComponent from "@/components/TodoComponent.vue";
import { ref, onBeforeMount } from "vue";
const todos = ref([]);

onBeforeMount(() => {
  if (localStorage.getItem("todos"))
    todos.value = JSON.parse(localStorage.getItem("todos"));
});

const addingTodo = (todo) => {
  todo.id = todos.value.length + 1;
  todo.createAt = new Date();
  todos.value.push(todo);
  console.log(todos.value);
  saveToLocal();
};

const deleteTodo = (index) => {
  todos.value.splice(index, 1);
  saveToLocal();
};

const markAsComplete = (index) => {
  todos.value[index].completed = true;
  saveToLocal();
};

const saveToLocal = () => {
  localStorage.setItem("todos", JSON.stringify(todos.value));
};
</script>

<style lang="scss">
.home {
  background-color: #0b2239;
  height: calc(100vh - 78px);
  .container {
    overflow: auto;
    &::-webkit-scrollbar {
      width: 1em;
      margin: 2px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      background-color: #0b2239;
      outline: 1px solid #0b2239;
    }
    .show-todos {
      min-height: 58vh;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      background-color: #0b2239;
    }
  }
}
</style>

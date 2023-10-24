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

<style lang="scss" scoped>
.container {
  max-height: 430px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 1em;
    margin: 2px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e2e2e2;
    outline: 1px solid #e2e2e2;
  }
  .show-todos {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>

<template>
  <div class="input-todo">
    <form action="" @submit.prevent="addTodo">
      <input
        required
        type="text"
        name="todo"
        placeholder="write what you plane todo"
        v-model.lazy="todo.title"
      />
      <input required type="date" name="start" v-model.lazy="todo.start" />
      <input required type="date" name="end" v-model.lazy="todo.end" />
      <ul>
        <li>
          <input
            type="radio"
            name="#ffa5af"
            value="#ffa5af"
            id="#ffa5af"
            v-model="todo.color"
          />
          <label for="#ffa5af" v-backgraound="'#ffa5af'"></label>
        </li>
        <li>
          <input
            type="radio"
            name="#ffc68c"
            value="#ffc68c"
            id="#ffc68c"
            v-model="todo.color"
          />
          <label for="#ffc68c" v-backgraound="'#ffc68c'"></label>
        </li>
        <li>
          <input
            type="radio"
            name="#00308a"
            value="#00308a"
            id="#00308a"
            v-model="todo.color"
          />
          <label for="#00308a" v-backgraound="'#00308a'"></label>
        </li>
        <li>
          <input
            type="radio"
            name="#00689e"
            value="#00689e"
            id="#00689e"
            v-model="todo.color"
          />
          <label for="#00689e" v-backgraound="'#00689e'"></label>
        </li>
        <li>
          <input
            type="radio"
            name="#00a6b6"
            value="#00a6b6"
            id="#00a6b6"
            v-model="todo.color"
          />
          <label for="#00a6b6" v-backgraound="'#00a6b6'"></label>
        </li>
      </ul>
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const vBackgraound = {
  mounted: (el, binding) => {
    el.style.backgroundColor = binding.value;
  },
};

const todo = ref({
  title: "",
  start: "",
  end: "",
  color: "#ffa5af",
  completed: false,
});

const emits = defineEmits("addTodo");

const addTodo = () => {
  emits("addTodo", todo.value);
  todo.value = {
    title: "",
    start: "",
    end: "",
    color: "#ffa5af",
    completed: false,
  };
};
</script>

<style lang="scss" scoped>
.input-todo {
  width: 300px;
  margin: 30px auto;
  padding: 16px;
  border-radius: 8px;
  background-color: #e2e2e2;
  input[type="text"] {
    display: block;
    max-width: 100%;
    padding: 6px;
    margin: 10px auto;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    line-height: 1.5px;
  }
  input[type="date"] {
    display: inline-block;
    margin: 4px;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    gap: 4px;
    li {
      input[type="radio"] {
        display: none;
        &:checked + label {
          border: 2px solid #e2e2e2;
          border-radius: 4px;
          transform: scale(1.2);
        }
      }
      label {
        display: inline-block;
        width: 25px;
        height: 25px;
      }
    }
  }
  input[type="submit"] {
    border: none;
    width: 100px;
    background-color: #72c5cc;
    padding: 6px 16px;
    margin: 0 auto;
    color: black;
    border-radius: 10px;
  }
}
</style>

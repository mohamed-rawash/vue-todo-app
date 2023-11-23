<template>
  <div class="container" v-background-color="props.todo.color">
    <span v-if="props.todo.completed" class="complete">Completed</span>
    <p class="title">{{ props.todo.title }}</p>
    <span>From {{ props.todo.start.split("-").reverse().join(" - ") }}</span>
    <span>To {{ props.todo.end.split("-").reverse().join(" - ") }}</span>
    <div class="controll">
      <span>
        Created {{ new Date(props.todo.createAt).toLocaleTimeString() }} -
        {{ new Date(props.todo.createAt).toLocaleDateString() }}</span
      >
      <span>
        <button @click="emits('completed', index)">Complete</button>
        <button @click="emits('delete', props.index)">Delete</button>
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const emits = defineEmits(["delete", "completed"]);
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 20px;
  margin: 4px;
  border-radius: 8px;
  height: fit-content;
  color: white;
  overflow: hidden;
  position: relative;
  .complete {
    position: absolute;
    top: 0;
    right: 0;
    padding: 3px 10px;
    background-color: red;
    color: white;
  }
  .title {
    width: 100%;
    text-align: center;
    text-overflow: ellipsis;
  }
  span {
    color: black;
    &:nth-of-type(2) {
      margin-left: 6px;
    }
  }
  .controll {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    flex-wrap: nowrap;
    span {
      &:first-of-type {
        font-size: 10px;
        color: white;
      }
      button {
        border: none;
        border-radius: 8px;
        margin-left: 8px;
        padding: 3px 10px;
        color: white;
        font-size: 12px;
        background-color: green;
        &:last-of-type {
          background-color: red;
        }
      }
    }
  }
}
</style>

<template>
  <div class="due-today-home">
    <h2>Due Today</h2>
    <div class="todo-container" v-for="(item, idx) in dueToday" :key="`${item.title}${idx}`">
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onBeforeMount, reactive } from "vue";
import { useAppStore } from "@/stores/app";
import type { TodosDueToday } from "./TodosDueToday";

const store = useAppStore();

const dueToday = reactive<TodosDueToday>([]);

onBeforeMount(() =>
  axios
    .get(`/user/${store.user?.id}/todos?dueToday=true`)
    .then((res) => dueToday.push(...res.data.todos))
    .catch((err) => console.log(err))
);
</script>

<style lang="scss" scoped>
.due-today-home {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #dddddd;

  .todo-container {
    border: 1px solid black;
  }
}
</style>

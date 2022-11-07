<template>
  <div class="due-today-home">
    <div
      class="todo-container"
      v-for="(item, idx) in store.todosDueToday"
      :key="`${item.name}${idx}`"
    >
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useListsStore } from "@/stores/lists";

const store = useListsStore();
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

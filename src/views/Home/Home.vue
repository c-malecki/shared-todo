<template>
  <div>
    <h1>Welcome {{ name }}</h1>
    <TodosDueToday />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import TodosDueToday from "@/components/home/TodosDueToday.vue";

const store = useAppStore();
const name = store.user!.name;
</script>

<style lang="scss" scoped></style>

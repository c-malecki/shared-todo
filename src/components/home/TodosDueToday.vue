<template>
  <div class="due-today-home"></div>
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
}
</style>

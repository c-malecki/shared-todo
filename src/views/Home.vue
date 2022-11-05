<template>
  <div>
    <h1>Welcome {{ name }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const store = useAppStore();
const name = store.user!.name;
</script>

<style lang="scss" scoped></style>

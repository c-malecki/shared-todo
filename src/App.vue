<template>
  <Header />
  <div class="main-wrap">
    <Nav v-if="store.user" />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { Header, Nav } from "../src/components/ui/layout/layout-index";
import { setupWorker } from "msw";
import { onMounted } from "vue";
import { usersHandler } from "./mocks/handlers/usersHandler.js";
import { listsHandler } from "./mocks/handlers/listsHandler.js";
import { todosHandler } from "./mocks/handlers/todosHandler.js";
import { useAppStore } from "./stores/app";

const store = useAppStore();

if (process.env.NODE_ENV === "development") {
  const worker = setupWorker(...usersHandler, ...listsHandler, ...todosHandler);
  onMounted(() => worker.start());
}
</script>

<style lang="scss">
#app {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  background-color: #2d2d2d;

  .main-wrap {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    max-width: 100%;
    .main {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
      width: 100%;
      max-width: 1024px;
      margin: 0 auto;
    }
  }
}
</style>

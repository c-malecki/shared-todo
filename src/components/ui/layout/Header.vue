<template>
  <div class="header">
    <div class="header-inner">
      <div v-if="store.user" class="button-wrapper">
        <el-button @click="handleLogout" type="primary" link size="large"> logout </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { useRouter } from "vue-router";

const store = useAppStore();
const router = useRouter();

const handleLogout = (): void => {
  store.submitLogout().then(() => router.push("/login"));
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
  background-color: #000;
  padding: 0 1rem;
  .header-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    .button-wrapper {
      margin-left: auto;
      button {
        text-transform: uppercase;
      }
    }
  }
}
</style>

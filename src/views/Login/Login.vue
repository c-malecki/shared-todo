<template>
  <el-form :model="form">
    <el-form-item label="Email">
      <el-input v-model="form.email" />
    </el-form-item>

    <el-form-item label="Password">
      <el-input v-model="form.password" />
    </el-form-item>

    <p v-if="appStore.error">{{ appStore.error.errorMessage }}</p>

    <el-form-item>
      <el-button @click="handleAuthentication"> Log In </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useAppStore } from "@/stores/app";
import { useListsStore } from "@/stores/lists";
import { useRouter } from "vue-router";
import type { LoginForm } from "./Login";

const appStore = useAppStore();
const listsStore = useListsStore();
const router = useRouter();

const form = reactive<LoginForm>({
  email: "demouser1@aol.com",
  password: "password"
});

const handleAuthentication = (): void => {
  appStore
    .submitLoginCreds(form)
    .then(() => listsStore.getUserLists(appStore.user?.id).then(() => router.push("/home")));
};
</script>

<style lang="scss" scoped>
.el-form {
  margin: auto;
}
</style>

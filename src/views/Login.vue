<template>
  <el-form :model="form">
    <el-form-item label="Email">
      <el-input v-model="form.email" />
    </el-form-item>

    <el-form-item label="Password">
      <el-input v-model="form.password" />
    </el-form-item>

    <el-form-item>
      <el-button @click="submit"> Log In </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface LoginForm {
  email: string;
  password: string;
}

const form = reactive<LoginForm>({
  email: "",
  password: ""
});

const submit = (): void => {
  console.log(form);
};
</script>

<style lang="scss" scoped>
.el-form {
  margin: auto;
}
</style>

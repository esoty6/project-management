<script lang="ts" setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { ref } from "vue";

const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const theme = ref(prefersDarkTheme ? "dark" : "light");
</script>

<template>
  <v-app :theme="theme">
    <DefaultLayout />
  </v-app>
</template>

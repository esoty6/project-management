<script lang="ts" setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { onMounted } from "vue";
import { useTheme } from "vuetify";

const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const theme = useTheme();

onMounted(() => {
  theme.global.name.value = prefersDarkTheme ? "dark" : "light";
});
</script>

<template>
  <v-app>
    <DefaultLayout />
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted, defineAsyncComponent } from "vue";
import { useTheme } from "vuetify";

const DefaultLayout = defineAsyncComponent(() => import("@/layouts/DefaultLayout.vue"));

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

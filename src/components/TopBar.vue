<script lang="ts" setup>
import { ref } from "vue";

const title = ref(import.meta.env.VITE_APP_TITLE);
</script>

<template>
  <v-app-bar :elevation="2" location="top" :height="72">
    <template #prepend>
      <router-link to="/">
        <v-img
          :width="64"
          :height="64"
          src="src/assets/logo.svg"
          alt="Vue framework's logo"
        ></v-img>
      </router-link>
    </template>

    <v-app-bar-title>
      {{ title }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>

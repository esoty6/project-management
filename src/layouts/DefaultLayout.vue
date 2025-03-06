<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";

const TopBar = defineAsyncComponent(() => import("@/components/AppBar.vue"));
const NavBar = defineAsyncComponent(() => import("@/components/NavigationMenu.vue"));
</script>

<template>
  <v-layout ref="layout">
    <v-container fluid>
      <TopBar />
      <NavBar />

      <v-main scrollable>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-container>
  </v-layout>
</template>

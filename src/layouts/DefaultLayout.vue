<script lang="ts" setup>
import TopBar from "@/components/AppBar.vue";
import NavBar from "@/components/NavigationMenu.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <v-layout ref="layout">
    <v-container fluid>
      <TopBar />
      <NavBar />

      <v-main scrollable class="ma-6">
        <router-view />
      </v-main>
    </v-container>
  </v-layout>
</template>

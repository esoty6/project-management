<script lang="ts" setup>
import TopBar from "@/components/AppBar.vue";
import NavBar from "@/components/NavigationMenu.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <v-layout>
    <v-container fluid>
      <TopBar />
      <v-col cols="2">
        <NavBar />
      </v-col>
      <v-col cols="auto">
        <v-main>
          <router-view />
        </v-main>
      </v-col>
    </v-container>
  </v-layout>
</template>

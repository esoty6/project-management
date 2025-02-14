<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import TopBar from "@/components/TopBar.vue";
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

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import TopBar from "@/components/TopBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <v-layout>
    <TopBar />
    <v-container fluid :style="{ marginTop: '72px', height: 'calc(100dvh - 72px)' }">
      <v-row>
        <v-col cols="2">
          <NavBar />
        </v-col>
        <v-col cols="auto">
          <v-main>
            <router-view />
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

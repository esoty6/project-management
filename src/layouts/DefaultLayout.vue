<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import TopBar from "@/components/TopBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <TopBar />

  <v-container fluid :style="{ marginTop: '72px', height: 'calc(100dvh - 72px)' }">
    <v-row>
      <v-col cols="2">
        <aside>
          <NavBar />
        </aside>
      </v-col>
      <v-col cols="auto">
        <main>
          <router-view />
        </main>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
header {
  grid-column: 1 / 3;
}
</style>

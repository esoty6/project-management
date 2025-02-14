<script lang="ts" setup>
import { useDrawer } from "@/store/useDrawer.store";
import { ref } from "vue";
import { useTheme } from "vuetify";

const title = ref(import.meta.env.VITE_APP_TITLE);

const { toggleDrawer } = useDrawer();
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-app-bar class="bg-primary" :elevation="2" location="top" :height="72">
    <template #prepend>
      <v-app-bar-nav-icon
        v-if="$vuetify.display.mdAndDown"
        variant="plain"
        @click="toggleDrawer"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      {{ title }}
    </v-app-bar-title>

    <template #append>
      <v-list-item>
        <v-btn icon role="button">
          <v-icon
            class="rotate"
            color="tertiary"
            :class="[{ 'rotate-icon': !theme.global.current.value.dark }]"
            @click="toggleTheme"
            >mdi-theme-light-dark</v-icon
          >
        </v-btn>
      </v-list-item>
    </template>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.rotate {
  transition: transform 0.3s ease-in-out;
}
.rotate-icon {
  transform: rotate(180deg);
}
</style>

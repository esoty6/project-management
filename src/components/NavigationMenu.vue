<script lang="ts" setup>
import { useDrawer } from "@/store/useDrawer.store";
import { storeToRefs } from "pinia";

const { toggleRail, onUpdateModelValue } = useDrawer();
const { isOpen, isRail } = storeToRefs(useDrawer());
</script>

<template>
  <v-navigation-drawer
    class="bg-primary"
    :model-value="isOpen"
    location="left"
    :rail="isRail && !$vuetify.display.mdAndDown"
    @update:model-value="onUpdateModelValue"
  >
    <template v-if="$vuetify.display.lgAndUp">
      <v-list density="compact" nav>
        <v-list-item><v-icon @click="toggleRail">mdi-menu</v-icon></v-list-item>
      </v-list>
      <v-divider class="bg-secondary"></v-divider>
    </template>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" link title="Home" to="/"></v-list-item>
      <v-list-item
        prepend-icon="mdi-format-list-bulleted"
        link
        title="Projects"
        to="/projects"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-checkbox-marked-outline"
        link
        title="Tasks"
        to="/tasks"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

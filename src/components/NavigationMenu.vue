<script lang="ts" setup>
import router from "@/router";
import { useDrawer } from "@/store/useDrawer.store";
import { storeToRefs } from "pinia";
import type { IconValue } from "vuetify/lib/composables/icons.mjs";

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
      <v-list-item
        v-for="route in router.getRoutes()"
        :key="route.path"
        link
        :title="route.name?.toString()"
        :to="route.path"
        :prepend-icon="route.meta.icon as IconValue"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

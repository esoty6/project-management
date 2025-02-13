<script lang="ts" setup>
import { useDrawer } from "@/store/useDrawer.store";
import { storeToRefs } from "pinia";
import { useTheme } from "vuetify";

const { toggleRail } = useDrawer();
const { isOpen, isRail } = storeToRefs(useDrawer());
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-navigation-drawer :model-value="isOpen" location="left" :rail="isRail">
    <template v-if="$vuetify.display.lgAndUp">
      <v-list density="compact" nav>
        <v-list-item><v-icon @click="toggleRail">mdi-menu</v-icon></v-list-item>
      </v-list>
      <v-divider></v-divider>
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
      <v-list-item>
        <v-btn variant="outlined" icon @click="toggleTheme">
          <v-icon
            >mdi-{{ theme.global.current.value.dark ? "brightness-6" : "brightness-4" }}</v-icon
          >
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

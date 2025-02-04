<script lang="ts" setup>
import { ref } from "vue";

const isRail = ref(false);

const toggleDrawer = () => {
  isRail.value = !isRail.value;
};
</script>

<template>
  <v-navigation-drawer :rail="isRail" location="left">
    <v-list density="compact" nav>
      <v-list-item
        ><v-btn variant="plain" icon="mdi-menu" @click="toggleDrawer"></v-btn
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>
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
<style lang="scss" scoped>
ul {
  font-size: 1.4rem;
}

li {
  padding: 0.6dvh 0;

  @media (pointer: coarse) {
    display: flex;

    a {
      width: 100%;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import NavBar from "../NavBar.vue";
import TopBar from "../TopBar.vue";

export default defineComponent({
  components: {
    TopBar,
    NavBar,
    RouterView,
  },
});
</script>

<template>
  <header>
    <TopBar />
  </header>
  <aside>
    <NavBar />
  </aside>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
header {
  grid-column: 1 / 3;
}
</style>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import TopBar from "@/components/TopBar.vue";
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

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

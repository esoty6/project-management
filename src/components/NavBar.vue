<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import CollapseMenu from "./CollapseMenu.vue";

export default defineComponent({
  components: {
    RouterLink,
    CollapseMenu,
  },
});
</script>

<template>
  <CollapseMenu :open="true">
    <menu>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="projects">Projects</RouterLink></li>
          <li><RouterLink to="tasks">Tasks</RouterLink></li>
        </ul>
      </nav>
    </menu>
  </CollapseMenu>
</template>
<style lang="scss" scoped>
ul {
  font-size: 1.4rem;
}
</style>

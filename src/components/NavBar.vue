<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import CollapseMenu from "./CollapseMenu.vue";

interface Data {
  isOpen: Boolean;
}

export default defineComponent({
  components: {
    RouterLink,
    CollapseMenu,
  },

  data(): Data {
    return { isOpen: false };
  },
});
</script>

<template>
  <CollapseMenu :is-open="isOpen" :button-on-bottom="false">
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

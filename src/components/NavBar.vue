<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <menu>
    <nav>
      <ul>
        <li><RouterLink to="/"> Home </RouterLink></li>
        <li><RouterLink to="projects"> Projects </RouterLink></li>
        <li><RouterLink to="tasks"> Tasks </RouterLink></li>
      </ul>
    </nav>
  </menu>
</template>
<style lang="scss" scoped></style>

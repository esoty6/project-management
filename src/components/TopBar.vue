<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title: import.meta.env.VITE_APP_TITLE,
    };
  },
});
</script>

<template>
  <div class="wrapper">
    <img src="@/assets/logo.svg" alt="Vue framework's logo" />
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as *;
h1 {
  height: fit-content;
}

img {
  height: 100%;
}

.wrapper {
  display: flex;
  align-items: center;
  padding: 2dvh 0;
  gap: 1dvw;
  grid-column: 1/2;
  height: $header-height;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  components: {
    RouterLink,
  },
  data() {
    return {
      title: import.meta.env.VITE_APP_TITLE,
    };
  },
});
</script>

<template>
  <div class="container">
    <RouterLink to="/">
      <div class="wrapper">
        <img src="@/assets/logo.svg" alt="Vue framework's logo" />
        <h1>{{ title }}</h1>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as *;
h1 {
  height: fit-content;
}

img {
  aspect-ratio: 1/1;
  height: 64px;
}

@media (hover: hover) {
  a:hover {
    text-decoration: unset;
  }

  .wrapper:hover::after,
  .wrapper:hover::before {
    opacity: 1;
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(4, 92, 63, 0.4);
    border-radius: 0 0 4px 4px;
    z-index: -1;
    filter: blur(4px);
    animation: tilt 4s infinite linear;
  }
}

.container {
  display: flex;
  padding: 2dvh 0;
}

.wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1dvw;
  grid-column: 1/2;
  height: $header-height;
  border-radius: 8px;
  background-color: var(--color-background);
  padding: 8px 12px;

  &::after,
  &::before {
    transition: opacity 0.25s ease-in;
    opacity: 0;
    position: absolute;
    content: "";
  }
}

@keyframes tilt {
  0% {
    transform: rotate(1deg);
  }
  50% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(1deg);
  }
}
</style>

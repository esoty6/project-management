<script lang="ts">
import { defineAsyncComponent } from "vue";
export default {
  components: {
    TheWelcome: defineAsyncComponent(() => import("@/components/TheWelcome.vue")),
  },
  data() {
    return {};
  },
  methods: {
    load() {},
  },
};
</script>

<template>
  <main>
    <TheWelcome />
    <button @click="load">Load</button>
  </main>
</template>

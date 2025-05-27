<script setup lang="ts">
import GridWrapper from "@/components/grid-system/GridWrapper.vue";
import { defineAsyncComponent, ref } from "vue";

const TestComponent = defineAsyncComponent(() => import("@/components/TestComponent.vue"));

const widgets = ref([
  { title: "asd1", component: TestComponent, id: 1 },
  { title: "asd2", component: TestComponent, id: 2 },
  { title: "asd3", component: TestComponent, id: 3 },
]);

const loading = ref(false);
</script>

<template>
  <!-- <main class="grid-stack">
    <div
      v-for="widget in widgets"
      :id="widget.title"
      :key="widget.title"
      :gs-min-w="7"
      :gs-min-h="2"
    >
      <v-icon icon="mdi-dots-grid" class="custom-handle"></v-icon>
      <component :is="widget.component" v-bind="widget" />
    </div>
  </main> -->
  <GridWrapper :widgets="widgets" :loading="loading" @test="loading = !loading" />
</template>

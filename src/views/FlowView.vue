<script setup lang="ts">
import { useFlow } from "@/store/flow/useFlow.store";
import { VueFlow } from "@vue-flow/core";
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import { storeToRefs } from "pinia";
import { defineAsyncComponent } from "vue";

const InteractionControls = defineAsyncComponent(
  () => import("@/components/flow/InteractionControls.vue")
);

const flowStore = useFlow();

const { initialNodes: nodes, initialEdges: edges } = storeToRefs(flowStore);
</script>

<template>
  <v-sheet color="secondary" width="calc(100dvw - 50%)" height="70dvh">
    <VueFlow :nodes="nodes" :edges="edges" class="interaction-flow" fit-view-on-init>
      <InteractionControls />
    </VueFlow>
  </v-sheet>
  <v-sheet color="secondary" width="calc(100dvw - 50%)" height="70dvh">
    <VueFlow :nodes="nodes" :edges="edges" class="interaction-flow" fit-view-on-init>
      <InteractionControls />
    </VueFlow>
  </v-sheet>
</template>

<style lang="scss">
@use "@/styles/main" as *;
@use "sass:map";

.interaction-flow {
  .vue-flow__minimap {
    transform: scale(75%);
    transform-origin: bottom right;
  }

  .vue-flow__panel {
    background-color: map.get($grey, "base");
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px #00000080;
    color: map.get($shades, "white");
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 12px;
    font-weight: 600;
  }

  .vue-flow__panel .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .vue-flow__panel .label input {
    cursor: pointer;
  }

  .vue-flow__edge-path,
  .vue-flow__connection {
    stroke: map.get($pink, "darken-2");
    color: map.get($pink, "darken-2");
  }
}
</style>

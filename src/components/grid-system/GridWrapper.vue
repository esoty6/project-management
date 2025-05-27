<script setup lang="ts">
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { onMounted, ref, watchEffect, type Component } from "vue";

interface Props {
  widgets: Array<{
    id: string;
    component: Component;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    title: string;
  }>;
  loading: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["test"]);
let grid: GridStack | null = null;

const count = ref("text etsd");

watchEffect(() => {
  console.log(props.loading);
  grid?.getGridItems().forEach((item) => grid?.resizeToContent(item));
});

onMounted(() => {
  grid = GridStack.init({
    column: 12,
    cellHeight: 30,
    minRow: 2,
    margin: 8,
    draggable: {
      handle: ".drag-handle",
    },
    resizable: {
      handles: "all",
    },
    float: true,
  });

  // Add event listener for content changes
  grid.on("resizestop", (event, item) => {
    // grid?.resizeToContent(item);
    grid?.resizeToContent(item);
  });

  // Initialize widgets with a slight delay to ensure proper sizing
  setTimeout(() => {
    props.widgets.forEach((widget) => {
      grid?.makeWidget(`#widget-${widget.id}`);
    });
    grid?.getGridItems().forEach((item) => grid?.resizeToContent(item));
  }, 0);
});
</script>

<template>
  <div class="grid-wrapper">
    <div class="grid-stack">
      <div
        v-for="widget in widgets"
        :id="`widget-${widget.id}`"
        :key="widget.id"
        class="grid-stack-item"
        :gs-x="widget.x"
        :gs-y="widget.y"
        :gs-auto-position="!widget.x && !widget.y"
      >
        <div class="grid-stack-item-content">
          <div class="grid-item-content">
            <div class="grid-item-header">
              <div class="drag-handle">⋮</div>
            </div>
            <v-btn @click="count += count">asd</v-btn>
            <v-btn @click="emit('test')">asd</v-btn>
            {{ count }}
            <div class="widget-body">
              <component :is="widget.component" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.grid-wrapper {
  width: 100%;
  height: 100%;
  padding: 16px;
}

.grid-item-content {
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.widget-body {
  flex: 1;
  padding: 16px;
  overflow: visible;
  height: auto;
}

.grid-item-header {
  padding: 8px;
  border-bottom: 1px solid #eee;

  .drag-handle {
    cursor: move;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:hover {
      background: black;
    }
  }
}

.grid-stack-item-content {
  inset: 0;
  position: absolute;
  overflow: visible;
}

.grid-stack {
  min-height: 100vh;
}
</style>

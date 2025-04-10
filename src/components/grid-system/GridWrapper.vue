<script setup lang="ts">
import { GridStack, type GridStackWidget } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { nextTick, onMounted, ref, watch, type Component } from "vue";

interface Props {
  widgets?: { title: String; component: Component }[];
}

const { widgets = [] } = defineProps<Props>();

const count = ref(0);
const info = ref("");
const timerId = ref(-1);
const options = ref({
  float: true,
  cellHeight: "70px",
  minRow: 1,
  margin: 0,
  column: 28,
  draggable: {
    handle: ".custom-handle",
  },
  resizable: {
    handles: "all",
  },
});
let grid: GridStack | null = null;
const items: GridStackWidget[] = [
  { x: 2, y: 1, h: 2 },
  { x: 2, y: 4, w: 3 },
  { x: 4, y: 2 },
  { x: 3, y: 1, h: 2 },
  { x: 0, y: 6, w: 2, h: 2 },
];

onMounted(() => {
  grid = GridStack.init({ ...options.value });

  grid.on("dragstop", function (event, element) {
    const node = element.gridstackNode;
    if (node) {
      info.value = `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`;
    }
  });

  nextTick(() => {
    widgets.forEach((widget) => {
      if (widget) {
        grid?.makeWidget(`#${widget.title}`);
      }
    });
  });
});

watch(info, (newVal) => {
  if (newVal.length === 0) return;

  window.clearTimeout(timerId.value);
  timerId.value = window.setTimeout(() => {
    info.value = "";
  }, 2000);
});

function addNewWidget() {
  const node = items[count.value] || {
    x: Math.round(12 * Math.random()),
    y: Math.round(5 * Math.random()),
    w: Math.round(1 + 3 * Math.random()),
    h: Math.round(1 + 3 * Math.random()),
    id: "",
    content: "",
  };
  if (grid) {
    node.id = node.content = String(count.value++);
    grid.addWidget(node);
  }
}
</script>

<template>
  <h1>How to integrate GridStack.js with Vue.js</h1>
  <p>
    As with any virtual DOM based framework, you need to check if Vue has rendered the DOM (or any
    updates to it) <strong>before</strong> you initialize GridStack or call its methods. As a basic
    example, check this component's <code>mounted</code> hook.
  </p>
  <p>
    If your app requires more complex render logic than the inline template in `addWidget`, consider
    <a href="https://github.com/gridstack/gridstack.js/tree/master/doc#makewidgetel">makeWidget</a>
    to let Vue deal with DOM rendering.
  </p>
  <button type="button" @click="addNewWidget()">Add Widget</button> {{ info }}
  <div class="grid-stack"></div>
</template>

<style lang="scss">
@use "sass:math";

$start: 1;
$end: 32;

[class^="ui-resizable-"]:not(.ui-resizable-se) {
  &:defined {
    background-image: unset;
  }
}

.custom-handle {
  margin: 16px;
  cursor: move;
}

@function fixed($float) {
  @return math.div(math.round($float * 1000), 1000);
}

@for $i from $start through $end {
  .gs-#{$i} > .grid-stack-item {
    width: fixed(math.div(100%, $i));

    @for $j from 1 through $i - 1 {
      &[gs-x="#{$j}"] {
        left: fixed(math.div(100%, $i) * $j);
      }

      &[gs-w="#{$j + 1}"] {
        width: fixed(math.div(100%, $i) * ($j + 1));
      }
    }
  }
}
</style>

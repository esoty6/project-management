<script setup lang="ts">
import { computed, ref } from "vue";
import { Timeline } from "vue-timeline-chart";
import "vue-timeline-chart/style.css";

const markers = computed(() => {
  return [
    mouseHoverPosition.value
      ? {
          start: mouseHoverPosition.value,
          type: "marker",
          id: "mousehover",
        }
      : null,
  ].filter(Boolean);
});

const mouseHoverPosition = ref(null);
function onMousemoveTimeline({ time }) {
  mouseHoverPosition.value = time;
}
function onMouseleaveTimeline() {
  mouseHoverPosition.value = null;
}

const items = ref([
  {
    id: 1,
    group: 1,
    type: "range",
    cssVariables: { "--item-background": "var(--color-2)" },
    start: 1000000,
    end: 4500000,
  },
  {
    id: 2,
    group: 2,
    type: "range",
    cssVariables: { "--item-background": "var(--color-4)" },
    start: 4500000,
    end: 6000000,
  },
  { id: 3, group: 3, type: "range", start: 6000000, end: 8000000 },
]);

let previousDragTimePos = 0;
let currentDragAction: "resize-start" | "resize-both" | "resize-end" | undefined;
let currentDragItemId: number | null = null;

function handleItemDrag({ time, event, item }) {
  if (event.type === "pointerdown") {
    if (!event.target.dataset.action) {
      return;
    }

    currentDragAction = event.target.dataset.action as typeof currentDragAction;
    currentDragItemId = item.id;
    previousDragTimePos = time;
  } else if (event.type === "pointermove") {
    if (!currentDragAction) {
      return;
    }

    const foundItem = items.value.find((i) => i.id === currentDragItemId)!;
    const delta = time - previousDragTimePos;

    if (currentDragAction === "resize-start" || currentDragAction === "resize-both") {
      foundItem.start += delta;
    }
    if (currentDragAction === "resize-end" || currentDragAction === "resize-both") {
      foundItem.end += delta;
    }

    previousDragTimePos = time;
  }
}

window.addEventListener(
  "pointerup",
  () => {
    currentDragAction = undefined;
  },
  { capture: true }
);

const events = ref([]);
const selectionStart = ref(null);
const selectionEnd = ref(null);
const isSelecting = ref(false);
const hoveredRow = ref(null);
const selectedRows = ref([]);

const selectionStyle = computed(() => {
  if (!selectionStart.value || !selectionEnd.value || selectedRows.value.length === 0) return {};
  return {
    left: `${Math.min(selectionStart.value, selectionEnd.value)}px`,
    width: `${Math.abs(selectionEnd.value - selectionStart.value)}px`,
    top: `${Math.min(...selectedRows.value) * 40}px`,
    height: `${(Math.max(...selectedRows.value) - Math.min(...selectedRows.value) + 1) * 40}px`,
  };
});

// Track hovered row dynamically
const trackHoveredRow = (event) => {
  const timeline = event.target.getBoundingClientRect();
  hoveredRow.value = Math.floor((event.clientY - timeline.top) / 40);
};

// Start selection, capturing the initial row
const startSelection = ({ time, event, item }) => {
  console.log(time, event, item);
  if (!!item) {
    handleItemDrag({ time, event, item });
    return;
  }
  const timeline = event.target.getBoundingClientRect();
  selectionStart.value = event.clientX - timeline.left;
  selectedRows.value = [hoveredRow.value]; // Start with the first row
  isSelecting.value = true;
};

// Update selection visually while dragging
const updateSelection = ({ time, event, item }) => {
  console.log(time, event, item);
  if (!!item) {
    handleItemDrag({ time, event, item });
    return;
  }
  if (!isSelecting.value) return;
  const timeline = event.target.getBoundingClientRect();
  selectionEnd.value = event.clientX - timeline.left;

  // Ensure multi-row selection
  const newRow = hoveredRow.value;
  if (!selectedRows.value.includes(newRow)) {
    selectedRows.value.push(newRow);
  }
};

// End selection and create the event
const endSelection = ({ time, event, item }) => {
  console.log(time, event, item);
  if (!!item) {
    return;
  }
  if (!isSelecting.value) return;
  isSelecting.value = false;

  const startTime = convertPixelsToTime(selectionStart.value);
  const endTime = convertPixelsToTime(selectionEnd.value);

  events.value.push({
    start: startTime,
    end: endTime,
    label: "New Event",
    rows: [...selectedRows.value], // Store selected rows
  });

  // Reset selection
  selectionStart.value = null;
  selectionEnd.value = null;
  selectedRows.value = [];
};

const convertPixelsToTime = (pixels) => {
  return new Date().getTime() + pixels * 1000;
};
</script>

<template>
  <div class="timeline-wrapper" @mousemove="trackHoveredRow">
    <Timeline
      ref="timeline"
      :items="items"
      :groups="[{ id: 1 }, { id: 2 }, { id: 3 }]"
      :viewport-min="0"
      :viewport-max="8000000"
      :markers="markers"
      @mousemove-timeline="onMousemoveTimeline"
      @mouseleave-timeline="onMouseleaveTimeline"
      @pointerdown="startSelection"
      @pointermove="updateSelection"
      @pointerup="endSelection"
    >
      <template #item>
        <div v-if="!isSelecting" class="draggable" data-action="resize-both">
          <div class="draggable-handle" data-action="resize-start"></div>
          <div class="draggable-handle" data-action="resize-end"></div>
        </div>
      </template>
      <template #group-label>
        <div v-if="isSelecting" class="selection-box" :style="selectionStyle"></div>
      </template>
    </Timeline>
  </div>
</template>

<style lang="scss" scoped>
.draggable {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  cursor: move;

  .draggable-handle {
    position: relative;
    width: 1.2rem;
    height: 100%;
    cursor: ew-resize;
    opacity: 0.6;

    &::before {
      content: "";
      border-inline: 1px solid white;
      width: 4px;
      height: 40%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
<style>
.timeline-wrapper {
  position: relative;
}

.selection-box {
  position: absolute;
  background-color: rgba(0, 150, 255, 0.3);
  pointer-events: none;
}
</style>

<script lang="ts">
import { defineComponent, Transition } from "vue";

export default defineComponent({
  components: {
    Transition,
  },

  props: {
    open: { type: Boolean, required: true },
  },

  data() {
    return {
      isCollapsed: this.open,
    };
  },

  methods: {
    toggle() {
      this.isCollapsed = !this.isCollapsed;
    },

    enter(el: Element) {
      const element = el as HTMLElement;

      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      const height = getComputedStyle(element).height;

      element.style.width = "";
      element.style.position = "";
      element.style.visibility = "";
      element.style.height = "0";

      // force repaint
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },

    afterEnter(el: Element) {
      const element = el as HTMLElement;
      element.style.height = "auto";
    },
    leave(el: Element) {
      const element = el as HTMLElement;
      const height = getComputedStyle(element).height;

      element.style.height = height;

      // force repaint
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = "0";
      });
    },
  },
});
</script>

<template>
  <div>
    <Transition @enter="enter" @after-enter="afterEnter" @leave="leave">
      <div v-show="isCollapsed" ref="collapsibleContent" class="content"><slot></slot></div>
    </Transition>
    <button class="toggle-btn" @click="toggle">
      <p class="arrow" :class="{ rotate: isCollapsed }">&#11167;</p>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.toggle-btn {
  width: 100%;
}

.arrow {
  transition: transform 0.25s linear;

  &.rotate {
    transform: rotate(180deg);
  }
}

.content {
  overflow: hidden;
}

.v-enter-active,
.v-leave-active {
  transition: height 0.5s ease-in;
  overflow: hidden;
}

.v-enter,
.v-leave-to {
  height: 0;
}
</style>

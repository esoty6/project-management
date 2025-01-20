<script lang="ts">
import { defineComponent, toRef, Transition, type PropType } from "vue";

export default defineComponent({
  components: {
    Transition,
  },

  props: {
    isOpen: { type: Boolean as PropType<Boolean>, required: true },
    buttonOnBottom: { type: Boolean as PropType<Boolean>, default: true },
  },

  setup(props) {
    const isCollapsed = toRef(props.isOpen);
    isCollapsed.value = !isCollapsed.value;
    return { isCollapsed };
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
      element.style.overflow = "auto";
    },

    beforeLeave(el: Element) {
      const element = el as HTMLElement;
      element.style.overflow = "hidden";
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
  <div class="wrapper">
    <button
      v-if="!buttonOnBottom"
      class="toggle-btn"
      :class="{ 'hide-border-bottom': isCollapsed, 'btn-top': !buttonOnBottom }"
      @click="toggle"
    >
      <p class="arrow" :class="{ rotate: isCollapsed }">&#11167;</p>
    </button>
    <Transition @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave">
      <div v-show="isCollapsed" class="content">
        <slot></slot>
      </div>
    </Transition>
    <button
      v-if="buttonOnBottom"
      class="toggle-btn"
      :class="{ 'hide-border-top': isCollapsed, 'btn-bottom': buttonOnBottom }"
      @click="toggle"
    >
      <p class="arrow" :class="{ rotate: isCollapsed }">&#11167;</p>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.toggle-btn {
  width: 100%;
  min-height: 40px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  border-top: 1px solid transparent;
  font-size: 1.3rem;
  border: 1px solid rgba(107, 107, 107, 0.24);
  background-color: transparent;
  transition: border 0.5s 0.5s linear;

  &.btn-top {
    border-radius: 8px 8px 0 0;
  }

  &.btn-bottom {
    border-radius: 0 0 8px 8px;
  }

  &.hide-border-bottom,
  &.hide-border-top {
    transition: border 0s;
  }

  &.hide-border-top {
    border-top-color: transparent;
  }

  &.hide-border-bottom {
    border-bottom-color: transparent;
  }
}

.arrow {
  transition: all 0.3s linear;

  &.rotate {
    transform: rotateX(0.5turn);
  }
}

.wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.content {
  width: 100%;
  padding: 0 12px;
  background-color: rgba(56, 56, 56, 0.356);
}

.v-enter-active,
.v-leave-active {
  transition: height 0.5s ease-in;
}

.v-enter,
.v-leave-to {
  height: 0;
}
</style>

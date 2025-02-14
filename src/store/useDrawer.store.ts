import { defineStore } from "pinia";
import { ref } from "vue";

export const useDrawer = defineStore("drawer-store", () => {
  const isOpen = ref();
  const isRail = ref(false);

  function toggleRail() {
    isRail.value = !isRail.value;
  }

  function toggleDrawer() {
    isOpen.value = !isOpen.value;
  }

  function onUpdateModelValue(val: Boolean) {
    isOpen.value = val;
  }

  return { isOpen, isRail, toggleRail, toggleDrawer, onUpdateModelValue };
});

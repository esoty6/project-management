import { defineStore } from "pinia";
import { ref } from "vue";

export const useDrawer = defineStore("drawer-store", () => {
  const isOpen = ref(true);
  const isRail = ref(false);

  function toggleRail() {
    isRail.value = !isRail.value;
  }

  function toggleDrawer() {
    isOpen.value = !isOpen.value;
  }

  return { isOpen, isRail, toggleRail, toggleDrawer };
});

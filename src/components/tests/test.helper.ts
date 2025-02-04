import { render, type RenderOptions } from "@testing-library/vue";
import type { Component } from "vue";

export const vuetifyWrapper = (
  componentToWrap: Record<string, object | Component>,
  options?: RenderOptions<{ template: string }>
) => {
  return render(
    {
      components: { componentToWrap },
      template: `<v-app><v-layout><componentToWrap /></v-layout></v-app>`,
    },
    {
      ...options,
    }
  );
};

import { cleanup, screen } from "@testing-library/vue";
import { afterEach, describe, it } from "vitest";
import TopBar from "../AppBar.vue";
import { vuetifyWrapper } from "./test.helper";

describe("AppBar tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders AppBar with title provided in .env file", () => {
    vuetifyWrapper(TopBar);

    screen.getByText(import.meta.env.VITE_APP_TITLE);
  });
});

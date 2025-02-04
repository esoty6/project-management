import { cleanup, screen } from "@testing-library/vue";
import { afterEach, describe, it } from "vitest";
import TopBar from "../TopBar.vue";
import { vuetifyWrapper } from "./test.helper";

describe("TopBar tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders TopBar with title provided in .env file", () => {
    vuetifyWrapper(TopBar);

    screen.getByText(import.meta.env.VITE_APP_TITLE);
  });

  it("Renders TopBar with logo", () => {
    vuetifyWrapper(TopBar);

    screen.getByAltText("Vue framework's logo");
  });
});

import { cleanup, render, screen } from "@testing-library/vue";
import { afterEach, describe, expect, it } from "vitest";
import TopBar from "../TopBar.vue";

describe("TopBar tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders TopBar with title provided in .env file", () => {
    render(TopBar);
    screen.getByText(import.meta.env.VITE_APP_TITLE);
  });

  it("Renders TopBar with logo", () => {
    render(TopBar);
    screen.getByAltText("Vue framework's logo");
  });

  it("Renders TopBar as link to root", () => {
    render(TopBar);
    const linkElement = screen.getByRole("link");
    expect((linkElement as HTMLAnchorElement).href).toMatch(/^.+:\/\/.+:[0-9]+\/{1}$/);
  });
});

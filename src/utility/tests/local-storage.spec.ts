import { afterEach, describe, expect, it, vi } from "vitest";
import { getFromLocalStorage, saveToLocalStorage } from "../local-storage.utility";

interface MockObject {
  id: number;
  desc: string;
}

const localStorageMock: Partial<Storage> = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string): string => store[key] ?? null,
    setItem: (key: string, value: string): void => {
      store[key] = value.toString();
    },
    clear: (): void => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("localStorage utility tests", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it.concurrent("saves object to localStorage", () => {
    const spy = vi.spyOn(localStorageMock, "setItem");

    const objectMock: MockObject = { id: 1, desc: "testing" };
    const keyMock = "testKey1";

    let isSaved = localStorage.getItem(keyMock);
    expect(isSaved).toBeFalsy();

    saveToLocalStorage(keyMock, objectMock);

    isSaved = localStorage.getItem(keyMock);

    expect(spy).toHaveBeenCalledOnce();
    expect(isSaved).toBeTruthy();
  });

  it.concurrent("retrieves object from localStorage with typing", () => {
    const spy = vi.spyOn(localStorageMock, "getItem");

    const objectMock: MockObject = { id: 2, desc: "testing" };
    const keyMock = "testKey2";

    localStorage.setItem(keyMock, JSON.stringify(objectMock));

    const savedObject = getFromLocalStorage<MockObject>(keyMock);

    expect(spy).toHaveBeenCalledOnce();
    expect(savedObject).toStrictEqual(objectMock);
  });
});

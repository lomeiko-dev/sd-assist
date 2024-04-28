import { IRouteApp } from "./types";

enum enumRouting {
  HOME = "HOME",
  TEST = "TEST",
}

export const Routes: Record<enumRouting, IRouteApp> = {
  [enumRouting.HOME]: { name: "home", path: "/home/:auth?", isProtected: false },
  [enumRouting.TEST]: { name: "test", path: "/test", isProtected: true },
};

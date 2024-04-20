import { IRouteApp } from "./types";

enum enumRouting {
  HOME = "HOME",
}

export const Routes: Record<enumRouting, IRouteApp> = {
  [enumRouting.HOME]: { name: "Home", path: "/home" },
};

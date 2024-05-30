import { IRouteApp } from "./types";

enum enumRouting {
  HOME = "HOME",
  LOT_CREATOR = "LOT_CREATOR",
}

export const Routes: Record<enumRouting, IRouteApp> = {
  [enumRouting.HOME]: { name: "home", path: "/home/:auth?", isProtected: false },
  [enumRouting.LOT_CREATOR]: { name: "lot-creator", path: "/create/lot", isProtected: true },
};

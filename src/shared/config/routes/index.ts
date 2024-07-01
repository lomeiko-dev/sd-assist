import { IRouteApp } from "./types";

enum enumRouting {
  HOME = "HOME",
  LOT_CREATOR = "LOT_CREATOR",
  SUCCESS = "SUCCESS",
  LOT_LIST = "LOT_LIST",
  LOT_DETAILS = "LOT_DETAILS",
}

export const Routes: Record<enumRouting, IRouteApp> = {
  [enumRouting.HOME]: { name: "/home", path: "/home/:auth?", isProtected: false },
  [enumRouting.LOT_CREATOR]: { name: "create/lot", path: "/create/lot", isProtected: true },
  [enumRouting.SUCCESS]: { name: "/success", path: "/success", isProtected: false },
  [enumRouting.LOT_LIST]: { name: "/lot/list", path: "/lot/list", isProtected: true },
  [enumRouting.LOT_DETAILS]: { name: "/lot", path: "/lot/:id", isProtected: true },
};

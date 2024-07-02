import { IRouteApp } from "./types";

enum enumRouting {
  HOME = "HOME",
  LOT_CREATOR = "LOT_CREATOR",
  SUCCESS = "SUCCESS",
  LOT_LIST = "LOT_LIST",
  LOT_DETAILS = "LOT_DETAILS",
  LOT_REJECTED = "LOT_REJECTED",
  LOT_ARCHIVE = "LOT_ARCHIVE",
  LOT_COMPLETED = "LOT_COMPLETED",
  LOT_ACTIVE = "LOT_ACTIVE",
}

export const Routes: Record<enumRouting, IRouteApp> = {
  [enumRouting.HOME]: { name: "/home", path: "/home/:auth?", isProtected: false },
  [enumRouting.LOT_CREATOR]: { name: "create/lot", path: "/create/lot", isProtected: true },
  [enumRouting.SUCCESS]: { name: "/success", path: "/success", isProtected: false },
  [enumRouting.LOT_LIST]: { name: "/lot/list", path: "/lot/list", isProtected: true },
  [enumRouting.LOT_DETAILS]: { name: "/lot", path: "/lot/:id", isProtected: true },
  [enumRouting.LOT_REJECTED]: { name: "/lot/rejected", path: "/lot/rejected", isProtected: true },
  [enumRouting.LOT_ARCHIVE]: { name: "/lot/archive", path: "/lot/archive", isProtected: true },
  [enumRouting.LOT_COMPLETED]: { name: "/lot/completed", path: "/lot/completed", isProtected: true },
  [enumRouting.LOT_ACTIVE]: { name: "/lot/active", path: "/lot/active", isProtected: true },
};

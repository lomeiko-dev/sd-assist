import { IPage } from "../../types";
import { homePage } from "pages/home";
import { lotActivePage } from "pages/lot-active";
import { lotArchivePage } from "pages/lot-archive";
import { lotCompletedPage } from "pages/lot-complated";
import { lotCreator } from "pages/lot-creator";
import { lotDetailsPage } from "pages/lot-details";
import { lotListPage } from "pages/lot-list";
import { lotRejectedPage } from "pages/lot-rejected";
import { successPage } from "pages/success";
import { Routes } from "shared/config/routes";

export const pages: IPage[] = [
  {
    routeOpt: { isProtected: false, path: "/", name: "" },
    component: homePage,
  },
  {
    routeOpt: Routes.HOME,
    component: homePage,
  },
  {
    routeOpt: Routes.LOT_CREATOR,
    component: lotCreator,
  },
  {
    routeOpt: Routes.SUCCESS,
    component: successPage,
  },
  {
    routeOpt: Routes.LOT_LIST,
    component: lotListPage,
  },
  {
    routeOpt: Routes.LOT_DETAILS,
    component: lotDetailsPage,
  },
  {
    routeOpt: Routes.LOT_REJECTED,
    component: lotRejectedPage,
  },
  {
    routeOpt: Routes.LOT_ARCHIVE,
    component: lotArchivePage,
  },
  {
    routeOpt: Routes.LOT_COMPLETED,
    component: lotCompletedPage,
  },
  {
    routeOpt: Routes.LOT_ACTIVE,
    component: lotActivePage,
  },
];

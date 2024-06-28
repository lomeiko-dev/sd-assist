import { IPage } from "app/routing/types";
import { homePage } from "pages/home";
import { lotCreator } from "pages/lot-creator";
import { lotDetailsPage } from "pages/lot-details";
import { lotListPage } from "pages/lot-list";
import { successPage } from "pages/success";
import { Routes } from "shared/config/routes";

export const pages: IPage[] = [
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
];

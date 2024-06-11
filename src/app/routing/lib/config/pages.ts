import { IPage } from "app/routing/types";
import { homePage } from "pages/home";
import { lotCreator } from "pages/lot-creator";
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
];

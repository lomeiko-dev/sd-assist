import { IPage } from "app/routing/types";
import { homePage } from "pages/home";
import { Routes } from "shared/config/routes";

export const pages: IPage[] = [
  {
    routeOpt: Routes.HOME,
    component: homePage,
  },
  {
    routeOpt: Routes.TEST,
    component: homePage,
  },
];

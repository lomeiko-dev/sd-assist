import { router } from "../../routing";
import { IPage } from "../../types";
import { authStore } from "entities/auth";
import { Routes } from "shared/config/routes";
import { RouteRecordRaw } from "vue-router";

export const generateRoute = (pages: IPage[]) => {
  const routes: RouteRecordRaw[] = [];

  pages.forEach((page) => {
    routes.push({
      path: page.routeOpt.path,
      name: page.routeOpt.name,
      component: page.component,
      beforeEnter: (to, from, next) => {
        if (page.routeOpt.isProtected) {
          const store = authStore();
          if (!store.isAuth) router.push({ path: `${Routes.HOME.name}/true` });
        }
        to;
        from;
        next();
      },
    });
  });

  return routes;
};

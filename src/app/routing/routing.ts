import { createWebHistory, createRouter } from "vue-router";

import { homePage } from "pages/home";
import { Routes } from "shared/config/routes";

const routes = [{ path: Routes.HOME.path, name: Routes.HOME.name, component: homePage }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

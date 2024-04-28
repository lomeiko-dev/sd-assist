import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { generateRoute } from "./lib/utils/generate-route";
import { pages } from "./lib/config/pages";

const routes: RouteRecordRaw[] = generateRoute(pages);

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

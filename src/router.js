import Vue from "vue";
import Router from "vue-router";

import Dashboard from "./views/Dashboard";
import Lights from "./views/Lights";
import HVAC from "./views/HVAC";
import Access from "./views/Access";
import Water from "./views/Water";
import Calendar from "./views/Calendar";
import Diagnostics from "./views/Diagnostics";
import Settings from "./views/Settings";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/lights",
      name: "lights",
      component: Lights
    },
    {
      path: "/hvac",
      name: "hvac",
      component: HVAC
    },
    {
      path: "/access",
      name: "access",
      component: Access
    },
    {
      path: "/water",
      name: "water",
      component: Water
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar
    },
    {
      path: "/diagnostics",
      name: "diagnostics",
      component: Diagnostics
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
});

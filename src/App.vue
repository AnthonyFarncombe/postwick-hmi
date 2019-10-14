<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense rounded>
        <v-list-item-group v-model="activePage">
          <v-list-item v-for="page in pages" :key="page.name">
            <v-list-item-action>
              <v-icon>mdi-{{ page.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ page.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Postwick BMS</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <component :is="pages[activePage].name" />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019 NCH Construction Ltd</span>
    </v-footer>
  </v-app>
</template>

<script>
import Dashboard from "./views/Dashboard";
import Lights from "./views/Lights";
import HVAC from "./views/HVAC";
import Access from "./views/Access";
import Calendar from "./views/Calendar";
import Settings from "./views/Settings";

export default {
  name: "App",
  components: {
    Dashboard,
    Lights,
    HVAC,
    Access,
    Calendar,
    Settings
  },
  data: () => ({
    drawer: null,
    activePage: 0,
    pages: [
      { name: "Dashboard", icon: "view-dashboard" },
      { name: "Lights", icon: "lightbulb" },
      { name: "HVAC", icon: "fan" },
      { name: "Access", icon: "lock-open" },
      { name: "Calendar", icon: "calendar-clock" },
      { name: "Settings", icon: "settings" }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

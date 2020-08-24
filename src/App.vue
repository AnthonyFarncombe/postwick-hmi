<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense rounded>
        <v-list-item v-for="page in pages" :key="page.name" :to="page.to">
          <v-list-item-action>
            <v-icon>mdi-{{ page.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ page.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Postwick BMS</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; 2019 NCH Construction Ltd</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    activePage: 0,
    pages: [
      { name: "Dashboard", to: "/", icon: "view-dashboard" },
      { name: "Lights", to: "/lights", icon: "lightbulb" },
      { name: "HVAC", to: "/hvac", icon: "fan" },
      { name: "Access", to: "/access", icon: "lock-open" },
      { name: "Water", to: "/water", icon: "water" },
      { name: "Calendar", to: "/calendar", icon: "calendar-clock" }
      // { name: "Diagnostics", icon: "flash" },
      // { name: "Settings", icon: "settings" }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style>
html,
body {
  overflow-y: hidden !important;
}
</style>

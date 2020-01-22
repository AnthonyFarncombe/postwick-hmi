<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="8" lg="6" xl="6">
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr
                v-for="light in lights"
                :key="light.name"
                :class="lightClass(light)"
              >
                <td class="text-left">
                  <span class="title">{{ light.text }}</span>
                </td>
                <td class="text-right">
                  <v-btn class="default mx-4" @click="toggle(light)"
                    >Toggle</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    lights: []
  }),
  methods: {
    lightClass(light) {
      if (light.phasing && light.phasing.value) return "orange";
      else if (light.value) return "green";
      else return "red";
    },
    toggle(light) {
      this.$store.dispatch("setVariableValue", {
        name: light.name.substr(0, light.name.length - 6) + "Toggle",
        value: true
      });
    }
  },
  created() {
    const lights = this.$store.state.variables.filter(
      v => v.group === "Lights" && /.+Status$/.test(v.name)
    );

    lights.forEach(l => {
      l.phasing = this.$store.state.variables.find(
        v => v.name === l.name.substr(0, l.name.length - 6) + "Phasing"
      );
    });

    this.lights = lights;
  }
};
</script>

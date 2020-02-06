<template>
  <v-data-table :headers="headers" :items="schedules" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Schedules</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="default" dark class="mb-2" v-on="on"
              >New Schedule</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedSchedule.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedSchedule.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedSchedule.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedSchedule.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedSchedule.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Day of Week",
        value: "dayOfWeek",
        sortable: false
      }
    ],
    schedules: [],
    editedIndex: -1,
    editedSchedule: {
      dayOfWeek: 7
    },
    defaultSchedule: {
      dayOfWeek: 7
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Schedule" : "Edit Schedule";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    editSchedule(schedule) {
      console.log(schedule);
    },
    deleteSchedule(schedule) {
      console.log(schedule);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedSchedule = Object.assign({}, this.defaultSchedule);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      console.log("save");
    }
  }
};
</script>

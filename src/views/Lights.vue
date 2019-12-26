<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto text-center" max-width="360">
          <v-card-title>Main Hall Lights</v-card-title>
          <v-card-text>
            <v-icon size="84" color="green">mdi-lightbulb</v-icon>
            <v-icon size="84" color="orange">mdi-lightbulb</v-icon>
            <v-icon size="84" color="red">mdi-lightbulb</v-icon>
          </v-card-text>
          <v-card-actions>
            <v-btn x-large color="green">Turn on</v-btn>
            <v-btn x-large color="red">Turn off</v-btn>
            <v-btn x-large color="orange">Phase off</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto text-center" max-width="360">
          <v-card-title>Foyer Lights</v-card-title>
          <v-card-text>
            <v-icon size="84" color="green">mdi-lightbulb</v-icon>
            <v-icon size="84" color="green">mdi-lightbulb</v-icon>
          </v-card-text>
          <v-card-actions>
            <v-btn x-large color="green">Turn on</v-btn>
            <v-btn x-large color="red">Turn off</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

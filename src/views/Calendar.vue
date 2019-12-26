<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-center">Day</th>
            <th class="text-center">Frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td class="text-left">{{ event.name }}</td>
            <td class="text-center">{{ event.day }}</td>
            <td class="text-center">
              {{ event.frequency }} week{{ event.frequency === 1 ? "" : "s" }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [{ id: 1, name: "Monday", day: "Monday", frequency: 1 }]
  })
};
</script>

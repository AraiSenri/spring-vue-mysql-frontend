<template>
  <v-container>
    <v-btn @click="dialog = true" color="primary"> Open Dialog </v-btn>

    <v-dialog v-model="dialog">
      <v-sheet>
        <v-sheet class="my-2 mx-5">
          <h2>Dialog!</h2>

          <p class="my-4">dialog dialog dialog dialog dialog dialog</p>

          <v-btn color="primary" block @click="dialog = false">Close</v-btn>
        </v-sheet>
      </v-sheet>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>

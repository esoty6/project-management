<script lang="ts" setup>
import { ref } from "vue";
const overlay = ref(false);
</script>

<template>
  <div>home</div>
  <v-row align="center" class="ma-4" justify="center">
    <v-card height="300" width="250">
      <v-row justify="center">
        <v-btn class="mt-12" color="success" @click="overlay = !overlay"> Show Overlay </v-btn>

        <v-overlay v-model="overlay" class="align-center justify-center" contained>
          <v-btn color="success" @click="overlay = false"> Hide Overlay </v-btn>
        </v-overlay>
      </v-row>
    </v-card>
  </v-row>

  <v-dialog max-width="500">
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="Open Dialog"
        variant="flat"
      ></v-btn>
    </template>

    <template #default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

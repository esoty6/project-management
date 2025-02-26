<script setup lang="ts">
import { ref, useTemplateRef, defineEmits } from "vue";

defineEmits(["submit"]);

const formRef = useTemplateRef("form");

const projects = ref([
  {
    name: "PlayStation 5",
    manufacturer: "Sony",
    year: 2020,
    sales: "10M",
    exclusive: true,
    test: "ha test",
  },
  {
    name: "Xbox Series X",
    manufacturer: "Microsoft",
    year: 2020,
    sales: "6.5M",
    exclusive: false,
  },
  {
    name: "Nintendo Switch",
    manufacturer: "Nintendo",
    year: 2017,
    sales: "89M",
    exclusive: true,
  },
  {
    name: "PlayStation 4",
    manufacturer: "Sony",
    year: 2013,
    sales: "116M",
    exclusive: true,
  },
  {
    name: "Xbox One",
    manufacturer: "Microsoft",
    year: 2013,
    sales: "50M",
    exclusive: false,
  },
  {
    name: "Nintendo Wii",
    manufacturer: "Nintendo",
    year: 2006,
    sales: "101M",
    exclusive: true,
  },
]);
const headersa = ref([
  { title: "Boat Type", key: "name" },
  { title: "Speed (knots)", key: "manufacturer" },
  { title: "Length (m)", key: "sales" },
  { title: "Price ($)", key: "exclusive" },
  { title: "Year", key: "year" },
]);

const isMenuOpen = ref(false);
const newColumnName = ref();
const nameRules = ref([
  (value) => {
    console.log(!!value);
    if (!!value) return true;

    return "Name is required.";
  },
  (value) => {
    if (value?.length <= 10) return true;

    return "Name must be less than 10 characters.";
  },
]);

function addColumn() {
  if (!formRef.value.isValid) {
    return;
  }

  headersa.value = [
    ...headersa.value,
    { title: newColumnName.value, key: newColumnName.value.toLowerCase() },
  ];
  isMenuOpen.value = !isMenuOpen.value;
  formRef.value.reset();
}
</script>

<template>
  <v-data-table-virtual
    scrollable
    :headers="headersa"
    :items="projects"
    :search="''"
    height="400"
    item-value="name"
  >
    <template #headers="{ columns, toggleSort, getSortIcon, isSorted }">
      <tr>
        <th v-for="column in columns" :key="column.key" @click="toggleSort(column)">
          {{ column.title }}
          <v-icon v-show="isSorted(column)" :icon="getSortIcon(column)"></v-icon>
        </th>
        <th key="add-column" scope="col">
          <v-menu
            max-width="500"
            min-width="120px"
            :close-on-content-click="false"
            location="bottom center"
            :model-value="isMenuOpen"
          >
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                variant="flat"
                icon="mdi-plus"
                @click="isMenuOpen = !isMenuOpen"
              ></v-btn>
            </template>

            <template #default>
              <v-form ref="form" validate-on="input submit" @submit.prevent="addColumn">
                <v-card fluid class="pa-2 d-flex align-center">
                  <v-text-field
                    v-model="newColumnName"
                    :rules="nameRules"
                    :min-width="120"
                    @keyup.enter.prevent="$emit('submit')"
                  ></v-text-field>
                  <v-btn variant="flat" icon="mdi-plus" type="submit"></v-btn>
                </v-card>
              </v-form>
            </template>
          </v-menu>
        </th>
      </tr>
    </template>
  </v-data-table-virtual>
</template>

<template>
  <div class="tasks">
    <h1>This is an tasks page</h1>

    <v-select
      v-model="value"
      :items="items"
      label="Select Item"
      multiple
      clearable
      variant="outlined"
      class="truncate"
    >
      <template #selection="{ item, index }">
        <span v-if="index < 2" class="d-inline-block text-truncate">{{ item.title }}</span>

        <span v-if="index === 2" class="text-grey text-caption align-self-center">
          (+{{ value.length - 2 }})
        </span>
      </template>
    </v-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  "foo",
  "barbarbarbarbarbarbarbarbarbarbarbarbar",
  "fizz",
  "buzz",
  "fizzbuzz",
  "foobar",
]);
const value = ref(["foo", "bar", "fizz"]);
</script>

<style lang="scss">
@use "@/styles/main" as *;
@use "sass:map";

.v-field__input {
  width: 300px;
  color: map.get($pink, "base");
}
.v-select__selection {
  width: 100px;
}
</style>

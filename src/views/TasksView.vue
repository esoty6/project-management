<template>
  <div class="tasks">
    <h1>This is an tasks page</h1>

    <v-card class="pa-5">
      <v-select
        v-model="modelValue"
        :items="items"
        label="Select Item"
        multiple
        clearable
        variant="outlined"
        class="truncate"
        hide-selected
      >
        <template #selection="{ item, index }">
          <span v-if="index < 2" class="text-truncate">{{ item.title }}</span>

          <span v-if="index === 0">,</span>

          <span v-if="index === 2" class="count text-grey text-caption align-self-center">
            (+{{ modelValue.length - 2 }})
          </span>
        </template>

        <template #prepend-item>
          <v-sheet max-width="400">
            <v-chip-group column>
              <v-chip
                v-for="item in modelValue"
                :key="item"
                closable
                @click:close="modelValue = modelValue.filter((model) => model !== item)"
              >
                <template #default>
                  <v-tooltip location="top">
                    <template #activator="{ props }">
                      <span v-bind="props" class="selection-chips text-truncate mr-2">
                        {{ item }}
                      </span>
                    </template>
                    <span>{{ item }}</span>
                  </v-tooltip>
                </template>

                <template #close>
                  <v-btn class="position-absolute right-0 mr-1" icon variant="plain">
                    <v-icon>mdi-close-circle-outline</v-icon>
                  </v-btn>
                </template>
              </v-chip>
            </v-chip-group>
          </v-sheet>

          <v-divider></v-divider>
        </template>
      </v-select>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const items = ref([
  "foo",
  "barba3rbarbarbarbarbarbarbarbarbarbarbar",
  "barbar4barbarbarbarbarbarbarbarbarbarbar",
  "b2arbarbarbarbarbarbarbarbarbarbarbarbar",
  "1barbarbarbarbarbarbarbarbarbarbarbarbar",
  "fizz",
  "buzz",
  "fizzbuzz",
  "foobar",
]);
const modelValue = ref(["foo", "bar", "fizz"]);
const maxElems = computed(() => {
  return modelValue.value.length >= 2 ? 2 : 1;
});
</script>

<style lang="scss">
@use "@/styles/main" as *;
@use "sass:map";

.v-select {
  max-width: 260px;
}

.v-field__input {
  color: map.get($pink, "base");
  flex-wrap: nowrap;
}

.v-select__selection:not(.count) {
  max-width: calc(100% / (v-bind("maxElems") + 0.4));
}

.selection-chips {
  max-width: 140px;
  padding-right: 12px;
}
</style>

<template>
  <v-card :flat="isFlat">
    <v-card-title>
      <slot name="card-title"></slot>
    </v-card-title>
    <v-card-text class="black--text">
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    isFlat: {
      required: true,
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>
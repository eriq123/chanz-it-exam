<template>
  <v-dialog v-model="show" max-width="290">
    <v-card>
      <v-card-title class="headline"> Add a colleague </v-card-title>

      <v-card-text>
        <slot></slot>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="grey darken-1" text @click="$emit('onClose', false)">
          Cancel
        </v-btn>

        <v-btn color="green darken-1" text @click="$emit('onSave')">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialog: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    show: {
      get() {
        return this.dialog;
      },
      set(value) {
        return this.$emit("onClose", value);
      },
    },
  },
};
</script>
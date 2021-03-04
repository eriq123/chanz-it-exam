<template>
  <v-col cols="12">
    <exam-card>
      <h2 class="mb-3 text-center">
        <slot name="title"></slot>
      </h2>

      <v-row>
        <v-col cols="12" md="6">
          <h3 class="mb-3">
            <slot name="image-header"></slot>
          </h3>
          <slot name="image"></slot>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="mb-3">
            <slot name="result-header"></slot>
          </h3>
          <slot name="json-view"></slot>
          <json-viewer :value="json" :expand-depth="5" copyable></json-viewer>
        </v-col>
      </v-row>
    </exam-card>
  </v-col>
</template>
<script>
export default {
  name: "exam1Card",
  props: {
    json: {
      required: true,
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    JsonViewer: () => import("vue-json-viewer"),
    ExamCard: () => import("./ExamCard"),
  },
};
</script>
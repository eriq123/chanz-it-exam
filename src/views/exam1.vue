<template>
  <exam-layout-card>
    <h1 class="text-center mb-3">Exam 1: JS Rewrite</h1>
    <p class="mb-3 text-center">
      Javascript Rewrite the following function without using loops (for, while,
      foreach etc).
    </p>

    <v-row>
      <exam-column :json="expected_output">
        <template #title> Problem </template>
        <template #image-header> Before </template>
        <template #image>
          <v-img
            :src="src.before"
            :lazy-src="src.before"
            contain
            class="w-100"
          ></v-img>
        </template>
        <template #result-header> Expected Result </template>
      </exam-column>

      <exam-column :json="filters">
        <template #title> Solution </template>
        <template #image-header> After </template>
        <template #image>
          <v-img
            :src="src.after"
            :lazy-src="src.after"
            contain
            class="w-100"
          ></v-img>
        </template>
        <template #result-header> Result </template>
      </exam-column>
    </v-row>
  </exam-layout-card>
</template>
<script>
export default {
  name: "exam1",
  components: {
    ExamLayoutCard: () => import("@/components/ExamLayoutCard"),
    ExamColumn: () => import("@/components/Exam1Column"),
  },
  data() {
    return {
      rawUrl: "regions:the-north|people:hodor,the-hound|omg:true",
      filters: [],
      src: {
        before: `${require("@/assets/before_code.png")}`,
        after: `${require("@/assets/after_code.png")}`,
      },
      expected_output: [],
    };
  },
  created() {
    this.expected_output = this.filters = [];
    this.expected_output = this.parseFilterUrl(this.rawUrl);
    this.gameOfThronesFilter(this.rawUrl);
  },
  methods: {
    gameOfThronesFilter(url) {
      url.split("|").map((value) => {
        const chunk_value = value.split(":");
        this.filters.push({ [chunk_value[0]]: chunk_value[1].split(",") });
      });
    },
    parseFilterUrl(url) {
      const parts = url.split("|");
      const filters = [];
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const split = part.split(":");
        const obj = {};
        obj[split[0]] = split[1].split(",");
        filters.push(obj);
      }
      return filters;
    },
  },
};
</script>

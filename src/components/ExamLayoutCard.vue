<template>
  <exam-layout>
    <exam-card :isFlat="true">
      <slot></slot>
    </exam-card>
  </exam-layout>
</template>
<script>
export default {
  components: {
    ExamLayout: () => import("./ExamLayout"),
    ExamCard: () => import("./ExamCard"),
  },
};
</script>
<template>
  <v-col cols="12" md="6">
    <h2 class="text-center">
      <slot name="title"></slot>
      <slot name="add-button"></slot>
    </h2>

    <v-flex class="grey lighten-5 pa-3 mb-3">
      Sort by:
      <v-btn :outlined="sort == 'name'" text @click="nameSort">Name</v-btn>
      <v-btn :outlined="sort == 'age'" text @click="ageSort">Age</v-btn>
    </v-flex>

    <draggable class="list-group" :list="newUsers" group="people">
      <transition-group
        name="list"
        tag="ul"
        :class="{ 'ul-border': users.length > 0 }"
      >
        <template v-for="(user, index) in newUsers">
          <exam-list
            :name="user.name"
            :age="user.age"
            :show="user.show"
            :key="index"
          ></exam-list>
        </template>
      </transition-group>
    </draggable>
  </v-col>
</template>
<script>
export default {
  components: {
    ExamList: () => import("./Exam3ColumnList"),
    draggable: () => import("vuedraggable"),
  },
  props: {
    users: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      sort: null,
    };
  },
  methods: {
    nameSort() {
      this.sort = "name";
      this.newUsers.sort((a, b) => a.name.localeCompare(b.name));
    },
    ageSort() {
      this.sort = "age";
      this.newUsers.sort((a, b) => a.age - b.age);
    },
  },
  computed: {
    newUsers() {
      return this.users;
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  align-self: center;
  min-height: 40px;
  margin-bottom: 0.5em;
}
.ul-border {
  border: 0.1px solid #ddd;
}
.list-group {
  min-height: 100px;
}
ul {
  list-style-type: none;
  padding-left: 0 !important;
  border-radius: 5px;
}
</style>
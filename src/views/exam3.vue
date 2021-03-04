<template>
  <exam-layout-card>
    <h1 class="mb-3 text-center">Exam 3: Vue Assignment</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-alert type="info" color="info" outlined>
          I designed the list with SASS to show a few of my skills with CSS.
        </v-alert>
      </v-col>
      <v-col cols="12" md="6">
        <v-alert type="info" color="info" outlined>
          Users with age 40 and above will have a
          <span class="red darken-1 white--text">red background.</span>
        </v-alert>
      </v-col>
    </v-row>

    <exam-dialog :dialog="dialog" @onClose="onClose" @onSave="onSave">
      <v-form>
        <v-text-field
          autofocus
          type="text"
          label="Name"
          v-model="form.name"
          :rules="[(v) => !!v || 'Name is required']"
          required
          @keyup.enter="onSave"
        ></v-text-field>
        <v-text-field
          type="number"
          label="Age"
          v-model="form.age"
          :rules="[(v) => !!v || 'Age is required']"
          required
          @keyup.enter="onSave"
        ></v-text-field>
      </v-form>
    </exam-dialog>

    <v-row>
      <exam-column :users="colleagues">
        <template #title>Original List</template>
      </exam-column>
      <exam-column :users="new_colleagues">
        <template #title>Second List</template>
        <template #add-button>
          <v-btn color="success" outlined class="ml-3" @click.stop="openDialog">
            <v-icon left>mdi-plus</v-icon>
            Add
          </v-btn>
        </template>
      </exam-column>
    </v-row>
  </exam-layout-card>
</template>

<script>
export default {
  name: "exam3",
  components: {
    ExamLayoutCard: () => import("@/components/ExamLayoutCard"),
    ExamDialog: () => import("@/components/Exam3Dialog"),
    ExamColumn: () => import("@/components/Exam3Column"),
  },
  data() {
    return {
      colleagues: [
        {
          name: "Joseph",
          age: 26,
        },
        {
          name: "Daniel",
          age: 38,
        },
        {
          name: "Joshua",
          age: 50,
        },
        {
          name: "Yuri",
          age: 42,
        },
        {
          name: "Rose",
          age: 25,
        },
        {
          name: "Maria",
          age: 29,
        },
        {
          name: "Mark",
          age: 40,
        },
        {
          name: "Pauline",
          age: 38,
        },
        {
          name: "Jasmine",
          age: 38,
        },
        {
          name: "Angel",
          age: 39,
        },
      ],
      new_colleagues: [],
      dialog: false,
      form: {
        name: null,
        age: null,
      },
      hidden_colleague: [],
    };
  },
  methods: {
    openDialog() {
      this.form.name = this.form.age = null;
      this.dialog = true;
    },
    onSave() {
      this.new_colleagues.push({
        name: this.form.name,
        age: parseInt(this.form.age ?? 0),
      });
      this.checkColleague(false);
      this.dialog = false;
    },
    onClose(value) {
      this.dialog = value;
    },

    checkColleague(value) {
      let key = this.colleagues.findIndex(
        (value) =>
          this.$options.filters.name(value.name) ==
            this.$options.filters.name(this.form.name) &&
          value.age == this.form.age
      );
      if (key > -1) {
        this.$set(
          this.colleagues,
          key,
          Object.assign(this.colleagues[key], { show: value })
        );
      }
    },
  },
  filters: {
    name(value) {
      return value.trim().toLowerCase();
    },
  },
};
</script>
<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.75s;
}
.list-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
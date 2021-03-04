<template>
  <v-navigation-drawer app v-model="drawerProp">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Eriq John Mendoza </v-list-item-title>
        <v-list-item-subtitle> Vue JS Developer </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in routes"
        :key="item.title"
        link
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "TheNavigationDrawer",
  props: {
    drawer: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      routes: [
        {
          title: "Exam 1: JS Rewrite",
          icon: "mdi-code-json",
          link: "/exam/1",
        },
        {
          title: "Exam 2: Version Control",
          icon: "mdi-git",
          link: "/exam/2",
        },
        {
          title: "Exam 3: Vue Assignment",
          icon: "mdi-vuejs",
          link: "/exam/3",
        },
      ],
    };
  },
  computed: {
    drawerProp: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit("draw", value);
      },
    },
  },
};
</script>
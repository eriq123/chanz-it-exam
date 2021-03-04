<template>
  <div id="app">
    <v-app>
      <TheNavigation @open="drawer = !drawer" />
      <TheNavigationDrawer :drawer="drawer" @draw="updateDrawer" />
      <v-main>
        <v-container>
          <v-slide-y-transition mode="out-in">
            <router-view></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
import TheNavigationDrawer from "@/components/TheNavigationDrawer";
export default {
  name: "APP",
  data() {
    return {
      drawer: true,
    };
  },
  components: {
    TheNavigation,
    TheNavigationDrawer,
  },
  methods: {
    updateDrawer(value) {
      this.drawer = value;
    },
  },
};
</script>


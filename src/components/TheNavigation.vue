<template>
  <v-app-bar color="dark" dark app>
    <v-app-bar-nav-icon @click="$emit('open')"></v-app-bar-nav-icon>
    <v-toolbar-title @click="$router.push('/')" class="cursor-pointer">
      Chanz IT Business Solutions Inc
    </v-toolbar-title>
  </v-app-bar>
</template>
<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
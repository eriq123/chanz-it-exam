<template>
  <v-row>
    <v-col md="10" offset-md="1">
      <h1 class="text-center">
        <slot name="title"></slot>
      </h1>
      <slot></slot>
    </v-col>
  </v-row>
</template>
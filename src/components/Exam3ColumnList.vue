<template>
  <li v-show="show">
    <p>
      {{ nameCapitalize }}
    </p>
    <span :class="{ 'red darken-1': ageRed }">{{ age }}</span>
  </li>
</template>
<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
    age: {
      required: true,
      type: Number,
    },
    show: {
      required: false,
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  computed: {
    nameCapitalize() {
      return this.name.toUpperCase();
    },
    ageRed() {
      return this.age >= 40 ? true : false;
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  border: 0.5px solid #eee;
  &:hover {
    margin-left: 10px;
    padding-right: 10px;
    background-color: #ededed;
  }
  p {
    margin-bottom: 0px;
    margin: auto 0;
  }
  span {
    border-radius: 1em;
    color: white;
    background-color: #272727;
    padding: 3px 6px;
  }
}
</style>
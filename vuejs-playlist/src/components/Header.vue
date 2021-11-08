<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>


<script>

import { bus } from '../main';

export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  methods: {
    changeTitle() {
      // this.$emit('changeTitle', 'Vue Wizards 🧙');
      this.title = 'Vue Wizards 🧙';
      bus.$emit('titleChanged', 'Vue Wizards 🧙');
    }
  }
}
</script>

<style scoped>
header {
  background-color: lightgreen;
  padding: 1rem;
}

h1 {
  color: #222;
  text-align: center;
}

</style>

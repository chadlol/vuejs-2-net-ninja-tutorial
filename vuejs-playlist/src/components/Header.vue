<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>


<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Vue Wizards'
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

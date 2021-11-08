<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>


<script>

export default {
  data () {
    return {
      title: 'Hello Vue!'
    }
  },
  methods: {

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

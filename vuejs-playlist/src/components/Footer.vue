<template>
  <footer>
    <p>{{ copyright }} - {{ title }}</p>
  </footer>
</template>


<script>

export default {
  props: {
    title: {
      type: String,
    }
  },
  data () {
    return {
      copyright: 'Copyright 2021'
    }
  },
}
</script>

<style scoped>
footer {
  background-color: #222;
  padding: 1rem;
}

p {
  color: white;
  text-align: center;
}

</style>

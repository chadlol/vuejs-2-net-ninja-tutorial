<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>


<script>

export default {
  data () {
    return {
      copyright: 'Copyright 2021 - Chad Ohl'
    }
  },
  methods: {

  }
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

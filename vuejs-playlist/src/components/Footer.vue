<template>
  <footer>
    <p>{{ copyright }} - {{ title }}</p>
  </footer>
</template>


<script>
import { bus } from '../main';


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
  created() {
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
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

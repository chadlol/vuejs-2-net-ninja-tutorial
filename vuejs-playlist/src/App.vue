<template>
  <div>
    <h1>{{ title }}</h1>
    <Ninjas></Ninjas>
    <Chickens></Chickens>
  </div>
</template>


<script>
import Chickens from './Chickens.vue'

export default {
  components: {
    'Chickens': Chickens,
  },
  data () {
    return {
      title: 'Ninja App'
    }
  },
  methods: {

  }
}
</script>

<style>

</style>

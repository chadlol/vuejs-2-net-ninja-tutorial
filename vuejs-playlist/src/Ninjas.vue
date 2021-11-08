<template>
  <ul>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
    <li><p>{{phrase}}</p></li>
  </ul>
</template>

<script>
export default {

  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu'],
      phrase: "We're a globally nested component!"
    }
  }
}
</script>

<style scoped>

</style>

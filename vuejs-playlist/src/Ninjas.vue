<template>
  <div>
    <h1>Nananananananana-Ninjas!</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
      <li><p>{{phrase}}</p></li>
    </ul>
  </div>

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
  h1 {
    color: purple;
  }
</style>

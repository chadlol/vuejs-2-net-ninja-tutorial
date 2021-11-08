<template>
  <div>
    <h1>Mhm-Chiiiiiicken!</h1>
    <ul>
      <li class=".chickens" v-for="chicken in chickens">{{ chicken }}</li>
      <li><p>{{phrase}}</p></li>
    </ul>
  </div>
</template>

<script>
export default {

  data() {
    return {
      chickens: ['Rooster', 'Hen', 'Chick'],
      phrase: "We're a locally nested component!"
    }
  }
}
</script>

<style scoped>
  h1 {
    color: darkred;
  }
  .chickens {
    display: inline-block;
    border: 2px solid #333;
    color: red;
  }
</style>

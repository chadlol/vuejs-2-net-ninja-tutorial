<template>
  <ul>
    <li class=".chickens" v-for="chicken in chickens">{{ chicken }}</li>
    <li><p>{{phrase}}</p></li>
  </ul>
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
  .chickens {
    display: inline-block;
    border: 2px solid #333;
    color: red;
  }
</style>

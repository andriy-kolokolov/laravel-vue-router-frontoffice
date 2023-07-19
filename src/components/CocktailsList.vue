<template>
  <h2>Cocktails List</h2>
  <ul>
    <li v-for="cocktail in arrCocktails" :key="cocktail.id">{{ cocktail.title }}</li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "ProjectList",
  data() {
    return {
      arrCocktails: [],
    }
  },
  created() {
    axios.get('') // api link
        .then(response => console.log(response.data));
  }
}
</script>

<style scoped>

</style>
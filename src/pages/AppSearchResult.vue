<template>
  <cocktail-card
      v-for="(cocktail, index) in this.store.arrSearchCocktails"
      :cocktail="cocktail"
      :key="index"
  />
</template>

<script>
import CocktailCard from "../components/CocktailCard.vue";
import {store} from "../store.js";

export default {
  name: "AppSearchResult",
  components: {CocktailCard},
  data() {
    return {
      store
    }
  }

}
</script>

<style scoped>

</style>
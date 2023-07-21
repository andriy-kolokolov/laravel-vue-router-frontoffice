<template>
  <h3 class="mb-4">Find <strong>{{ store.arrSearchCocktails.length }}</strong>
    cocktail{{ store.arrSearchCocktails.length !== 1 ? 's' : '' }}:</h3>
  <div class="row g-3">
    <cocktail-card
        class="col-md-6 col-lg-4"
        v-for="(cocktail, index) in store.arrSearchCocktails"
        :cocktail="cocktail"
        :key="index"
    />
  </div>

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
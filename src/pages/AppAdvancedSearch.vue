<template>
  <div class="container mt-5 mb-5">
    <h2>Search by ingredient</h2>
    <div class="row">
      <!-- Ingredient Dropdown -->
      <div class="col-md-4">
        <label for="ingredient">Select Ingredient:</label>
        <select class="form-control" id="ingredient" v-model="selectedIngredient">
          <option value="all">All</option>
          <option value="Gin">Gin</option>
          <option value="Rum">Rum</option>
          <option value="Vodka">Vodka</option>
          <option value="Tequila">Tequila</option>
          <option value="Whiskey">Whiskey</option>
        </select>
      </div>
    </div>
    <div class="mt-3">
      <div @click.prevent="search" class="btn btn-outline-success">Search by ingredient</div>
    </div>

    <div class="row mt-4">
      <transition>
        <div v-if="store.arrSearchCocktailsByIngredient > 0">
          <h3 class="mb-4">Find <strong>{{ store.arrSearchCocktailsByIngredient.length }}</strong>
            cocktail{{ store.arrSearchCocktailsByIngredient.length !== 1 ? 's' : '' }}:</h3>
          <div class="row g-3">
            <cocktail-card
                class="col-md-6 col-lg-4"
                v-for="(cocktail, index) in store.arrSearchCocktailsByIngredient"
                :cocktail="cocktail"
                :key="index"
            />
          </div>
        </div>
        <div v-else>
          <h3 class="mb-4">Find <strong>{{ store.arrSearchCocktailsByIngredient.length }}</strong>
            cocktails</h3>
        </div>
      </transition>
    </div>
  </div>

</template>

<script>
import {Transition} from "vue";
// import CocktailCard from "src/components/CocktailCard.vue";
import CocktailCard from "../components/CocktailCard.vue";
import {store} from "../store.js";

export default {
  name: "AppAdvancedSearch",
  components: {Transition, CocktailCard},
  data() {
    return {
      store,
      selectedIngredient: 'all',
    }
  },
  methods: {
    search() {
      if (this.selectedIngredient.length !== 0) {
        console.log(store.arrSearchCocktailsByIngredient)
        store.arrSearchCocktailsByIngredient = [];
        this.$emit('search', this.selectedIngredient)
        this.selectedIngredient = 'all';
      }
    }
  }
}
</script>

<style scoped>

</style>
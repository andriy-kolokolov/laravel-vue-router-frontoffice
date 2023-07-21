<template>
  <div class="container mt-4">
    <transition>
      <div v-if="store.arrSearchCocktails.length > 0">
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
      </div>
      <div v-else>
        <h3 class="mb-4">Find <strong>{{ store.arrSearchCocktails.length }}</strong>
          cocktails</h3>
      </div>
    </transition>
  </div>
</template>

<script>
import CocktailCard from "../components/CocktailCard.vue";
import {store} from "../store.js";
import {Transition} from "vue";


export default {
  name: "AppSearchResult",
  components: {CocktailCard, Transition},
  data() {
    return {
      store
    }
  }

}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<script>

import {defineComponent} from "vue";
import AppHeader from "./components/partials/AppHeader.vue";
import AppFooter from "./components/partials/AppFooter.vue";
import {store} from "./store.js";
import axios from "axios";

export default defineComponent({
  components: {AppHeader, AppFooter},
  data() {
    return {
      store,
    }
  },
  methods: {
    searchByName(searchQuery) {
      axios.get(this.store.baseUrl + `api/cocktails/search`, {
        params: {
          name: searchQuery
        }
      })
          .then(response => {
            console.log(response.data.data)
            this.store.arrSearchCocktails = response.data.data;
            this.$router.push({
              path: '/search',
            });
          })
    },
    searchByIngredient(ingredientName) {
      axios.get(this.store.baseUrl + 'api/cocktails/searchByIngredient', {
        params: {
          name: ingredientName
        }
      })
          .then(response => {
            console.log(response.data.data)
            this.store.arrSearchCocktailsByIngredient = response.data.data;
          })
    }
  }
})
</script>

<template>

  <app-header @search="searchByName"/>

  <main>
    <router-view></router-view>
  </main>

  <app-footer/>

</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";

#app {
  height: 100vh;

  main {
    .container {
      width: 100%;
    }
  }

}
</style>

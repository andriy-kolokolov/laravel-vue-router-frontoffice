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
    requestToAPI(searchQuery) {
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
    }
  }
})
</script>

<template>

  <app-header @search="requestToAPI"/>

  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>

  <app-footer/>

</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>

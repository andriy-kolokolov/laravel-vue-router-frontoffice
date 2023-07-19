<script>

import {defineComponent} from "vue";
import CocktailsList from "./components/CocktailsList.vue";
import AppHeader from "./components/partials/AppHeader.vue";
import AppFooter from "./components/partials/AppFooter.vue";

export default defineComponent({
  components: {CocktailsList, AppHeader, AppFooter}
})
</script>

<template>

  <app-header/>

  <main>
    <div class="container">
      <cocktails-list/>
    </div>
  </main>

  <app-footer/>

</template>

<style lang="scss">

</style>

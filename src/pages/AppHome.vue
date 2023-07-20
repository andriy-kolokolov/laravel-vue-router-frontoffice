<script>
import CocktailsList from "../components/CocktailsList.vue";
import AlcoholFree from "../pages/AppAlcoholFree.vue";
export default {
  components: { CocktailsList },
  AlcoholFree,
};
</script>

<template>
  <h2>Bar</h2>
  <cocktails-list />
  <AlcoholFree />
</template>

<style></style>

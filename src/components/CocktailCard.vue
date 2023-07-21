<template>
  <div class="card-wrapper">
    <div class="card-info">
      <div class="cocktail-name">{{ cocktail.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CocktailCard",
  props: {
    cocktail: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
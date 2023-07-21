<template>
  <div class="card">
    <div class="card-img-wrapper">
      <img :src="cocktail.image" alt="card image">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ cocktail.name }}</h5>
      <p class="card-text">{{ cocktail.recipe }}</p>
      <a href="#" class="btn btn-primary">show cocktail</a>
    </div>
  </div>
</template>

<script>
import {Transition} from 'vue';

export default {
  name: "CocktailCard",
  components: {Transition},
  props: {
    cocktail: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@use "src/assets/partials/variables" as *;

.card {
  padding: 25px;

  .card-img-wrapper {
    max-width: 100%;

    img {
      width: 100%;
      transition: .3s;
      cursor: pointer;
    }

    &:hover img {
      scale: 1.05;
    }

  }
}

</style>
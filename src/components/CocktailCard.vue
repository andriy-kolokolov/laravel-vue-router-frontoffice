<template>
  <div>
    <div class="card h-100">
      <div class="card-img-wrapper">
        <img :src="cocktail.image" alt="card image">
      </div>
      <div class="card-body d-flex flex-column">
        <h4 class="card-title align-self-auto">{{ cocktail.name }}</h4>
        <div>
          <div class="mb-2 fw-bold">Recipe: </div>
          <div class="card-description">{{ cocktail.recipe }}</div>
        </div>
      </div>
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

  .card-body {

    .card-description {
      overflow: auto;
      max-height: 250px;
    }
  }
}

</style>
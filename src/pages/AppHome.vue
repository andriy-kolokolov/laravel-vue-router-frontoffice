<script>
import CocktailsList from "../components/CocktailsList.vue";
import AlcoholFree from "../pages/AppAlcoholFree.vue";
export default {
  data() {
    return {
      showCocktails: false,
      showAlcoholFree: false,
      showCarousel: true, // Impostato su true all'inizio per mostrare il carosello
    };
  },
  methods: {
    goToHome() {
      this.showCocktails = false;
      this.showAlcoholFree = false;
    },
  },
  components: {
    CocktailsList,
    AlcoholFree,
  },
};
</script>

<template>
  <div class="carousel-container">
    <div v-if="!showCocktails && !showAlcoholFree">
      <div v-if="!showCarousel">
        <button @click="showCarousel = true">Show Carousel</button>
      </div>
      <div v-else>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/bar1.jpg"
                class="d-block w-100 fullscreen-img"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block h-50">
                <button
                  class="btn btn-light"
                  v-if="!showCocktails"
                  @click="showCocktails = true"
                >
                  Click here for alcoholic cocktails
                </button>
                <div class="container" v-if="showCocktails">
                  <cocktails-list />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/bar2.jpg"
                class="d-block w-100 fullscreen-img"
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block h-50">
                <button
                  class="btn btn-dark"
                  v-if="!showAlcoholFree"
                  @click="showAlcoholFree = true"
                >
                  Click here for alcohol-free cocktails
                </button>
                <div v-if="showAlcoholFree">
                  <AlcoholFree />
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Contenuto mostrato dopo il click sul carosello -->
    <div v-if="showCocktails" class="container">
      <button @click="goToHome" class="btn btn-warning">Back to Home</button>
      <cocktails-list />
    </div>

    <div v-if="showAlcoholFree" class="container">
      <button @click="goToHome" class="btn btn-warning">Back to Home</button>
      <AlcoholFree />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-container {
  height: 100%;
  width: 100%;
}

.fullscreen-img {
  width: 100%;
  height: 100vh; /* Immagini a schermo intero */
}
</style>

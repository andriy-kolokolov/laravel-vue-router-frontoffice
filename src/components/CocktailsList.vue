<script>
import axios from "axios";

export default {
  name: "ProjectList",
  data() {
    return {
      arrCocktails: [],
      page: 1,
      total: 0,
    };
  },
  methods: {
    getCocktails() {
      axios
        .get("http://127.0.0.1:8000/api/cocktails?page=1") // api link
        .then((response) => {
          this.arrCocktails = response.data.data;
          this.total = response.data.total;
        });
    },
    loadMore() {
      axios
        .get(`http://127.0.0.1:8000/api/cocktails?page=${this.page + 1}`)
        .then((response) => {
          this.arrCocktails = this.arrCocktails.concat(response.data.data);
          this.page++;
        });
    },
    resetDrink() {
      axios
        .get("http://127.0.0.1:8000/api/cocktails?page=1")
        .then((response) => {
          this.arrCocktails = response.data.data;
          this.total = response.data.total;
          this.page = 1;
        });
    },
  },
  created() {
    this.getCocktails();
  },
};
</script>

<template>
  <h2>Cocktails List</h2>
  <!-- <div class="cardContainer row row-cols-4 mb-5">
    <div
      class="col position-relative"
      v-for="cocktail in arrCocktails"
      :key="cocktail.id"
    >
      <router-link
        :to="{ name: 'show', params: { id: cocktail.id } }"
        class="nav-link router-link"
      >
        <img :src="cocktail.image" class="card-img-top" :alt="cocktail.name" />
        <p class="cc-name position-absolute z-1">{{ cocktail.name }}</p>
      </router-link>
    </div>
  </div> -->

  <!-- prova flex -->
  <div class="cardCont">
    <div class="isCard" v-for="cocktail in arrCocktails" :key="cocktail.id">
      <img :src="cocktail.image" class="card-img" :alt="cocktail.name" />
    </div>
  </div>

  <!-- LOAD MORE -->
  <div class="d-flex gap-2 align-items-center justify-content-center">
    <button
      v-if="arrCocktails.length != total"
      @click="loadMore"
      class="btn btn-primary mb-3"
    >
      Show more Cocktails
    </button>
    <button @click="resetDrink()" class="btn btn-secondary mb-3">
      Back on top <i class="bi bi-arrow-up"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
// .col {
//   padding: 0;
// }

// img {
//   filter: blur(0px);
//   transition: 0.2s ease;
// }
// .router-link:hover img {
//   filter: blur(5px);
//   transition: 0.2s ease;
// }

// .router-link:hover .cc-name {
//   opacity: 1;
//   transition: 0.3s ease;
// }

// .cc-name {
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   transition: 0.3s ease;

//   font-size: 2.5rem;
//   font-weight: 900;
//   opacity: 0;
//   padding-inline: 10px;
//   text-align: center;
//   /*background-image: linear-gradient(
//       to right,
//       rgba(255, 0, 0, 0),
//       rgba(255, 0, 0, 1)
//     );*/

//   /* rendere il testo non cliccabile */
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }

// -----
.cardCont {
  .isCard {
    width: 320px;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    // .card-img{}
  }
}
</style>

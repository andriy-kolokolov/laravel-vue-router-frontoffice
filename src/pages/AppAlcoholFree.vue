<script>
import axios from "axios";

export default {
  name: "ProjectList",
  data() {
    return {
      arrCocktails: [],
      nonAlcoholic: [],
      currentPage: 1,
      nPages: 1,
    };
  },
  methods: {
    getCocktails() {
      axios
        .get("http://127.0.0.1:8000/api/cocktails", {
          params: {
            page: this.currentPage,
          },
        }) // api link
        .then((response) => {
          this.arrCocktails = response.data.data;
          this.nPages = response.data.last_page;
        });
    },
    // fillNonAlcoholic() {                         "TODO Fill the nonAlcoholic array with not alcoholic beverages"
    //     console.log(this.arrCocktails)
    //     for (let i = 0; i < 9; i++) {
    //         this.nonAlcoholic = "ciao"

    //     }
    // },
  },
  watch: {
    currentPage() {
      this.getCocktails();
    },
  },
  created() {
    this.getCocktails();
    // this.fillNonAlcoholic();
  },
};
</script>

<template>
  <h2 class="mt-4">Alcohol Free cocktails list</h2>
  <div class="d-flex d-inline-flex">
    <div v-for="cocktail in arrCocktails" :key="cocktail.id">
      <div class="cardContainer px-4" v-if="(cocktail.alcoholic === 'Non alcoholic')">
        <div class="position-relative">
          <img :src="cocktail.image" class="card-img-top" alt="..." />
          <p class="cc-name position-absolute z-1">{{ cocktail.name }}</p>
        </div>
      </div>
    </div>
  </div>
  
  

  <!-- PAGINATOR  TO DO il paginator si riempie di pagine vuote e la lista cocktails ha spazi "presi" da cocktails non caircati, fare una pagina unica paginator e raggruppare i cocktails non alcolici-->
  <nav> 
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click="currentPage--">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in nPages"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
        <a class="page-link" href="#" @click="currentPage = page">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === nPages }">
        <a class="page-link" href="#" @click="currentPage++">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.col {
  padding: 0;
}
.cc-name {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding-inline: 10px;
  text-align: center;
  /*background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  );*/
  //rendere il testo non cliccabile
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.prova{
  flex: 0 0 33%;
}
</style>

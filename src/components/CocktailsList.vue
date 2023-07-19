<script>
import axios from "axios";

export default {
  name: "ProjectList",
  data() {
    return {
      arrCocktails: [],
      currentPage: 1,
      nPages: 0,
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
  },
  watch: {
    currentPage() {
      this.getCocktails();
    },
  },
  created() {
    this.getCocktails();
  },
};
</script>

<template>
  <h2>Cocktails List</h2>
  <div class="cardContainer">
    <div
      class="card"
      style="width: 18rem"
      v-for="cocktail in arrCocktails"
      :key="cocktail.id"
    >
      <img :src="cocktail.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ cocktail.name }}</h5>
        <p class="card-text">
          {{ cocktail.recipe }}
        </p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>

  <!-- PAGINATOR -->
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage == 1 }">
        <a class="page-link" href="#" @click="currentPage--">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in nPages"
        :key="page"
        class="page-item"
        :class="{ active: page == currentPage }"
      >
        <a class="page-link" href="#" @click="currentPage = page">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage == nPages }">
        <a class="page-link" href="#" @click="currentPage++">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.cardContainer {
  width: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;

  margin-top: 1em;
  margin-bottom: 3em;
}
</style>

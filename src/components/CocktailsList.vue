<script>
import axios from "axios";

export default {
  name: "ProjectList",
  data() {
    return {
      arrCocktails: [],
    };
  },
  methods: {
    getCocktails() {
      axios
        .get("http://127.0.0.1:8000/api/cocktails") // api link
        .then((response) => (this.arrCocktails = response.data.data));
    },
  },
  created() {
    this.getCocktails();
  },
};
</script>

<template>
  <h2>Cocktails List</h2>
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
</template>

<style scoped></style>

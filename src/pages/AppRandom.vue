<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      axios,
      drink: [],
    };
  },
  methods: {
    getRandom() {
      // richiesta axios per un cocktail random
      axios
        .get(this.store.baseUrl + "api/cocktails/random")
        .then((response) => {
          this.drink = response.data.data;
        });
    },
  },
  created() {
    this.getRandom();
  },
};
</script>

<template>
  <div
    class="d-flex justify-content-between align-items-center container mt-3 text-center"
  >
    <div class="card" style="width: 18rem; height: fit-content">
      <div class="card-body">
        <h1 class="card-title">{{ drink.name }}</h1>
        <p class="card-text">
          {{ drink.recipe }}
        </p>
      </div>
      <button class="btn btn-primary m-3" @click="getRandom()">
        Try Again!
      </button>
    </div>

    <div class="card myCard-img">
      <img :src="drink.image" class="card-img-top" :alt="drink.name" />
    </div>
  </div>
</template>

<style>
.myCard-img {
  overflow: hidden;
}
</style>

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
  created() {
    // richiesta axios per i dati del proj
    axios
      .get(this.store.baseUrl + "api/cocktails/" + this.$route.params.id)
      .then((response) => {
        this.drink = response.data.data;
      });
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
      <button class="btn btn-secondary m-3">
        <router-link :to="{ name: 'home' }" class="nav-link">
          Back
        </router-link>
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

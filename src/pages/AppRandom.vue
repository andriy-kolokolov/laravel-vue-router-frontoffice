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
  <div class="d-flex">
    <div class="side-left">
      <h1>
        {{ drink.name }}
      </h1>
      <h5>
        {{ drink.recipe }}
      </h5>
      <button class="btn btn-primary" @click="getRandom()">Try Again</button>
    </div>
    <div class="side-right">
      <img :src="drink.image" :alt="drink.name" />
    </div>
  </div>
</template>

<style>
.side-left,
.side-right {
  width: 50%;
}
</style>

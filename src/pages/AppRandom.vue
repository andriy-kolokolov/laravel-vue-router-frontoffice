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
    axios.get(this.store.baseUrl + "api/cocktails/random").then((response) => {
      this.drink = response.data.data;
    });
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

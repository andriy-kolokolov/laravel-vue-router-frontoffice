<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  created() {
    // richiesta axios per i dati del proj
    axios
      .get(this.store.baseUrl + "api/cocktails/" + this.$route.params.slug)
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

<template>
  <h1>Sono la show</h1>
</template>

<style></style>

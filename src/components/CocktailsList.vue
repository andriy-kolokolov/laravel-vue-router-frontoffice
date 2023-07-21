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
  <div class="container">
    <h2>Cocktails List</h2>
    <div class="cardCont">
      <div class="isCard" v-for="cocktail in arrCocktails" :key="cocktail.id">
        <img :src="cocktail.image" class="isCard-img" :alt="cocktail.name" />
        <div class="isCard-body">
          <h1 class="isCard-title">{{ cocktail.name }}</h1>
          <button class="isCard-btn">
            <router-link
              :to="{ name: 'show', params: { id: cocktail.id } }"
              class="nav-link router-link"
            >
              View more detail
            </router-link>
          </button>
        </div>
      </div>
    </div>

    <!-- LOAD MORE -->
    <div class="d-flex gap-2 align-items-center justify-content-center">
      <button
        v-if="arrCocktails.length != total"
        @click="loadMore"
        class="btn btn-primary"
      >
        Show more Cocktails
      </button>
      <button @click="resetDrink()" class="btn btn-secondary">
        Back on top <i class="bi bi-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardCont {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  .isCard {
    width: calc((100% / 4) - 2em);
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    cursor: default;

    .isCard-img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      object-fit: cover;
    }

    .isCard-body {
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      right: -100%;

      background: rgba(0, 0, 0, 0.346);
      backdrop-filter: blur(5px);
      border-radius: 15px;
      color: white;

      padding: 30px;
      text-align: center;

      display: flex;
      flex-direction: column;
      justify-content: end;
      transition: 0.5s ease;

      .isCard-title {
        text-transform: uppercase;
        font-size: 40px;
        font-weight: 700;
      }

      .isCard-btn {
        padding: 10px 20px;
        margin: 30px 0;

        border: none;
        border-radius: 15px;

        background-color: white;
        outline: none;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
}

.isCard:hover .isCard-body {
  right: 0;
  transition: 0.5s ease;
}
</style>

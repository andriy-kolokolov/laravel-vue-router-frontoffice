<script>
import ProjectList from "../CocktailsList.vue";
import { store } from "../../store.js";

export default {
  name: "AppHeader",
  components: { ProjectList },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      if (this.searchQuery.length !== 0) {
        store.arrSearchCocktails = [];
        this.$emit("search", this.searchQuery);
        this.searchQuery = "";
      }
    },
  },
};
</script>

<template>
  <header
    class="header shadow-lg container-fluid d-flex justify-content-between"
  >
    <!--    LOGO    -->
    <div class="logo-img-wrapper">
      <img src="../../assets/logo-no-background.png" alt="" />
    </div>

    <!--    NAVIGATION    -->
    <nav class="nav-wrapper">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link"
            >Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'random' }" class="nav-link"
            >Try Me!
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'about' }" class="nav-link"
            >About Us
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'contact' }" class="nav-link"
            >Contact Us
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'advanced-search' }" class="nav-link"
            >Search +
          </router-link>
        </li>
      </ul>

      <!--    SEARCH    -->
      <div class="search-wrapper">
        <form class="d-flex" role="search">
          <input
            v-model="searchQuery"
            class="form-control me-2"
            type="text"
            placeholder="Insert cocktail name"
            aria-label="Search"
            @keydown.enter.prevent="search"
          />
          <div @click.prevent="search" class="btn btn-outline-success">
            Search
          </div>
        </form>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "./src/assets/partials/variables" as *;
@use "./src/assets/main" as *;

$nav-link-border-size: 5px;

.header {
  height: 100px;
  // position: fixed;
  // top: 0;
  // z-index: 9;
}

.logo-img-wrapper {
  height: 100%;
  padding-top: $site-logo-vertical-padding;
  padding-bottom: $site-logo-vertical-padding;

  img {
    height: 100%;
  }
}

.nav-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;

  .nav-list {
    margin: 0;
    height: 100%;
    display: flex;

    .nav-item {
      height: 100%;
      list-style: none;

      .nav-link {
        font-size: 20px;
        padding: 10px;
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: $nav-link-border-size solid transparent;
        transition: $transition-links;

        &:hover {
          color: $color-primary;
          border-bottom: $nav-link-border-size solid $color-primary;
        }

        &.router-link-active {
          color: $color-primary;
          border-bottom: $nav-link-border-size solid $color-primary;
        }
      }
    }
  }
}
</style>

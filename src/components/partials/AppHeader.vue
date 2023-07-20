<script>
export default {
  name: "Header",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="bi bi-cup-straw"></i>
      </a>
      <!-- <a class="navbar-brand" href="#">Cocktails Bar</a> -->
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'random' }" class="nav-link"
              >Try Me!</router-link
            >
          </li>
          <!-- <li class="nav-item">
          <router-link :to="{ name: '#' }" class="nav-link">Try Me</router-link> generate random cocktail
        </li> -->
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link active"
              >contact</router-link
            >
          </li>
          <!-- <li class="nav-item dropdown">
          <router-link :to="{ name: '#' }" class="nav-link">Buy Here</router-link>
          <ul class="dropdown-menu">
            <li><router-link :to="{ name: '#' }" class="nav-link">Alcholic</router-link></li>
            <li><router-link :to="{ name: '#' }" class="nav-link">Not Alcholic</router-link></li>
            commento<li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> 3rd voice if you want to add fine commento
          </ul>
        </li> -->
          <!-- <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
        </ul>
        <div class="image m-auto">
          <img src="../../assets/logo-no-background.png" alt="" />
        </div>
        <form class="d-flex align-self-end" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Insert cocktail name"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.image {
  img {
    height: 35px;
  }
}
</style>

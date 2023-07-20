<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header class="header container-fluid">

    <!--    NAVIGATION    -->
    <nav class="nav-bar">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link"
          >Home
          </router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'random' }" class="nav-link"
          >Try Me!
          </router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'about' }" class="nav-link"
          >About Us
          </router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'contact' }" class="nav-link active"
          >contact
          </router-link
          >
        </li>
      </ul>
    </nav>

    <!--    LOGO    -->
    <div class="logo-img-wrapper">
      <img src="../../assets/logo-no-background.png" alt=""/>
    </div>

    <!--    SEARCH    -->
    <form class="d-flex" role="search">
      <input
          class="form-control me-2"
          type="search"
          placeholder="Insert cocktail name"
          aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>

  </header>
</template>

<style lang="scss" scoped>


</style>

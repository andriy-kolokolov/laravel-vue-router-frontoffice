<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="text-white">
    <div
      class="content container d-flex align-items-center justify-content-between"
    >
      <div class="rights">
        <span>© 2023 CocktailBar</span>
      </div>

      <div class="social">
        <!-- TO DO: FIX HREF -->
        <a href="https://linktr.ee/booleangroup5" target="_blank"
          ><i class="bi bi-github"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: sticky;
  top: 100vh;
  // position: fixed;
  // bottom: 0;
  // right: 0;
  // left: 0;
  background-color: rgba($color: #000000, $alpha: 0.7);
  .content {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    a {
      height: 100%;

      i {
        font-size: 1.5em;
        color: white;
      }
    }
  }
}
</style>

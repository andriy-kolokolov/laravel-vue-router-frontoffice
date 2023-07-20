<script>
export default {};
</script>

<template>
  <div class="about">
    <img src="../assets/background.jpg" alt="prova" class="background" />
    <div class="content">
      <img src="../assets/logo-no-background.png" alt="" />
      <h4>
        The 'Cocktail Bar' is a family-owned bar that has been in operation for
        over 30 years. It is a place where children can enjoy a variety of
        drinks and snacks, as well as socialize and have fun. The bar is
        designed to be both sophisticated and casual, with a focus on creating a
        comfortable and enjoyable atmosphere for everyone. The bar is open for
        business from 10 a.m. to 10 p.m. and is a great place for families to
        come together and enjoy each other's company. The bar is also a great
        place to get creative and have fun, with a variety of games and
        activities available for children to enjoy. Overall, the 'Cocktail Bar'
        is a fun and unique way to spend time with family and friends, and it is
        a great place to learn more about the history and culture of the area.
      </h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  height: 90vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  position: relative;
  overflow: hidden;

  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -100;

    opacity: 0.3;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5em;
    z-index: 0;

    img {
      height: 100px;
      background-color: rgba($color: #ffff, $alpha: 0.4);
      box-shadow: 0px 0px 50px white;
    }

    h4 {
      width: 72%;
      text-align: center;
      border-radius: 80px;
      background-color: rgba($color: #ffff, $alpha: 0.5);
      box-shadow: 0px 0px 50px white;
    }
  }
}
</style>

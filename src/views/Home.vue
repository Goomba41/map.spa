<template>
  <div class="main">
    <section id="first">
      <div class="image main">
        <img src="../assets/banner.jpg" alt="banner image" />
      </div>
      <b-container>
        <header class="major">
          <h1>Lorem ipsum.</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            egestas.
          </h2>
        </header>
      </b-container>
    </section>
    <section id="second">
      <b-container>2</b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  section {
    &:not(:first-child) {
      border-top: solid 6px #f4f4f4;
    }
  }
  .container {
    padding: 6em 0 4em 0;
  }
}
header {
  h1 {
    color: #4acaa8;
    font-size: 3.5em;
    line-height: 1.5em;
    font-weight: 700;
    margin: 0 0 0.5625em 0;
  }
  h2 {
    color: #777;
    font-size: 1.75em;
    font-weight: 700;
    line-height: 1.5em;
    position: relative;
    margin: 0 0 1.6875em 0;
  }
}
</style>

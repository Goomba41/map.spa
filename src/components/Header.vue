<template>
  <header>
    <span class="image logo">
      <img src="../assets/images/logo.webp" alt="logo" />
    </span>
    <h1 id="logo">Willis Corto</h1>
    <p>
      I got reprogrammed by a rogue AI<br />
      and now I'm totally cray
    </p>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
header {
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  padding: 2.5em 3em;
  p {
    color: lighten(map-get($theme-colors, primary), 30%);
    font-style: italic;
    font-family: "Lato Italic", sans-serif;
    margin: 1em 0 0 0;
  }
  h1 {
    font-size: 1.75em;
    margin: 0;
    color: map-get($other-colors, "white");
  }
}

.logo {
  border-radius: 100%;
  overflow: hidden;
  display: block;
  margin: 0 auto 2.25em auto;
  width: 8em;

  img {
    border-radius: 100%;
    display: block;
    width: 100%;
  }
}
</style>

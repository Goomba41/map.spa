<template>
  <scrollactive
    id="nav"
    class=""
    active-class="router-link-exact-active"
    :offset="0"
  >
    <router-link to="/#top" class="scrollactive-item">Home</router-link>
    <router-link to="/#about" class="scrollactive-item">About</router-link>
    <router-link to="/#marked" class="scrollactive-item"
      >What we marked?</router-link
    >
    <router-link to="/#last-list" class="scrollactive-item"
      >Places list</router-link
    >
    <router-link to="/#map" class="scrollactive-item">Map</router-link>
    <router-link to="/#authors" class="scrollactive-item">Authors</router-link>
    <router-link to="/#feedback" class="scrollactive-item"
      >Feedback</router-link
    >
  </scrollactive>
</template>

<script>
export default {
  name: "Nav",
  props: {},
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
#nav {
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  a {
    user-select: none;
    padding: 0.1em 0;
    border: 0;
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
    font-family: "Ubuntu Light";
    &:not(:first-child) {
      border-top: solid 2px lighten(map-get($theme-colors, primary), 5%);
    }
    &:hover {
      color: inherit;
      background-color: lighten(map-get($theme-colors, primary), 10%);
    }
    &.router-link-exact-active {
      color: map-get($theme-colors, primary);
      background-color: map-get($other-colors, "white");
    }
  }
}
</style>

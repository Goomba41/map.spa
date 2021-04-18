<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <font-awesome-icon :icon="['fas', 'user-secret']" />
  </nav>
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
  padding: 30px;

  a {
    font-weight: bold;
    color: map-get($other-colors, white);

    &.router-link-exact-active {
      color: map-get($theme-colors, accent);
    }
  }
}
</style>

<template>
  <scrollactive
    id="nav"
    class=""
    active-class="router-link-exact-active"
    :offset="0"
    :highlightFirstItem="true"
  >
    <router-link to="/#top" class="scrollactive-item">Главная</router-link>
    <router-link to="/#about" class="scrollactive-item">О проекте</router-link>
    <router-link to="/#marked" class="scrollactive-item"
      >Что у нас есть?</router-link
    >
    <router-link to="/#last-list" class="scrollactive-item"
      >Что нового?</router-link
    >
    <router-link to="/#map" class="scrollactive-item">Карта</router-link>
    <router-link to="/#authors" class="scrollactive-item">Авторы</router-link>
    <router-link to="/#feedback" class="scrollactive-item"
      >Связаться</router-link
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

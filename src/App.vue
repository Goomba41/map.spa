<template>
  <div id="app">
    <Wrapper></Wrapper>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Wrapper from "@/components/Wrapper.vue";
export default {
  components: { Sidebar, Wrapper },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #888;
  font-family: "Lato", sans-serif;
  font-size: 16pt;
  font-weight: 400;
  line-height: 1.75em;
  background: #fff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffc05d;
    }
  }
}
</style>

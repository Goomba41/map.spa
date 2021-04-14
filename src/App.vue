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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

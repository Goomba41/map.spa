<template>
  <section id="sidebar">
    <Header></Header>
    <Nav></Nav>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Sidebar",
  props: {},
  components: {
    Header,
    Nav,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "@/assets/styles/variables.scss";

#sidebar {
  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: map-get($theme-colors, primary);
  color: map-get($other-colors, text-alt);
  height: 100%;
  overflow-y: auto;
  position: fixed;
  text-align: center;
  top: 0;
  width: 20em;
  right: 0;
  z-index: 10002;
  transition: transform 0.5s ease;

  // X-Large devices (large desktops, less than 1400px)
  @include media-breakpoint-down(xxl) {
    width: 20em;
  }

  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(xl) {
    width: 20em;
  }

  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(lg) {
    width: 23em;
    transform: translateX(23em);
    right: 0;
    .sidebar-show & {
      transform: translateX(0em);
    }
  }

  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(md) {

  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {
    width: 17em;
    transform: translateX(17em);
    right: 0;
    .sidebar-show & {
      transform: translateX(0em);
    }
  }
}
</style>

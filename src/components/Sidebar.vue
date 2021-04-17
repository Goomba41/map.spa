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
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  background: $color-primary-default;
  color: $color-text-alt;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  text-align: center;
  top: 0;
  // width: 15rem;
  width: 23em;
  right: 0;

  @include media-breakpoint-down(xs) {
  }
  @include media-breakpoint-down(sm) {
    width: 15em;
  }
  @include media-breakpoint-down(md) {
  }
  @include media-breakpoint-down(lg) {
  }
  @include media-breakpoint-down(xl) {
  }
}
</style>

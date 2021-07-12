<template>
  <section id="wrapper">
    <router-view />
    <PageFooter></PageFooter>
  </section>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "Wrapper",
  components: { PageFooter },
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
#wrapper {
  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  background: map-get($other-colors, "white");
  transition: transform 0.5s ease;
  padding-right: 20em;
  transform: translateX(0em);

  // X-Large devices (large desktops, less than 1400px)
  @include media-breakpoint-down(xxl) {

  }

  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(xl) {
    padding-right: 20em;
  }

  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(lg) {
    padding: 44px 0 1px 0;
    right: 0;
    .sidebar-show & {
      transform: translateX(-23em);
    }
  }

  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(md) {
    right: 0;
    .sidebar-show & {
      transform: translateX(-17em);
    }
  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {

  }
}
</style>

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
  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(lg) {
  }
  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(md) {
  }
  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(sm) {
  }
  // Extra small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(xs) {
    // transform: translateX(-17em);
    padding: 44px 0 1px 0;
  }

  // No media query necessary for xl breakpoint as it has no upper bound on its width
  background: map-get($other-colors, "white");
  transition: transform 0.5s ease;
  padding-right: 23em;
}
</style>

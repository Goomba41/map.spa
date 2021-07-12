<template>
  <div id="app" :class="[sidebarShow ? 'sidebar-show' : '', 'app']" ref="top">
    <sidebar-toggle @sidebar-toggle="sidebarShow = !sidebarShow">
    </sidebar-toggle>
    <Wrapper></Wrapper>
    <Sidebar></Sidebar>
    <a href="#" title="System sign in" class="sign-in-link">
      <font-awesome-icon :icon="['fas', 'user-secret']" />
    </a>
    <b-button variant="primary" class="scrollTop" @click="scrollTop"
      >Наверх</b-button
    >
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Wrapper from "@/components/Wrapper.vue";
import SidebarToggleMobile from "@/components/SidebarToggleMobile.vue";

export default {
  data() {
    return {
      sidebarShow: false,
    };
  },
  components: { Sidebar, Wrapper, "sidebar-toggle": SidebarToggleMobile },
  methods: {
    scrollTop() {
      const top = this.$refs.top;
      this.$smoothScroll({
        scrollTo: top,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/coreStyle.scss";
@import "@/assets/styles/variables.scss";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
.sign-in-link {
  $font-size: 1em;
  $margin-top: 0.5em;

  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  position: fixed;
  top: 0;
  right: 0;
  border: 0;
  margin: #{$margin-top} 1em 0 0;
  z-index: 10002;
  font-size: #{$font-size};

  // X-Large devices (large desktops, less than 1400px)
  @include media-breakpoint-down(xxl) {

  }

  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(xl) {

  }

  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(lg) {
    top: calc((-#{$font-size} - #{$margin-top}) * 2 + 100%);
  }

  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(md) {

  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {

  }

  &:hover {
    color: lighten(map-get($other-colors, text-default), 20%);
  }
}

.scrollTop {
  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  position: fixed;
  z-index: 10003;
  bottom: 0;
  left: 0;
  font-size: 0.75em;
  margin: 0 0 1em 1em;
  transition: outline-color 0.5s ease-in-out;

  // X-Large devices (large desktops, less than 1400px)
  @include media-breakpoint-down(xxl) {
    margin: 0 0 1em 1em;
  }

  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(xl) {

  }

  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(lg) {
    margin: 0 0 1em 0.5em;
  }

  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(md) {
    margin: 0 0 1em 0.5em;
    background-color: transparentize(map-get($theme-colors, primary), 0.3);
  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {
    margin: 0 0 1em 1.75em;
    background-color: transparentize(map-get($theme-colors, primary), 0.3);
  }

  &:focus {
    outline-color: map-get($theme-colors, primary);
  }
}
</style>

<template>
  <header>
    <span class="image logo">
      <img src="../assets/images/logo.webp" alt="logo" />
    </span>
    <h1>Lorem ipsum</h1>
    <p>
      Lorem ipsum dolor sit amet,<br />
      adipiscing elit. Proin justo.
    </p>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
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

header {
  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  padding: 2.5em 3em;

  // X-Large devices (large desktops, less than 1400px)
  @include media-breakpoint-down(xxl) {
  }

  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(xl) {
  }

  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(lg) {
  }
  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(md) {
  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {
    padding: 2em;
  }

  .logo {
    // XX-Large devices (larger desktops)
    // No media query since the xxl breakpoint has no upper bound on its width
    border-radius: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto 2.25em auto;
    width: 8em;

    // X-Large devices (large desktops, less than 1400px)
    @include media-breakpoint-down(xxl) {
    }

    // Large devices (desktops, less than 1200px)
    @include media-breakpoint-down(xl) {
    }

    // Medium devices (tablets, less than 992px)
    @include media-breakpoint-down(lg) {
    }

    // Small devices (landscape phones, less than 768px)
    @include media-breakpoint-down(md) {
    }

    // X-Small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(sm) {
      margin: 0 auto 1.6875em auto;
      width: 6em;
    }

    img {
      border-radius: 100%;
      display: block;
      width: 100%;
    }
  }

  p {
    // XX-Large devices (larger desktops)
    // No media query since the xxl breakpoint has no upper bound on its width
    color: lighten(map-get($theme-colors, primary), 30%);
    font-style: italic;
    font-family: "Lato Italic", sans-serif;
    margin: 1em 0 0 0;

    // X-Large devices (large desktops, less than 1400px)
    @include media-breakpoint-down(xxl) {
    }

    // Large devices (desktops, less than 1200px)
    @include media-breakpoint-down(xl) {
    }

    // Medium devices (tablets, less than 992px)
    @include media-breakpoint-down(lg) {
    }

    // Small devices (landscape phones, less than 768px)
    @include media-breakpoint-down(md) {
    }

    // X-Small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(sm) {
    }
  }

  h1 {
    // XX-Large devices (larger desktops)
    // No media query since the xxl breakpoint has no upper bound on its width
    font-size: 1.75em;
    margin: 0;
    color: map-get($other-colors, "white");

    // X-Large devices (large desktops, less than 1400px)
    @include media-breakpoint-down(xxl) {
    }

    // Large devices (desktops, less than 1200px)
    @include media-breakpoint-down(xl) {
    }

    // Medium devices (tablets, less than 992px)
    @include media-breakpoint-down(lg) {
    }

    // Small devices (landscape phones, less than 768px)
    @include media-breakpoint-down(md) {
    }

    // X-Small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(sm) {
      font-size: 1.5em;
    }
  }
}
</style>

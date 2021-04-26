<template>
  <header>
    <span class="image logo">
      <img src="../assets/images/logo.webp" alt="logo" />
    </span>
    <h1>Lorem ipsum</h1>
    <p>
      Lorem ipsum dolor sit amet,<br />
      adipiscing elit. Proin justo non.
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
    padding: 2em;
  }

  // No media query necessary for xl breakpoint as it has no upper bound on its width
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  padding: 2.5em 3em;

  .logo {
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
      margin: 0 auto 1.6875em auto;
      width: 6em;
    }

    border-radius: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto 2.25em auto;
    width: 8em;

    img {
      border-radius: 100%;
      display: block;
      width: 100%;
    }
  }

  p {
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
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
    color: lighten(map-get($theme-colors, primary), 30%);
    font-style: italic;
    font-family: "Lato Italic", sans-serif;
    margin: 1em 0 0 0;
  }
  h1 {
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
      font-size: 1.5em;
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
    font-size: 1.75em;
    margin: 0;
    color: map-get($other-colors, "white");
  }
}
</style>

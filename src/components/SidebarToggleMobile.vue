<template>
  <div id="sidebarToggle">
    <a href="#header" class="toggle" @click="$emit('sidebar-toggle')"
      ><font-awesome-icon :icon="['fas', 'bars']" class="icon"
    /></a>
    <span class="title"><a href="#">Willis Corto</a></span>
  </div>
</template>

<script>
export default {
  name: "SidebarToggleMobile",
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
#sidebarToggle {
  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(lg) {
  }
  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(md) {
  }
  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(sm) {
    backface-visibility: hidden;
    transition: transform 0.5s ease;
    display: block;
    height: 44px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10001;
    background: map-get($other-colors, "text-default");
    color: map-get($other-colors, "white");
    min-width: 320px;

    transform: translateX(0em);
    right: 0;
    .sidebar-show & {
      transform: translateX(-17em);
    }

    .title {
      color: map-get($other-colors, "white");
      display: block;
      font-weight: 700;
      height: 44px;
      line-height: 44px;
      padding: 0 1em;
      width: 100%;
      text-align: left;
      a {
        border: 0;
        text-decoration: none;
      }
    }

    .toggle {
      height: 2.76em;
      width: 2.75em;
      text-decoration: none;
      position: absolute;
      top: 0;
      border: 0;
      outline: 0;
      right: 0;
      background-color: map-get($theme-colors, primary);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: map-get($other-colors, "white");
      }
    }
  }
  // Extra small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(xs) {
  }

  // No media query necessary for xl breakpoint as it has no upper bound on its width
  display: none;
}
</style>

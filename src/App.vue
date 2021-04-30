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
.sign-in-link {
  position: fixed;
  bottom: 0;
  right: 0;
  border: 0;
  margin: 0 1em 0.5em 0;
  z-index: 10002;
  &:hover {
    color: lighten(map-get($other-colors, text-default), 20%);
  }
}

.scrollTop {
  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(lg) {
    margin: 0 0 1em 1em;
  }
  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(md) {
    margin: 0 0 1em 0.5em;
  }
  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(sm) {
    margin: 0 0 1em 0.5em;
  }
  // Extra small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(xs) {
    margin: 0 0 1em 1.75em;
    background-color: transparentize(map-get($theme-colors, primary), 0.3);
  }

  // No media query necessary for xl breakpoint as it has no upper bound on its width
  position: fixed;
  z-index: 10003;
  bottom: 0;
  left: 0;
  font-size: 0.75em;
  margin: 0 0 1em 1em;
}
</style>

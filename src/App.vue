<template>
  <div id="app" class="app">
    <sidebar-toggle></sidebar-toggle>
    <Wrapper></Wrapper>
    <Sidebar></Sidebar>
    <a href="#" title="System sign in" class="sign-in-link">
      <font-awesome-icon :icon="['fas', 'user-secret']" />
    </a>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Wrapper from "@/components/Wrapper.vue";
import SidebarToggleMobile from "@/components/SidebarToggleMobile.vue";

export default {
  components: { Sidebar, Wrapper, "sidebar-toggle": SidebarToggleMobile },
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
</style>

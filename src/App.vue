<template>
  <div id="app" class="app">
    <Wrapper></Wrapper>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Wrapper from "@/components/Wrapper.vue";

export default {
  components: { Sidebar, Wrapper },
};
</script>

<style lang="scss">
@import "@/assets/styles/coreStyle.scss";
</style>

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
@import "@/assets/styles/variables.scss";
#wrapper {
  background: map-get($other-colors, "white");
  padding-right: 23em;
}
</style>

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
#wrapper {
  background: #fff;
  padding-right: 15rem;
}
</style>

<template>
  <header>
    <span class="image logo"></span>
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
header {
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  padding: 3em;
}
</style>

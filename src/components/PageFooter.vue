<template>
  <section id="footer">
    <b-container>
      <ul class="copyright">
        <li>© {{ copyrightString }} Untitled. Все права защищены.</li>
        <li>
          Разработка:
          <a href="https://goomba.ru">Бородавкин А.В.</a> c
          <font-awesome-icon style="color: red" :icon="['fas', 'heart']" />
        </li>
      </ul>
      <ul>
        <li>Копирование без указания источника запрещено</li>
      </ul>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "PageFooter",
  props: {},
  data() {
    return {
      initYear: 2021,
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    copyrightString: function () {
      if (this.currentYear > this.initYear) {
        return this.initYear + " — " + this.currentYear;
      }
      return this.initYear;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "@/assets/styles/variables.scss";

#footer {
  border-top: 0;
  color: map-get($other-colors, "text-default-lighter");
  background-color: lighten(map-get($other-colors, "border-default"), 2.2%);
  overflow: hidden;
  margin-top: 2.25rem;

  ul {
    // XX-Large devices (larger desktops)
    // No media query since the xxl breakpoint has no upper bound on its width
    line-height: 1em;
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: row;
    justify-content: center;

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
      flex-flow: column;
    }

    li,
    &.copyright li {
      // XX-Large devices (larger desktops)
      // No media query since the xxl breakpoint has no upper bound on its width
      border-left: solid 1px map-get($other-colors, "border-default-darker");
      display: inline-block;
      font-size: 0.8em;
      margin-left: 1em;
      padding-left: 1em;
      text-align: center;

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
        border-left: 0;
        display: block;
        line-height: 1.75em;
        padding-left: 0;
      }

      &:first-child {
        border-left: 0;
        margin-left: 0;
        padding-left: 0;
      }
    }
  }
}
</style>

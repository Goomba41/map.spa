<template>
  <footer>
    <ul class="icons">
      <li>
        <a class="icon" href="https://vk.com/goomba41" target="_blank"
          ><font-awesome-icon :icon="['fab', 'vk']" class="icon"
        /></a>
      </li>
      <li>
        <a class="icon" href="https://github.com/Goomba41" target="_blank"
          ><font-awesome-icon :icon="['fab', 'github']" class="icon"
        /></a>
      </li>
      <li>
        <a
          class="icon"
          href="https://www.instagram.com/goomba41/"
          target="_blank"
          ><font-awesome-icon :icon="['fab', 'instagram']" class="icon"
        /></a>
      </li>
      <li>
        <a class="icon" href="https://t.me/Goomba_41" target="_blank"
          ><font-awesome-icon :icon="['fab', 'telegram']" class="icon"
        /></a>
      </li>
      <li>
        <a
          class="icon"
          href="mailto:anton.borodawkin@yandex.ru?subject=Вопрос по «Карте города Кирова»"
          target="_blank"
          ><font-awesome-icon
            :icon="['fas', 'envelope-open-text']"
            class="icon"
        /></a>
      </li>
      <li>
        <a class="icon" href="https://goomba.ru" target="_blank"
          ><font-awesome-icon
            :icon="['fas', 'user-circle']"
            class="icon"
            fixed-width
        /></a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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

footer {
  a {
    border: none;
  }
  ul {
    // XX-Large devices (larger desktops)
    // No media query since the xxl breakpoint has no upper bound on its width
    margin: 0;
    cursor: default;
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    font-size: 1.5em;

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
      font-size: 1em;
    }
  }

  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  flex-shrink: 0;
  bottom: 0;
  left: 0;
  padding: 2em 3em;
  width: 100%;

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
    padding: 2em;
  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {
    padding: 1.5em;
  }
}
</style>

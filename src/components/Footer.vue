<template>
  <footer>
    <ul class="icons">
      <li>
        <a class="alt" href="https://vk.com/goomba41" target="_blank"
          ><font-awesome-icon :icon="['fab', 'vk']" class="icon"
        /></a>
      </li>
      <li>
        <a class="alt" href="https://github.com/Goomba41" target="_blank"
          ><font-awesome-icon :icon="['fab', 'github']" class="icon"
        /></a>
      </li>
      <li>
        <a
          class="alt"
          href="https://www.instagram.com/goomba41/"
          target="_blank"
          ><font-awesome-icon :icon="['fab', 'instagram']" class="icon"
        /></a>
      </li>
      <li>
        <a class="alt" href="https://t.me/Goomba_41" target="_blank"
          ><font-awesome-icon :icon="['fab', 'telegram']" class="icon"
        /></a>
      </li>
      <li>
        <a
          class="alt"
          href="mailto:anton.borodawkin@yandex.ru?subject=Вопрос по «Карте города Кирова»"
          target="_blank"
          ><font-awesome-icon
            :icon="['fas', 'envelope-open-text']"
            class="icon"
        /></a>
      </li>
      <li>
        <a class="alt" href="https://goomba.ru" target="_blank"
          ><font-awesome-icon
            :icon="['fas', 'user-circle']"
            class="icon"
            fixed-width
        /></a>
      </li>
    </ul>
  </footer>
</template>

<!-- faEnvelopeOpenText,
faUserCircle,
faVk,
faGithub,
faInstagram, -->

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
footer {
  flex-shrink: 0;
  bottom: 0;
  left: 0;
  padding: 2em 5em;
  width: 100%;
  a {
    border: none;
  }
  ul {
    margin: 0;
    cursor: default;
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    font-size: 1.5em;
  }
}
</style>

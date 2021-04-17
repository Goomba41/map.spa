<template>
  <section id="footer">
    <b-container>
      <ul class="copyright">
        <li>© {{ copyrightString }} Untitled. Все права защищены.</li>
        <li>
          Дизайн:
          <a href="https://goomba.ru">Бородавкин Антон Владимирович</a> c
          <font-awesome-icon style="color: red" :icon="['fas', 'heart']" />
        </li>
      </ul>
      <ul class="copyright">
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
@import "@/assets/styles/variables.scss";
#footer {
  border-top: 0;
  color: $color-text-default-lighter;
  overflow: hidden;
  padding: 4em 0 2em 0;

  .copyright {
    line-height: 1em;
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: row;
    justify-content: center;

    li {
      border-left: solid 1px $color-border-default-darker;
      display: inline-block;
      font-size: 0.8em;
      margin-left: 1em;
      padding-left: 1em;

      &:first-child {
        border-left: 0;
        margin-left: 0;
        padding-left: 0;
      }
    }
  }
}
</style>

<template>
  <section id="footer">
    <b-container>
      <ul class="copyright">
        <li>© Untitled. All rights reserved.</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        <li>Demo Images: <a href="http://unsplash.com">Unsplash</a></li>
      </ul>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "PageFooter",
  props: {},
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#footer {
  background: #fafafa;
  border-top: 0;
  color: #c0c0c0;
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
      border-left: solid 1px #d4d4d4;
      display: inline-block;
      font-size: 0.8em;
      margin-left: 1em;
      padding-left: 1em;

      &:first-child {
        border-left: 0;
        margin-left: 0;
        padding-left: 0;
      }

      a {
        color: inherit;
        -moz-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        -webkit-transition: color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        -ms-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        border-bottom: solid 1px #e4e4e4;
        color: inherit;
        text-decoration: none;

        &:hover {
          border-bottom-color: transparent;
          color: #4acaa8 !important;
        }
      }
    }
  }
}
</style>

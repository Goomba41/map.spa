<template>
  <section id="content">
    <b-container>
      <header class="major">
        <h1>{{ pointData.name }}</h1>
        <div class="cover shiny">
          <img
            :src="require(`../assets/images/` + pointData.cover)"
            class="image shadow"
            :alt="pointData.as"
          />
          <span class="photo-signature">
            Автор снимка: Чудиновских Елена Николаевна
            <sup class="source-link"><a href="#source-1">[1]</a></sup>
          </span>
        </div>
        <h2>
          {{ pointData.description }}
        </h2>
      </header>
      <div class="text" v-html="pointData.text"></div>
      <div class="data">
        <h3>Данные об объекте:</h3>
        <ul>
          <li><a href="#">Источник раз</a></li>
          <li><a href="#">Источник два</a></li>
        </ul>
      </div>
      <div class="sources">
        <h3>Источники:</h3>
        <ol>
          <li id="source-1">
            Автор снимка: Чудиновских Е.Н., г. Киров, 2021.
            <a href="#">(оригинал)</a>
          </li>
          <li id="source-2"><a href="#">Источник два</a></li>
          <li id="source-3"><a href="#">Источник три</a></li>
        </ol>
      </div>
      <div class="authors">
        <div class="primary">
          <h3>Автор текста:</h3>
          <div class="author-signature">
            <img
              :src="require(`../assets/images/` + pointData.authorPrimary.ap)"
              class="author shadow"
              :alt="pointData.authorPrimary.as"
            />
            <span>
              {{ pointData.authorPrimary.as }}
              {{ pointData.authorPrimary.an.charAt(0) }}.{{
                pointData.authorPrimary.apt.charAt(0)
              }}.
            </span>
          </div>
        </div>
        <div class="secondary" v-if="pointData.authorSecondary.length">
          <h3>В соавторстве с:</h3>
          <div class="test">
            <div
              class="author-signature"
              v-for="coAuthor in pointData.authorSecondary"
              v-bind:key="coAuthor.id"
              :id="`signature-` + coAuthor.id"
            >
              <img
                :src="require(`../assets/images/` + coAuthor.ap)"
                class="author shadow"
                :alt="coAuthor.as"
                :id="`popover-` + coAuthor.id"
              />
              <b-popover
                :target="`popover-` + coAuthor.id"
                triggers="hover focus"
                placement="bottom"
                content="Embedding content using properties is easy"
                :container="`signature-` + coAuthor.id"
              >
                {{ coAuthor.as }} {{ coAuthor.an.charAt(0) }}.{{
                  coAuthor.apt.charAt(0)
                }}.
              </b-popover>
            </div>
          </div>
        </div>
      </div>
    </b-container>
    <span class="date">Киров {{ pointData.cdate.substring(0, 4) }}</span>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Object",
  props: ["id"],
  mounted() {},
  computed: {
    ...mapState({
      authors: (state) => state.authors,
    }),
    pointData() {
      return this.$store.getters.getPoint(parseInt(this.id));
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "@/assets/styles/variables.scss";

h1 {
  font-size: 3em;
  text-align: center;
}

h2 {
  font-size: 1.25em;
  text-align: justify;
}

header {
  text-align: center;
}

.text {
  text-align: justify;
}

.date {
  text-align: center;
  display: block;
}

.data,
.sources {
  padding-bottom: 2.25em;
}

.cover {
  margin-bottom: 2.25em;

  .image {
    border-radius: 5px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1em;
    width: 95%;
  }
  .photo-signature {
    display: block;
    position: absolute;
    bottom: 0px;
    z-index: 100;
    right: 0px;
    background: white;
    border-radius: 5px;
    padding: 0.5em 1em;
    font-size: 0.5em;
    user-select: none;
    text-align: right;
    line-height: 1.75em;
    border: lighten(black, 85%) solid 2px;
  }
}

.authors {
  display: flex;
  .author-signature {
    img {
      width: 20%;
    }
  }
  .secondary {
    .author-signature {
      img {
        margin: 0;
        width: 26.3%;
      }
    }
  }
}
</style>

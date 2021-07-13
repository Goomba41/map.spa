<template>
  <div class="main">
    <section id="first">
      <b-container>
        <header class="major">
          <h1>{{ pointData.name }}</h1>
          <img
          :src="require(`../assets/images/` + pointData.cover)"
          class="cover shadow"
          :alt="pointData.as"
          />
          <h2>
            {{ pointData.description }}
          </h2>
        </header>
        <div class="signature">
          <span
            >{{ pointData.an }} {{ pointData.as }}<br /><font-awesome-icon
              :icon="['fas', 'calendar-alt']"
              class="icon"
            />
            {{ pointData.cdate }}</span
          >
          <img
            :src="require(`../assets/images/` + pointData.ap)"
            class="author shadow"
            :alt="pointData.as"
          />
        </div>
      </b-container>
    </section>
  </div>
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

.cover {
  border-radius: 5px;
  margin-bottom: 2.25em;
  max-height: 400px;
  object-fit: cover;
}

.signature {
  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  margin: 1em 0;
  display: flex;
  font-size: 1em;
  align-items: center;
  text-align: right;
  justify-content: flex-end;

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
    margin: 2em 0;
  }

  span {
    font-family: "Ubuntu Light Italic";
    line-height: 1.5em;
    font-size: 0.85em;
  }

  .author {
    // XX-Large devices (larger desktops)
    // No media query since the xxl breakpoint has no upper bound on its width
    width: 10%;
    border-radius: 50%;
    margin-left: 1em;

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
      width: 7%;
    }
  }
}
</style>

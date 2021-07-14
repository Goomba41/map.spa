<template>
  <article>
    <a :href="require(`../assets/images/` + item.cover)" class="image">
      <img
        :src="require(`../assets/images/` + item.cover)"
        :alt="item.name"
        class="shadow cover"
      />
      <img
        :src="require(`../assets/images/` + item.icon)"
        class="shadow sticker"
        alt=""
      />
    </a>
    <div class="description">
      <h4 class="line-clamp">
        {{ item.name }}
      </h4>
      <p class="line-clamp">
        {{ item.description }}
      </p>
      <div class="author-signature">
        <img
          :src="require(`../assets/images/` + item.authorPrimary.ap)"
          class="author shadow"
          :alt="item.authorPrimary.as"
        />
        <span
          >{{ item.authorPrimary.an }} {{ item.authorPrimary.as
          }}<br /><font-awesome-icon
            :icon="['fas', 'calendar-alt']"
            class="icon"
          />
          {{ item.cdate }}</span
        >
      </div>
      <b-button
        class="fit small"
        variant="secondary-alt"
        :to="{ name: 'Object', params: { id: item.id } }"
        >Читать полностью</b-button
      >
    </div>
  </article>
</template>

<script>
export default {
  name: "LastItem",
  props: ["item"],
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
@import "@/assets/styles/variables.scss";
article {
  &:first-child {
    border-top: 0;
    padding-top: 0;
  }
  border-top: solid 3px map-get($other-colors, border-default);
  margin-bottom: 2.25em;
  padding-top: 2.25em;

  .image {
    // XX-Large devices (larger desktops)
    // No media query since the xxl breakpoint has no upper bound on its width
    display: inline-block;
    margin-right: 2.5em;
    vertical-align: middle;
    width: 30%;

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
      padding-bottom: 2.25em;
      padding-right: 0;
      width: 100%;
    }

    // X-Small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(sm) {
      display: block;
      width: 100%;
    }

    > img.cover {
      display: block;
      width: 100%;
      -moz-transition: filter 0.2s ease-in-out;
      -webkit-transition: filter 0.2s ease-in-out;
      -ms-transition: filter 0.2s ease-in-out;
      transition: filter 0.2s ease-in-out;
      &:hover {
        filter: saturate(200%);
      }
    }

    > img.sticker {
      // XX-Large devices (larger desktops)
      // No media query since the xxl breakpoint has no upper bound on its width
      border-radius: 100%;
      position: absolute;
      z-index: 10;
      top: -30px;
      width: 30%;
      left: -30px;
      padding: 0.25em;
      background-color: white;
      border: solid 1px lighten(black, 85%);

      // X-Large devices (large desktops, less than 1400px)
      @include media-breakpoint-down(xxl) {
      }

      // Large devices (desktops, less than 1200px)
      @include media-breakpoint-down(xl) {
      }

      // Medium devices (tablets, less than 992px)
      @include media-breakpoint-down(lg) {
        width: 10%;
        top: -17px;
        left: -17px;
      }

      // Small devices (landscape phones, less than 768px)
      @include media-breakpoint-down(md) {
        top: 0;
        left: 0;
      }

      // X-Small devices (portrait phones, less than 576px)
      @include media-breakpoint-down(sm) {
      }
    }
  }
  .description {
    // XX-Large devices (larger desktops)
    // No media query since the xxl breakpoint has no upper bound on its width
    display: inline-flex;
    vertical-align: middle;
    flex-direction: column;
    justify-content: space-between;
    min-height: 13.9em;
    width: 60%;

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
      width: 100%;
    }

    // X-Small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(sm) {
      display: block;
      margin: 0 0 2.25em 0;
      padding-right: 0;
      width: 100%;
    }

    p {
      margin: 0;
      font-size: 0.85em;
      &.line-clamp {
        // XX-Large devices (larger desktops)
        // No media query since the xxl breakpoint has no upper bound on its width
        @include shorten-text(4, 1.75em);

        // X-Large devices (large desktops, less than 1400px)
        @include media-breakpoint-down(xxl) {
          @include shorten-text(3, 1.75em);
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
        }
      }
    }
    h4 {
      font-family: "Ubuntu Medium";
      font-size: 1.25em;
      &.line-clamp {
        @include shorten-text(2, 1.5em);
      }
    }
    &:last-child {
      margin: 0;
    }
  }
  .author-signature {
    font-size: 0.7em;
    justify-content: flex-end;
  }
}
</style>

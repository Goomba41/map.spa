<template>
  <article>
    <a href="#" class="image">
      <img
        :src="require(`../assets/images/` + item.image)"
        alt=""
        class="shadow-author"
      />
    </a>
    <div class="description">
      <h4 class="line-clamp">
        {{ item.header }}
      </h4>
      <p class="line-clamp">
        {{ item.fp }}
      </p>
      <div class="signature">
        <span
          >{{ item.i }} {{ item.f }}<br /><font-awesome-icon
            :icon="['fas', 'calendar-alt']"
            class="icon"
          />
          {{ item.cdate }}</span
        >
        <img
          :src="require(`../assets/images/` + item.p)"
          class="author shadow"
          alt=""
        />
      </div>
      <b-button
        class="fit small"
        variant="secondary-alt"
        :to="{ path: '/page-example' }"
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
  // display: flex;

  .image {
    // Large devices (desktops, less than 1200px)
    @include media-breakpoint-down(lg) {
    }
    // Medium devices (tablets, less than 992px)
    @include media-breakpoint-down(md) {
    }
    // Small devices (landscape phones, less than 768px)
    @include media-breakpoint-down(sm) {
      padding-bottom: 2.5em;
      padding-right: 0;
      width: 100%;
    }
    // Extra small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(xs) {
      display: block;
      margin: 0 0 2.25em 0;
      padding: 0;
      width: 100%;
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
    display: inline-block;
    padding-right: 2.5em;
    vertical-align: middle;
    width: 60%;

    > img {
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
  }
  .description {
    // Large devices (desktops, less than 1200px)
    @include media-breakpoint-down(lg) {
    }
    // Medium devices (tablets, less than 992px)
    @include media-breakpoint-down(md) {
    }
    // Small devices (landscape phones, less than 768px)
    @include media-breakpoint-down(sm) {
      width: 100%;
    }
    // Extra small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(xs) {
      display: block;
      margin: 0 0 2.25em 0;
      padding-right: 0;
      width: 100%;
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
    display: inline-flex;
    vertical-align: middle;
    flex-direction: column;
    justify-content: space-between;
    min-height: 13.9em;
    width: 40%;

    p {
      margin: 0;
      font-size: 0.85em;
      &.line-clamp {
        // Large devices (desktops, less than 1200px)
        @include media-breakpoint-down(lg) {
          @include shorten-text(3, 1.75em);
        }
        // Medium devices (tablets, less than 992px)
        @include media-breakpoint-down(md) {
        }
        // Small devices (landscape phones, less than 768px)
        @include media-breakpoint-down(sm) {
        }
        // Extra small devices (portrait phones, less than 576px)
        @include media-breakpoint-down(xs) {
        }

        // No media query necessary for xl breakpoint as it has no upper bound on its width
        @include shorten-text(4, 1.75em);
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
}

.signature {
  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(lg) {
  }
  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(md) {
  }
  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(sm) {
  }
  // Extra small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(xs) {
    margin: 2em 0;
  }

  // No media query necessary for xl breakpoint as it has no upper bound on its width
  margin: 1em 0;
  display: flex;
  font-size: 0.7em;
  align-items: center;
  text-align: right;
  justify-content: flex-end;

  span {
    font-family: "Ubuntu Light Italic";
    line-height: 1.5em;
    font-size: 0.85em;
  }

  .author {
    // Large devices (desktops, less than 1200px)
    @include media-breakpoint-down(lg) {
    }
    // Medium devices (tablets, less than 992px)
    @include media-breakpoint-down(md) {
    }
    // Small devices (landscape phones, less than 768px)
    @include media-breakpoint-down(sm) {
      width: 7%;
    }
    // Extra small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(xs) {
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
    width: 10%;
    border-radius: 50%;
    margin-left: 1em;
  }
}
</style>

<template>
  <div class="main">
    <!-- Section 1. Image gallery, header with headings 1 and 2 level, description. -->
    <section id="first">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide image main"
            data-position="right"
            :key="banner"
            v-for="banner in banners"
          >
            <img :src="require('@/assets/images/' + banner)" />
          </div>
        </div>
      </div>
      <b-container>
        <header class="major">
          <h1>Walk around Kirov city</h1>
          <h2>
            Interactive map of Kirov with interesting places,<br />
            historical sites and
            <a href="https://opendata.mkrf.ru/opendata/7705851331-egrkn/"
              >cultural heritage sites</a
            >.
          </h2>
        </header>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet
          tortor ultricies non ante erat nunc integer eu ante ornare amet
          commetus vestibulum blandit integer in curae ac faucibus integer non.
          Adipiscing cubilia elementum.
        </p>
      </b-container>
    </section>
    <!-- Section 1. End. -->
    <!-- Section 2. Map possibilities or things marked on $map. -->
    <section id="second">
      <b-container>
        <h2>We marked some things on map for you</h2>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus.
        </p>
        <ul class="features">
          <li class="feature">
            <font-awesome-icon :icon="['fas', 'industry']" class="icon" /> Old
            and new industrial buildings
          </li>
          <li class="feature">
            <font-awesome-icon :icon="['fas', 'home']" class="icon" />Small
            villages around region
          </li>
          <li class="feature">
            <font-awesome-icon :icon="['fas', 'tree']" class="icon" />Parks and
            Recreation Areas
          </li>
          <li class="feature">
            <font-awesome-icon :icon="['fas', 'church']" class="icon" />Churches
            and other religious sites
          </li>
          <li class="feature">
            <font-awesome-icon
              :icon="['fas', 'basketball-ball']"
              class="icon"
            />Sports and activity venues
          </li>
          <li class="feature">
            <font-awesome-icon
              :icon="['fas', 'map-marked-alt']"
              class="icon"
            />The city's attractions
          </li>
        </ul>
      </b-container>
    </section>
    <!-- Section 2. End. -->
    <!-- Section 3. Lates places and objects pages-->
    <section id="third">
      <b-container>
        <h2>Last things we added on site</h2>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus.
        </p>
        <div class="last-list">
          <article>
            <a href="#" class="image">
              <img src="../assets/images/pic01.webp" alt="" />
            </a>
            <div class="description">
              <h4 class="line-clamp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ut dignissim odio, nec molestie mauris.
              </h4>
              <p class="line-clamp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                erat magna, lacinia non leo congue, suscipit facilisis ex.
                Praesent varius ipsum finibus faucibus tempor. Nullam dapibus
                nibh ut ante venenatis, in congue erat varius. Nulla ac
                tincidunt lorem, in cursus est. In risus metus, accumsan sit
                amet vehicula sit amet, tincidunt id ligula. Vivamus tincidunt
                at neque ac varius. Morbi eros nisl, accumsan vel malesuada
                iaculis, sodales eu lorem. Maecenas in sem non ipsum lobortis
                rhoncus. Nullam id vulputate massa. Pellentesque congue libero
                vel elementum convallis.
              </p>
              <div class="signature">
                <span>Елена Чудиновских<br />(2021-04-01)</span>
                <img
                  src="../assets/images/author01.webp"
                  class="author"
                  alt=""
                />
              </div>
              <b-button
                class="fit small"
                variant="secondary-alt"
                :to="{ path: '/page-example' }"
                >Read full article</b-button
              >
            </div>
          </article>
          <article>
            <a href="#" class="image">
              <img src="../assets/images/pic02.webp" alt="" />
            </a>
            <div class="description">
              <h4 class="line-clamp">
                Lorem ipsum dolor sit amet, consectetur.
              </h4>
              <p class="line-clamp">
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer adipiscing ornare amet.
              </p>
              <div class="signature">
                <span>Владимир Жаравин<br />(2021-04-01)</span>
                <img
                  src="../assets/images/author02.webp"
                  class="author"
                  alt=""
                />
              </div>
              <b-button class="fit small" variant="secondary-alt">
                Read full article
              </b-button>
            </div>
          </article>
          <article>
            <a href="#" class="image">
              <img src="../assets/images/pic03.webp" alt="" />
            </a>
            <div class="description">
              <h4 class="line-clamp">
                Lorem ipsum dolor sit amet, consectetur.
              </h4>
              <p class="line-clamp">
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer adipiscing ornare amet.
              </p>
              <div class="signature">
                <span>Антон Бородавкин<br />(2021-04-01)</span>
                <img
                  src="../assets/images/author03.webp"
                  class="author"
                  alt=""
                />
              </div>
              <router-link :to="{ name: 'Object', params: {} }">
                <b-button class="fit small" variant="secondary-alt"
                  >Read full article</b-button
                ></router-link
              >
            </div>
          </article>
        </div>
      </b-container>
    </section>
    <!-- Section 3. End. -->
    <!-- Section 4. Leaflet map-->
    <section id="fourth">
      <b-container>
        <h2>We present you... our map!</h2>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus.
        </p>
        <Map></Map>
      </b-container>
    </section>
    <!-- Section 4. End. -->
    <!-- Section 5. Authors-->
    <section id="fifth">
      <b-container>
        <h2>Project authors</h2>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus.
        </p>
      </b-container>
    </section>
    <!-- Section 5. End. -->
    <!-- Section 6. Feedback form-->
    <section id="sixth">
      <b-container>
        <h2>Contact us</h2>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus.
        </p>

        <form method="post" class="feedback row" action="#">
          <!-- <div class=""> -->
          <div class="col-6 col-12-xsmall">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div class="col-6 col-12-xsmall">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div class="col-12">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <div class="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="6"
            ></textarea>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li>
                <b-button type="submit" variant="primary"
                  >Send Message</b-button
                >
              </li>
              <li>
                <b-button type="reset" variant="secondary">Reset Form</b-button>
              </li>
            </ul>
          </div>
          <!-- </div> -->
        </form>
      </b-container>
    </section>
    <!-- Section 6. End. -->
  </div>
</template>

<script>
import Map from "@/components/LeafletMap.vue";
export default {
  name: "Home",
  components: { Map },
  data() {
    return {
      banners: ["banner01.webp", "banner02.webp", "banner03.webp"],
      swiperOption: {
        simulateTouch: false,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        // centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        speed: 500,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "@/assets/styles/variables.scss";
.main {
  section {
    &:not(:first-child) {
      border-top: solid 6px map-get($other-colors, border-default);
    }
  }
  .container {
    padding: 6em 0 4em 0;
  }
}

h1 {
  color: map-get($theme-colors, primary);
  font-size: 3.5em;
  line-height: 1.5em;
  font-weight: 700;
  margin: 0 0 0.5625em 0;
}
h2 {
  color: map-get($other-colors, text-default);
  font-size: 1.75em;
  font-weight: 700;
  line-height: 1.5em;
  position: relative;
  margin: 0 0 0.5625em 0;
}
header {
  h2 {
    margin: 0 0 1.6875em 0;
  }
}

.image {
  &.main {
    display: block;
    height: 20em;
    border-radius: 0;
    img {
      border-radius: 0;
      transform: scale(1.05);
    }
  }

  &[data-position] {
    img {
      -moz-object-fit: cover;
      -webkit-object-fit: cover;
      -ms-object-fit: cover;
      object-fit: cover;
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  &[data-position="center"] {
    img {
      -moz-object-position: center;
      -webkit-object-position: center;
      -ms-object-position: center;
      object-position: center;
    }
  }
  &[data-position="left"] {
    img {
      -moz-object-position: left;
      -webkit-object-position: left;
      -ms-object-position: left;
      object-position: left;
    }
  }
  &[data-position="right"] {
    img {
      -moz-object-position: right;
      -webkit-object-position: right;
      -ms-object-position: right;
      object-position: right;
    }
  }
}

img {
  .swiper-slide-active & {
    animation: zoomIn 6s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
}

.features {
  list-style: none;
  padding-left: 0;
  margin: 0 0 2.25em 0;
  .feature {
    display: inline-flex;
    display: -webkit-inline-flex;
    margin: 0 0 1.6875em 0;
    -webkit-justify-content: left;
    -webkit-align-items: center;
    justify-content: left;
    align-items: center;
    width: 50%;
    cursor: default;

    &:hover {
      .icon {
        border: solid 0.08em map-get($theme-colors, primary);
        background-color: transparent;
        color: map-get($theme-colors, primary);
      }
    }

    .icon {
      -moz-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      -webkit-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      -ms-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      width: 1.25em;
      height: 1.25em;
      background-color: map-get($theme-colors, primary);
      color: white;
      font-size: 3rem;
      padding: 0.8rem;
      border: solid 0.08em transparent;
      border-radius: 100%;
      margin-right: 1rem;
    }
  }
}

.last-list {
  article {
    &:first-child {
      border-top: 0;
      padding-top: 0;
    }
    border-top: solid 3px map-get($other-colors, border-default);
    margin-bottom: 2.25em;
    padding-top: 2.25em;
    display: flex;
    .image {
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
      display: inline-flex;
      vertical-align: middle;
      flex-direction: column;
      justify-content: space-between;
      min-height: 13.9em;
      width: 50%;
      p {
        margin: 0;
        &.line-clamp {
          @include shorten-text(3, 1.75em);
        }
      }
      h4 {
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
}

@keyframes zoomIn {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

textarea {
  min-height: 15em;
  max-height: 30em;
  padding: 0.75em 1em;
}

.row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: stretch;

  ul {
    &.actions {
      display: flex;
      cursor: default;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        padding-right: 2em;
      }
    }
  }

  .col-6 {
    width: 50%;
    @include media-breakpoint-down(sm) {
      padding: 0 1.25em;
    }
    @include media-breakpoint-down(md) {
    }
    @include media-breakpoint-down(lg) {
    }
    @include media-breakpoint-down(xl) {
    }
    padding: 0 2em 2em 0;
    &:nth-child(2n) {
      padding: 0 0 2em 0;
    }
  }

  .col-12 {
    width: 100%;
    @include media-breakpoint-down(sm) {
      // padding: 0 1.25em;
    }
    @include media-breakpoint-down(md) {
    }
    @include media-breakpoint-down(lg) {
    }
    @include media-breakpoint-down(xl) {
    }
    &:not(:last-child) {
      padding: 0 0 2em 0;
    }
  }

  .col-12-xsmall {
    @include media-breakpoint-down(sm) {
      width: 100%;
    }
    @include media-breakpoint-down(md) {
    }
    @include media-breakpoint-down(lg) {
    }
    @include media-breakpoint-down(xl) {
    }
  }
}

.signature {
  margin: 1em 0;
  display: flex;
  font-size: 0.7em;
  align-items: center;
  text-align: right;
  justify-content: flex-end;
  span {
    line-height: 1.5em;
  }
  .author {
    width: 10%;
    border-radius: 50%;
    margin-left: 1em;
  }
}
</style>

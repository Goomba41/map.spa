<template>
  <div class="main">
    <!-- Section 1. Image gallery, header with headings 1 and 2 level, description. -->
    <section id="first">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide image main"
            data-position="center"
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
    <!-- Section 2. Map possibilities or things marked on map. -->
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
      <b-container> 3 </b-container>
    </section>
    <!-- Section 3. End. -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      banners: ["banner.jpg", "banner2.jpg", "banner3.jpg"],
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
        speed: 2000,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.main {
  section {
    &:not(:first-child) {
      border-top: solid 6px $color-border-default;
    }
  }
  .container {
    padding: 6em 0 4em 0;
  }
}

h1 {
  color: $color-primary-default;
  font-size: 3.5em;
  line-height: 1.5em;
  font-weight: 700;
  margin: 0 0 0.5625em 0;
}
h2 {
  color: $color-text-default;
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
  border-radius: 5px;
  border: 0;
  display: inline-block;
  position: relative;

  &.main {
    display: block;
    height: 20em;
    border-radius: 0;
    img {
      border-radius: 0;
    }
  }

  img {
    border-radius: 5px;
    display: block;
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

    .icon {
      -moz-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      -webkit-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      -ms-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      width: 1.25em;
      height: 1.25em;
      background-color: $color-primary-default;
      color: white;
      font-size: 3rem;
      padding: 0.8rem;
      border: solid 0.08em transparent;
      border-radius: 100%;
      margin-right: 1rem;
      &:hover {
        border: solid 0.08em $color-primary-default;
        background-color: transparent;
        color: $color-primary-default;
      }
    }
  }
}
</style>

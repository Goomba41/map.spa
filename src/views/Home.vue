<template>
  <div class="main">
    <section id="first">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide image main"
            data-position="center"
            :key="banner"
            v-for="banner in banners"
          >
            <img :src="require('@/assets/' + banner)" />
          </div>
        </div>
      </div>
      <b-container>
        <header class="major">
          <h1>Lorem ipsum.</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            egestas.
          </h2>
        </header>
      </b-container>
    </section>
    <section id="second">
      <b-container>2</b-container>
    </section>
  </div>
</template>

<script>
// import carousel from "vue-owl-carousel";

export default {
  name: "Home",
  // components: { carousel },
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
.main {
  section {
    &:not(:first-child) {
      border-top: solid 6px #f4f4f4;
    }
  }
  .container {
    padding: 6em 0 4em 0;
  }
}
header {
  h1 {
    color: #4acaa8;
    font-size: 3.5em;
    line-height: 1.5em;
    font-weight: 700;
    margin: 0 0 0.5625em 0;
  }
  h2 {
    color: #777;
    font-size: 1.75em;
    font-weight: 700;
    line-height: 1.5em;
    position: relative;
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
      // top: 0;
      // left: 0;
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
</style>

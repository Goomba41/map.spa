<template>
  <div class="main">
    <!-- Section 1. Image gallery, header with headings 1 and 2 level, description. -->
    <section id="top">
      <div
        v-swiper="swiperOptionMain"
        instance-name="firstSwiper"
        class="main-slider"
      >
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
      <b-container id="about">
        <header class="major">
          <h1>Прогулка по Кирову</h1>
          <h2>
            Интерактивная карта Кирова с интересными местами, историческими
            постройками и
            <a href="https://opendata.mkrf.ru/opendata/7705851331-egrkn/"
              >объектами культурного наследия</a
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
    <section id="marked">
      <b-container>
        <h2>Мы отметили несколько мест для Вас</h2>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus.
        </p>
        <ul class="features">
          <li class="feature">
            <font-awesome-icon :icon="['fas', 'industry']" class="icon" />
            Старые и новые производственные здания
          </li>
          <li class="feature">
            <font-awesome-icon :icon="['fas', 'home']" class="icon" />Небольшие
            селения региона
          </li>
          <li class="feature">
            <font-awesome-icon :icon="['fas', 'tree']" class="icon" />Парки и
            зоны отдыха
          </li>
          <li class="feature">
            <font-awesome-icon :icon="['fas', 'church']" class="icon" />Церкви и
            прочие религиозные места
          </li>
          <li class="feature">
            <font-awesome-icon
              :icon="['fas', 'basketball-ball']"
              class="icon"
            />Спортивные и развлекательные объекты
          </li>
          <li class="feature">
            <font-awesome-icon
              :icon="['fas', 'map-marked-alt']"
              class="icon"
            />Достопримечательности города
          </li>
        </ul>
      </b-container>
    </section>
    <!-- Section 2. End. -->
    <!-- Section 3. Lates places and objects pages-->
    <section id="last-list">
      <b-container>
        <h2>Что нового?</h2>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus. Полный список добавленных объектов и
          мест можно посмотреть
          <router-link :to="{ name: 'Places', params: {} }">здесь</router-link>
        </p>
        <div class="last-list">
          <last-item
            :key="item.id"
            v-for="item in lastItems"
            :item="item"
          ></last-item>
        </div>
      </b-container>
    </section>
    <!-- Section 3. End. -->
    <!-- Section 4. Leaflet map-->
    <section id="map">
      <b-container>
        <h2>Представляем Вам... нашу карту!</h2>
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
    <section id="authors">
      <b-container>
        <h2>Авторы и создатели проекта</h2>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus.
        </p>
        <div
          v-swiper="swiperOptionAuthors"
          instance-name="secondSwiper"
          :class="'authors'"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide author"
              data-position="center"
              :key="author.id"
              v-for="author in authors"
            >
              <img
                class="image"
                :src="require('@/assets/images/' + author.photo)"
              />
              <p>
                <b>{{ author.f }}</b
                ><br />{{ author.i }} {{ author.o }}
              </p>
              <p>{{ author.status }}</p>
              <p>{{ author.actions }}</p>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </b-container>
    </section>
    <!-- Section 5. End. -->
    <!-- Section 6. Feedback form-->
    <section id="feedback">
      <b-container>
        <h2>Вопросы? Предложения? Напишите нам!</h2>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus.
        </p>

        <form method="post" class="feedback row" action="#">
          <!-- <div class=""> -->
          <div class="col-6 col-12-xsmall">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Имя и отчество"
            />
          </div>
          <div class="col-6 col-12-xsmall">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Адрес электронной почты"
            />
          </div>
          <div class="col-12">
            <input type="text" name="subject" id="subject" placeholder="Тема" />
          </div>
          <div class="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Сообщение"
              rows="6"
            ></textarea>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li>
                <b-button type="submit" variant="primary">Отправить</b-button>
              </li>
              <li>
                <b-button type="reset" variant="secondary">Сброс</b-button>
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
import LastItem from "@/components/LastItem.vue";
export default {
  name: "Home",
  components: { Map, "last-item": LastItem },
  mounted() {},
  data() {
    return {
      lastItems: [
        {
          id: 1,
          p: "author01.webp",
          f: "Чудиновских",
          i: "Елена",
          image: "post01-1.webp",
          header: "Зосимо-Савватиевская церковь.",
          fp: "Зосимо-Савватиевская церковь каменная в с. Коршик построена в 1777 году. В результате великого разрушения 30-х годов от этого множества церквей полностью уцелело только семь церквей XVIII столетия. В числе полностью уцелевших была и Зосимо-Савватиевская церковь села Коршик. Она не была закрыта при И. Сталине. По красоте, величию, живописи, художественной отделке резных иконостасов эта церковь была самым лучшим (из оставшихся) памятником церковного зодчества XVIII ст. на территории Кировской области.",
          cdate: "2021-04-01",
        },
        {
          id: 2,
          p: "author02.webp",
          f: "Жаравин",
          i: "Владимир",
          image: "post02-1.webp",
          header: "Заречный парк.",
          fp:
            "3 мая 1935 года Кировский горисполком представил в край" +
            "исполком, разработанный земельно-зеленным отделом эскизный план" +
            " будущего парка. В приложении было записано: «Под парк отводится" +
            " так называемая Заречная роща с прилегающими участками лугов" +
            " на берегу реки, пляжем и лугами в сторону Дымковской слободы и" +
            " деревни Субботиха. Парк должен в полной степени использовать" +
            " красоты векового соснового леса с его многочисленными озёрами," +
            " полянами, лугами, рекой и т. д.»",
          cdate: "2021-04-01",
        },
        {
          id: 3,
          p: "author03.webp",
          f: "Бородавкин",
          i: "Антон",
          image: "pic03.webp",
          header: "Lorem ipsum dolor sit amet, consectetur.",
          fp: "Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.",
          cdate: "2021-04-01",
        },
      ],
      banners: ["banner01.webp", "banner02.webp", "banner03.webp"],
      authors: [
        {
          id: 1,
          photo: "author01.webp",
          f: "Чудиновских",
          i: "Елена",
          o: "Николаевна",
          status: "Автор статей, фотограф",
          actions: "Написание статей, поездки по области и фото.",
        },
        {
          id: 2,
          photo: "author02.webp",
          f: "Жаравин",
          i: "Владимир",
          o: "Сергеевич",
          status: "Автор статей, историк",
          actions: "Написание статей, подбор материалов и работа в архиве.",
        },
        {
          id: 3,
          photo: "author03.webp",
          f: "Бородавкин",
          i: "Антон",
          o: "Владимирович",
          status: "Автор проекта, программист",
          actions:
            "Дизайн и бэкенд, техническая реализация и содержание сайта.",
        },
      ],
      swiperOptionMain: {
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
      swiperOptionAuthors: {
        // simulateTouch: false,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        centeredSlides: true,
        loop: true,
        slidesPerView: 2,
        effect: "slide",
        speed: 500,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
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

.image {
  &.main {
    // Large devices (desktops, less than 1200px)
    @include media-breakpoint-down(lg) {
    }
    // Medium devices (tablets, less than 992px)
    @include media-breakpoint-down(md) {
    }
    // Small devices (landscape phones, less than 768px)
    @include media-breakpoint-down(sm) {
      height: 12em;
    }
    // Extra small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(xs) {
      // height: 12em;
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
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
  .swiper-slide-active.main & {
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
    // Large devices (desktops, less than 1200px)
    // @include media-breakpoint-down(lg) {
    // }
    // Medium devices (tablets, less than 992px)
    // @include media-breakpoint-down(md) {
    // }
    // Small devices (landscape phones, less than 768px)
    // @include media-breakpoint-down(sm) {
    // }
    // Extra small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(xs) {
      width: 100%;
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width

    display: inline-flex;
    display: -webkit-inline-flex;
    margin: 0 0 1.6875em 0;
    -webkit-justify-content: left;
    -webkit-align-items: center;
    justify-content: left;
    align-items: center;
    width: 50%;
    cursor: default;
    padding: 0 1em;

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
      font-size: 2em;
      padding: 0.2em;
      border: solid 0.08em transparent;
      border-radius: 100%;
      margin-right: 1em;
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
        flex-flow: column;
      }

      // No media query necessary for xl breakpoint as it has no upper bound on its width
      display: flex;
      cursor: default;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
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
          padding: 0;
          padding-bottom: 1.125em;
        }

        // No media query necessary for xl breakpoint as it has no upper bound on its width

        button {
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
            width: 100%;
          }

          // No media query necessary for xl breakpoint as it has no upper bound on its width
        }
      }
    }
  }

  .col-6 {
    // Large devices (desktops, less than 1200px)
    @include media-breakpoint-down(lg) {
    }
    // Medium devices (tablets, less than 992px)
    @include media-breakpoint-down(md) {
    }
    // Small devices (landscape phones, less than 768px)
    @include media-breakpoint-down(sm) {
      padding: 0 1em 1em 0;
    }
    // Extra small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(xs) {
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
    width: 50%;
    padding: 0 2em 2em 0;
    &:nth-child(2n) {
      // Small devices (landscape phones, less than 768px)
      @include media-breakpoint-down(sm) {
        padding: 0 0em 1em 0;
      }
      // No media query necessary for xl breakpoint as it has no upper bound on its width
      padding: 0 0 2em 0;
    }
  }

  .col-12 {
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
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
    width: 100%;
    &:not(:last-child) {
      padding: 0 0 2em 0;
    }
  }

  .col-12-xsmall {
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
      width: 100%;
      padding: 0 0 2em;
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
  }
}

.swiper-container {
  &.main-slider {
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
      height: 20em;
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
  }
  &.authors {
    // Large devices (desktops, less than 1200px)
    @include media-breakpoint-down(lg) {
    }
    // Medium devices (tablets, less than 992px)
    @include media-breakpoint-down(md) {
    }
    // Small devices (landscape phones, less than 768px)
    @include media-breakpoint-down(sm) {
      height: 18.5em;
    }
    // Extra small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(xs) {
      height: 25em;
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
    width: 100%;
    height: 20em;
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
      height: 80%;
      font-size: 0.8em;
    }
    // Extra small devices (portrait phones, less than 576px)
    @include media-breakpoint-down(xs) {
    }

    // No media query necessary for xl breakpoint as it has no upper bound on its width
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 95%;
    opacity: 0.5;
    filter: blur(3px);
    cursor: default;
    user-select: none;
    transition: opacity 0.5s ease-in-out, filter 0.5s ease-in-out;

    img {
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
        width: 80%;
      }

      // No media query necessary for xl breakpoint as it has no upper bound on its width
      width: 35%;
      border-radius: 100%;
      margin-bottom: 1.25em;
    }
    p {
      text-align: center;
      margin-bottom: 1em;
      &:not(:first-of-type) {
        font-size: 10pt;
        line-height: 1.25em;
        font-family: "Ubuntu Light Italic";
      }
    }
    &.swiper-slide-active,
    &.swiper-slide-duplicate-active {
      opacity: 1;
      filter: blur(0px);
    }
  }
}
</style>

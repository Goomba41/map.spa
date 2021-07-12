<template>
  <div class="main">
    <b-container>
      <h1>404 - not found!</h1>
      <h2>
        The page you are trying to access does not exist!<br />You will be
        redirected to
        <router-link :to="{ name: 'Home' }">home</router-link> page in
        <span class="primary">{{ currentTime }}</span> sec.
      </h2>
      <div class="column">
        <span> Or press </span>

        <b-button
          variant="primary"
          @click="history > 1 ? $router.go(-1) : $router.push('/')"
        >
          <template v-if="history > 1">Back to previous</template>
          <template v-else>Back to home</template>
        </b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Page404",
  components: {},
  mounted() {
    this.history = window.history.length;
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
      // eslint-disable-next-line no-unused-vars
      this.$router.push({ path: "/#top" }).catch((err) => {});
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
  data() {
    return {
      timer: null,
      currentTime: 30,
      history: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "@/assets/styles/variables.scss";
.main {
  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  // X-Large devices (large desktops, less than 1400px)
  @include media-breakpoint-down(xxl) {
    // height: 70vh;
  }

  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(xl) {
    // height: 48.4vh;
  }

  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(lg) {
    // height: 38.4vh;
  }

  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(md) {
    // height: 18.4vh;
  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {
    // height: 72.5vh;
  }

}

span.primary {
  color: map-get($theme-colors, primary);
}

.column {
  display: flex;
  flex-flow: column;
  width: 20%;
  align-items: center;
  margin: 3em auto 0;
  *:not(:last-child) {
    margin-bottom: 1.25em;
  }
}
</style>

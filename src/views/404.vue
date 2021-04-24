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
  @include media-breakpoint-up(sm) {
    height: 18.4vh;
  }
  @include media-breakpoint-up(md) {
    height: 38.4vh;
  }
  @include media-breakpoint-up(lg) {
    height: 48.4vh;
  }
  @include media-breakpoint-up(xl) {
    height: 78.4vh;
  }
  height: 8.4vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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

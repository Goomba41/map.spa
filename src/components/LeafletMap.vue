<template>
  <div id="map-wrapper" class="map-wrapper">
    <b-input
      type="search"
      name="map-search"
      value=""
      class="map-search"
      placeholder="Search"
      @input="searchRequest"
      @focus="searchResultToggle"
      @blur="searchResultToggle"
    />
    <div
      id="search-results"
      :class="[searchResult.active ? 'active' : '', 'search-results shadow']"
    >
      <div
        v-if="
          typeof searchResult.results !== 'undefined' &&
          searchResult.results.length > 0
        "
      >
        <div
          class="result"
          v-for="result in searchResult.results"
          :key="result"
        >
          {{ result }}
        </div>
      </div>
      <div v-else><div class="result">Ничего не найдено ಠ╭╮ಠ</div></div>
    </div>
    <l-map
      class="map shadow"
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker-cluster>
        <l-marker :lat-lng="withPopup">
          <l-popup>
            <div>
              I am a popup
              <p v-show="showParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                Donec finibus semper metus id malesuada.
              </p>
            </div>
          </l-popup>
        </l-marker>
        <l-marker :lat-lng="withPopup2">
          <l-popup>
            <div>
              I am a popup
              <p v-show="showParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                Donec finibus semper metus id malesuada.
              </p>
            </div>
          </l-popup>
        </l-marker>
      </l-marker-cluster>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
export default {
  name: "Map",
  props: {
    msg: String,
  },
  methods: {
    searchRequest(value) {
      var list = [];
      this.searchData.forEach((element) => {
        if (element.indexOf(value) !== -1) {
          list.push(element);
        }
      });
      this.searchResult.results = list;
    },
    searchResultToggle() {
      this.searchResult.active = !this.searchResult.active;
    },
  },
  data() {
    return {
      zoom: 13,
      center: latLng(58.603548647788486, 49.66802292014676),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(58.614386116848614, 49.6840178479317),
      withPopup2: latLng(58.61417899981327, 49.68506927386554),
      currentZoom: 11,
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      searchData: ["name1", "name2", "name3", "name4"],
      searchResult: { active: false, results: [] },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.map {
  width: 100%;
  height: 80vh;
}

.map-search {
  margin-bottom: 2.25em;
}

.search-results {
  visibility: hidden;
  opacity: 0;
  display: flex;
  flex-flow: column;
  position: absolute;
  background-color: map-get($other-colors, border-default);
  z-index: 1001;
  border-radius: 5px;
  margin-top: -1.75em;
  transition: all 0.2s linear;
  max-height: 3.25 * 3em;
  overflow: auto;
  width: 100%;
  &.active {
    visibility: visible;
    opacity: 1;
  }

  @include media-breakpoint-up(sm) {
    max-width: 540px;
  }
  @include media-breakpoint-up(md) {
    max-width: 720px;
  }
  @include media-breakpoint-up(lg) {
    max-width: 960px;
  }
  @include media-breakpoint-up(xl) {
    max-width: 1140px;
  }
}

.result {
  width: 100%;
  height: 3.25em;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 1rem;
  transition: background-color 0.2s linear;
  &:not(:last-child) {
    border-bottom: 1px solid darken(map-get($other-colors, border-default), 10%);
  }
  &:hover {
    background-color: lighten(map-get($other-colors, border-default), 10%);
  }
}

.result-none {
  cursor: not-allowed;
}
</style>

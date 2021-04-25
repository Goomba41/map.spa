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
      <template
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
      </template>
      <template v-else
        ><div class="result">Ничего не найдено ಠ╭╮ಠ</div></template
      >
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

#map-wrapper {
  position: relative;
  width: 100%;
}

.map {
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
    height: 60vh;
    margin-bottom: 4em;
  }

  // No media query necessary for xl breakpoint as it has no upper bound on its width
  width: 100%;
  height: 80vh;
}

.map-search {
  margin-bottom: 2.25em;
}

.search-results {
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
  // max-width: calc(100% - 4.5em);
  // width: calc(100% - 4.5em);
  &.active {
    visibility: visible;
    opacity: 1;
  }
}

.result {
  width: 100%;
  height: 3.25em;
  user-select: none;
  line-height: 1.25em;
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

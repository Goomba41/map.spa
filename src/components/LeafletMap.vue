<template>
  <div id="map-wrapper" class="map-wrapper">
    <input
      type="search"
      name="map-search"
      value=""
      class="map-search"
      placeholder="Поиск"
      autocomplete="off"
      v-model="searchInputValue"
      @input="searchRequest()"
      @focus="searchResultToggle"
      @blur="searchResultToggle"
    />
    <div
      id="search-results"
      :class="[searchResult.active ? 'open' : '', 'search-results shadow']"
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
          :key="result.id"
          @click="toMapPoint(latLng(result.lat, result.lng))"
        >
          <img
            :src="require(`../assets/images/` + result.icon)"
            :alt="result.name"
          />
          {{ result.name }}
        </div>
      </template>
      <template v-else
        ><div class="result-none">Ничего не найдено ಠ╭╮ಠ</div></template
      >
    </div>
    <l-map
      class="map shadow"
      v-if="showMap"
      :zoom="zoom"
      :maxZoom="maxZoom"
      :minZoom="minZoom"
      :center="center"
      :options="mapOptions"
      :bounds="bounds"
      :max-bounds="maxBounds"
      ref="mainMap"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-geo-json :geojson="geojson" :options-style="styleFunction" />
      <!-- <l-marker-cluster-pie
        :options="clusterOptions"
        :key-func="keyFunc"
        :class-func="classFunc"
        :title-func="titleFunc"
        :style-func="styleFunc"
        :rmax="rmax"
        @clusterclick="click()"
      > -->
      <l-marker-cluster ref="mainCluster" :options="clusterOptions">
        <l-marker
          :lat-lng="latLng(marker.lat, marker.lng)"
          v-for="marker in points"
          v-bind:key="marker.id"
        >
          <l-icon
            :icon-size="iconSize"
            :icon-anchor="iconAnchor"
            :icon-url="require(`../assets/images/` + marker.icon)"
          />
          <l-popup>
            <div class="point-image">
              <img :src="require(`../assets/images/` + marker.cover)" />
            </div>
            <div class="point-info">
              <h4>{{ marker.name }}</h4>
              <p v-show="showParagraph" class="line-clamp">
                {{ marker.description }}
              </p>
              <p>
                <router-link
                  :to="{ name: 'Object', params: { id: marker.id } }"
                >
                  Узнать подробнее...
                </router-link>
              </p>
            </div>
          </l-popup>
        </l-marker>
      </l-marker-cluster>
      <!-- </l-marker-cluster-pie> -->
    </l-map>
  </div>
</template>

<script>
import axios from "axios";
import { latLngBounds, latLng } from "leaflet";
export default {
  name: "Map",
  props: ["points"],
  methods: {
    latLng,
    searchRequest() {
      if (this.searchInputValue !== "") {
        var list = [];
        this.points.forEach((element) => {
          if (
            element.name
              .toLowerCase()
              .indexOf(this.searchInputValue.toLowerCase()) !== -1 ||
            element.description
              .toLowerCase()
              .indexOf(this.searchInputValue.toLowerCase()) !== -1
          ) {
            list.push(element);
          }
        });
        this.searchResult.results = list;
      } else {
        this.searchResult.results = [];
      }
    },
    searchResultToggle() {
      this.searchResult.active = !this.searchResult.active;
    },
    toMapPoint(coordinates) {
      var markerBounds = latLngBounds([coordinates]);
      this.$refs.mainMap.mapObject.fitBounds(markerBounds);
      this.$refs.mainCluster.mapObject.eachLayer((layer) => {
        let ct = layer.getLatLng();
        if (ct.lat === coordinates.lat && ct.lng === coordinates.lng) {
          layer.openPopup();
        }
      });
    },
    // click: function () {
    //   alert("clusterclick");
    // },
    // keyFunc(d) {
    //   return d.options.marker_data[this.iconStyleField];
    // },
    // classFunc(d) {
    //   return "cluster-marker-segment-color_" + d.data.key;
    // },
    // titleFunc(d) {
    //   return `count: ${d.data.values.length}`;
    // },
    // styleFunc(d) {
    //   const color = this.colorMap[d.data.key];
    //   return `
    //     fill: ${color};
    //     stroke: #444;
    //     background: ${color};
    //     border-color: #444;
    //   `;
    // },
  },
  data() {
    return {
      searchInputValue: "",
      geojson: null,
      borderColor: "#4acaa7",
      fillColor: "#4acaa7",
      maxZoom: 18,
      minZoom: 6.5,
      center: latLng(58.603548647788486, 49.66802292014676),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      iconSize: [40, 40],
      iconAnchor: [22, 0],
      bounds: latLngBounds([
        [56.0607618, 46.2637837],
        [61.0673929, 53.9300112],
      ]),
      maxBounds: latLngBounds([
        [56.0607618, 46.2637837],
        [61.0673929, 53.9300112],
      ]),
      zoom: 9,
      showParagraph: true,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      searchResult: { active: false, results: [] },
      clusterOptions: {
        showCoverageOnHover: false,
        removeOutsideVisibleBounds: false,
      },
      // rmax: 35,
      // iconStyleField: "style_field",
      // colorMap: {
      //   0: "black",
      //   1: "#F00000",
      //   2: "#FF0000",
      //   3: "#FFF000",
      //   4: "#FFFF00",
      //   5: "#FFFFF0",
      //   6: "#FFFFFF",
      //   7: "#0FFFFF",
      //   8: "#00FFFF",
      //   9: "#000FFF",
      //   10: "#0000FF",
      // },
    };
  },
  computed: {
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      const borderColor = this.borderColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 4,
          color: borderColor,
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 0.1,
        };
      };
    },
  },
  async created() {
    axios
      .get(
        "https://nominatim.openstreetmap.org/reverse?format=geojson&osm_id=115100&osm_type=R&polygon_geojson=1"
      )
      .then((response) => (this.geojson = response.data));
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
  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  width: 100%;
  height: 80vh;

  // X-Large devices (large desktops, less than 1400px)
  @include media-breakpoint-down(xxl) {
  }

  // Large devices (desktops, less than 1200px)
  @include media-breakpoint-down(xl) {
  }

  // Medium devices (tablets, less than 992px)
  @include media-breakpoint-down(lg) {
    margin-bottom: 3.25rem;
  }

  // Small devices (landscape phones, less than 768px)
  @include media-breakpoint-down(md) {
    height: 60vh;
  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {
  }
}

.map-search {
  margin-bottom: 2.25em;
}

.search-results {
  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
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
  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {
  }

  &.open {
    visibility: visible;
    opacity: 1;
  }

  .result,
  .result-none {
    width: 100%;
    height: 3.25em;
    user-select: none;
    line-height: 1.25em;
    padding: 1rem;
    transition: background-color 0.2s linear;
    &:not(:last-child) {
      border-bottom: 1px solid
        darken(map-get($other-colors, border-default), 10%);
    }
  }

  .result-none {
    cursor: not-allowed;
  }

  .result {
    display: flex;
    align-items: center;

    img {
      height: 100%;
      margin-right: 1em;
    }

    &:hover {
      background-color: lighten(map-get($other-colors, border-default), 10%);
    }
  }
}

.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
  // XX-Large devices (larger desktops)
  // No media query since the xxl breakpoint has no upper bound on its width
  border-radius: 5px;

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
  }

  // X-Small devices (portrait phones, less than 576px)
  @include media-breakpoint-down(sm) {
  }

  .leaflet-popup-content {
    margin: 0;
    display: flex;
  }

  .point-info {
    font-size: 0.9rem;
    color: map-get($other-colors, text-default);
    p {
      font-size: 0.7rem;
      margin: 1rem 0;
      &.line-clamp {
        @include shorten-text(4, 1.5em);
      }
    }
    img {
      width: 100%;
    }
    a {
      color: map-get($other-colors, text-default);
      &:hover {
        color: map-get($theme-colors, primary);
      }
    }
  }
}
</style>

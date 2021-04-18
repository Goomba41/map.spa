<template>
  <div id="map-wrapper" class="map-wrapper">
    <b-input
      type="search"
      name="map-search"
      value=""
      class="map-search"
      placeholder="Search"
    />
    <div id="results-wrapper" class="results-wrapper shadow">
      <div id="results" class="results">
        <div class="result-none">Ничего не найдено ಠ╭╮ಠ</div>
      </div>
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "@/assets/styles/variables.scss"; */

.map {
  width: 100%;
  height: 80vh;
}

.results-wrapper {
  visibility: hidden;
  opacity: 0;
  display: flex;
  position: absolute;
  background-color: #f0f4f4;
  width: 1400px;
  z-index: 1000;
  border-radius: 5px;
  margin-top: 0.5rem;
  border-top: 1px solid #e0e0e0;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.results {
  display: flex;
  flex-flow: column;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.result-none {
  display: flex;
  flex-flow: row;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  padding: 1rem;
  cursor: not-allowed;
}

.result:first-child,
.result-none {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.result:last-child,
.result-none {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>

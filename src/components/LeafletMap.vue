<template>
  <div class="hello">
    <div style="height: 500px; width: 100%">
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 80%"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker-cluster>
          <l-marker :lat-lng="withPopup">
            <l-popup>
              <div>
                I am a popup
                <p v-show="showParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                  sollicitudin nisi. Donec finibus semper metus id malesuada.
                </p>
              </div>
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="withPopup2">
            <l-popup>
              <div>
                I am a popup
                <p v-show="showParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                  sollicitudin nisi. Donec finibus semper metus id malesuada.
                </p>
              </div>
            </l-popup>
          </l-marker>
        </l-marker-cluster>
      </l-map>
    </div>
  </div>
</template>

<script>
import { latLng } from "leaflet";
export default {
  name: "HelloWorld",
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
@import "@/assets/styles/variables.scss";
</style>

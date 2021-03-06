import Vue from "vue";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LGeoJson,
  LIcon,
} from "vue2-leaflet";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
// import Vue2LeafletMarkerClusterPie from "vue2-leaflet-markercluster-pie";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-geo-json", LGeoJson);
Vue.component("l-popup", LPopup);
Vue.component("l-icon", LIcon);
Vue.component("l-marker-cluster", Vue2LeafletMarkerCluster);
// Vue.component("l-marker-cluster-pie", Vue2LeafletMarkerClusterPie);

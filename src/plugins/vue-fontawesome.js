import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faVk, faHeart);

Vue.component("font-awesome-icon", FontAwesomeIcon);

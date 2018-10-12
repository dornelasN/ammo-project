// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import router from "@/router";
import store from "@/store";

import "./config";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch, faTimesCircle);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import BootstrapVue from "bootstrap-vue";

// import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/styles/bootstrap.scss";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

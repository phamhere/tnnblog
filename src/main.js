import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

import App from "./App.vue";
import Routes from "./routes";

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

// Directives
Vue.directive("rainbow", {
  bind(el) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value === "narrow") {
      el.style.maxWidth = "560px";
    }
    if (binding.arg === "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

// Filters
Vue.filter("to-uppercase", value => {
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");

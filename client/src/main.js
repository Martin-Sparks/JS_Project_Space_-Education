import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

export const eventBus = new Vue();

Vue.filter('format_km', function (value) {
  if (!value) { return "0 kilometers"; }
  return (value / 1000000).toString() + " million kilometers";
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");

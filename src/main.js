import Vue from 'vue'
import App from './App.vue'
import VueFlags from "@growthbunker/vueflags";

Vue.config.productionTip = false;
Vue.use(VueFlags);

new Vue({
  render: h => h(App),
}).$mount('#app')

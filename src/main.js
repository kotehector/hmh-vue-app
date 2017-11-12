// VueJs Core
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from "./router";

// External
import Velocity from "velocity-animate";

// GLOBAL COMPONENTS
import intro from './components/intro.vue';
import social from './components/social.vue';


// Register Global Components
Vue.component('intro', intro);
Vue.component('social', social);
Vue.use(VueRouter);

// Root APP
new Vue({
	router,
	el: '#app',
  render: h => h(App)
}).$mount('#app')


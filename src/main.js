// VueJs Core
import Vue from 'vue';
import App from './App.vue';

// External
import Velocity from "velocity-animate";

// GLOBAL COMPONENTS
import intro from './components/intro.vue';
import social from './components/social.vue';

// Register Global Components
Vue.component('intro', intro);
Vue.component('social', social);

// Root APP
new Vue({
	components: { 
		intro,
		social
	},
	el: '#app',
  render: h => h(App)
})

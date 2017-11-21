// VueJs Core
import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import firebaseui from "firebaseui";

import App from './App.vue';
import router from "./router";
import config from "./helpers/firebase-config";

// External
import Velocity from "velocity-animate";

// GLOBAL COMPONENTS
import intro from './components/intro.vue';
import social from './components/social.vue';

// Register Global Components
// Vue.component('intro', intro);
// Vue.component('social', social);
Vue.use(VueRouter);

// Root APP
new Vue({
	router,
	created() {
		firebase.initializeApp(config);
		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.$router.push('/auth-success')
			} else {
				this.$router.push('/login')
			}
		});
	},
	el: '#app',
  render: h => h(App)
}).$mount('#app')


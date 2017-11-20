import VueRouter from "vue-router";

import auth from './components/auth.vue';
import authSuccess from './components/auth-success.vue';
import home from './home/home.vue';

const routes = [{
  mode: 'history',
	path: '/',
	component: home
},{
	path: '/auth',
	component: auth
},{
	path: '/auth-success',
	component: authSuccess
}]

const router = new VueRouter({
	routes
})
export default router;

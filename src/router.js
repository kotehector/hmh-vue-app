import VueRouter from "vue-router";

import auth from './app/login/auth.vue';
import authSuccess from './app/login/auth-success.vue';
import home from './app/home/home.vue';

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

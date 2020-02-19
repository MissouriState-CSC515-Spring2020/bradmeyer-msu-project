import Vue from 'vue';
import VueRouter from 'vue-router';
import Recent from '../views/Recent.vue';
import Category from '../views/Category.vue';
import PhotoDetails from '../views/PhotoDetails.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Recent',
		component: Recent
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/category',
		name: 'Category',
		component: Category
	},
	{
		path: '/photodetails',
		name: 'PhotoDetails',
		component: PhotoDetails
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;

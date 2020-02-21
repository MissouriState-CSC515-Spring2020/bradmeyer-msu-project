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
		component: Recent,
		meta: {
			title: 'Brad\'s Recent Photos'
		}
	},
	{
		path: '/category',
		name: 'Category',
		component: Category,
		meta: {
			title: 'Category: Buildings'
		}
	},
	{
		path: '/photodetails',
		name: 'PhotoDetails',
		component: PhotoDetails,
		meta: {
			title: 'Photo Details'
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
	// Use next tick to handle router history correctly
	// see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
	Vue.nextTick(() => {
		document.title = to.meta.title || 'Photo App Project';
	});
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
const Recent = () => import('../views/Recent.vue');
const Playlist = () => import('../views/Playlist.vue');
const VideoDetails = () => import('../views/VideoDetails.vue');

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Recent',
		component: Recent,
		meta: {
			title: 'Recent Videos'
		}
	},
	{
		path: '/playlist',
		name: 'Playlist',
		component: Playlist,
		props: true,
		meta: {
			title: 'Playlist'
		}
	},
	{
		path: '/videodetails',
		name: 'VideoDetails',
		component: VideoDetails,
		props: true,
		meta: {
			title: 'Video Details'
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
		document.title = to.meta.title || 'Video App Project';
	});
});

export default router;

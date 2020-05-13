import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import 'materialize-css/dist/css/materialize.css';

Vue.config.productionTip = false;

Vue.prototype.$apiKey = 'AIzaSyBgJ9iFaO-Nea2h-11zox562hHgXR0x0gc';

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

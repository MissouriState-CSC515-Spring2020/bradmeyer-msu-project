import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css';
//import 'materialize-css/dist/js/materialize.js';

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

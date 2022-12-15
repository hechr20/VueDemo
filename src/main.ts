import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index';
import  store  from './store/index';
import vuetify from './plugins/vuetify';
import VueDraggable from "vue-draggable";

import { configureVirtuelBackend } from './services/VirtuelBackend';

Vue.config.productionTip = true;

Vue.use(VueDraggable)
configureVirtuelBackend();

new Vue({
    store,
    vuetify,
    router: router,
    render: h => h(App)
}).$mount('#app');

import Vue from 'vue';
// eslint-disable-next-line no-unused-vars,import/extensions
import bulma from 'bulma';
// eslint-disable-next-line no-unused-vars,import/no-extraneous-dependencies
import fontawesome from '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

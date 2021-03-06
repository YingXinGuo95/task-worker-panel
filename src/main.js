import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.config.productionTip = false

Vue.prototype.$axios = axios

//axios.defaults.baseURL = 'http://localhost:80'
axios.defaults.baseURL = ''

let vue = new Vue({
  render: h => h(App),
}).$mount('#app')


export default vue;
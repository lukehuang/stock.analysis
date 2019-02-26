import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 样式文件需要单独引入
import axios from 'axios';
import moment from 'moment';

import App from './App';
import router from './router';
import db from './store/db';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'mini' });

Vue.prototype.$db = db;

moment.locale('zh-cn');
Vue.prototype.$moment = moment;

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    template: '<App/>'
}).$mount('#app');

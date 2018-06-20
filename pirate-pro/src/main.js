// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import VueI18n from 'vue-i18n'
import initCss from './components/css/init.css'
import LangEn from './i18n/lang/en'
import LangZhCH from './i18n/lang/zhCH'
import LangZhHK from './i18n/lang/zhHK'
import axios from 'axios'
import service from "./util/service"
import configData from "./util/configData"
import bigPopup from './components/template/common/bigpopup/index.js'
import smallPopup from './components/template/common/smallPopup/index.js'




Vue.prototype.configData = configData;
Vue.prototype.service = service ;


Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(bigPopup)
Vue.use(smallPopup)


const i18n = new VueI18n({
  locale: store.state.locale ,
  messages: {  
    'en': LangEn,
    'zh-ch': LangZhCH,
    'zh-hk': LangZhHK
  }
})

window.i18n = i18n 
window.axios = axios




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})


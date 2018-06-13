import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LangEn from './lang/en'
import LangZhCH from './lang/zhCH'
import LangZhHK from './lang/zhHK'

Vue.use(VueI18n)



const messages = {
  en: {
    message: LangEn
  },
  zh-ch: {
    message: LangZhCH
  },
  zh-hk: {
  	message: LangZhHK
  }
}

export default messages
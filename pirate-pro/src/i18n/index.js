import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LangEn from './lang/en'
import LangZhCH from './lang/zhCH'
import LangZhHK from './lang/zhHK'
/*import Langko from './lang/korea'
import Langja from './lang/japan'
import Langru from './lang/russion'*/

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
  },
  /*ko: {
  	message: Langko
  },
  ja: {
  	message: Langja
  },
  ru: {
  	message: Langru
  }*/
}

export default messages
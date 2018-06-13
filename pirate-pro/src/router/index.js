import Vue from 'vue'
import Router from 'vue-router'
import Presale from '@/components/template/Presale'
import Introduction from '@/components/template/Introduction'


Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'HomePage',  
		component:Presale
    },
    {
		path: '/presale',
    	name: 'presale',
    	component:Presale
    },
    {
		path: '/introduction',
    	name: 'introduction',
    	component:Introduction
    }
  ]
})

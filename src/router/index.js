import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../pages/Recommend/Recommend.vue'
import Singer from '../pages/Singer/Singer.vue'
import Rank from '../pages/Rank/Rank.vue'
import Search from '../pages/Search/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/recommend',
    	component: Recommend
    },
    {
    	path: '/singer',
    	component: Singer
    },
    {
    	path: '/rank',
    	component: Rank
    },
    {
    	path: '/search',
    	component: Search
    },
    {
    	path: '/',
    	redirect: '/recommend'
    }
  ]
})

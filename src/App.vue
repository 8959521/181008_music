<template>
  <div>
    	<Header />
    	<Tab />
    	<keep-alive>
    		<router-view></router-view>
    	</keep-alive>
    	
  </div>
</template>

<script>
import Header from './components/m-header/m-header.vue'
import Tab from './components/Tab/Tab.vue'
export default {
  name: 'App',
  components: {
  	Header,
  	Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "./common/stylus/variable"
	.nav
		margin: 0 20px
</style>

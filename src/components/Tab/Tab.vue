<template>
	<div class="tab">
    		<router-link tag="div" class="tab-item"  to="/recommend">
    			<span class="tab-content">推荐</span>	
    		</router-link>
    		<router-link tag="div" class="tab-item"  to="/singer">
    			<span class="tab-content">歌手</span>
    		</router-link>
    		<router-link tag="div" class="tab-item"  to="/rank">
    			<span class="tab-content">排行</span>
    		</router-link>
    		<router-link tag="div" class="tab-item"  to="/search">
    			<span class="tab-content">搜索</span>
    		</router-link>
    </div>
</template>

<script>
</script>

<style lang="stylus" ref="stylesheet/stylus">
@import "../../common/stylus/variable"
	.tab
		display flex
		height 44px
		line-height 44px
		font-size $font-size-medium
		.tab-item
			flex 1
			text-align center
			.tab-content
				color $color-text-l
				padding-bottom 5px
			&.router-link-active
				.tab-content
					color $color-theme
					border-bottom: 2px solid $color-theme
</style>
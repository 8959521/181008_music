<template>
	<div class="recommend" ref="recommend">
	<div class="scroll-content" ref="scrollContent">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(image, index) in images">
					<a :href="image.linkUrl">
						<img width="100%" height="100%" :src="image.picUrl" alt="" />
					</a>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<h1 class="h_tuijian">热门歌单推荐</h1>
		<ul>
			<li class="li_item" v-for="(hot, index) in hotList">
				<img class="icon" width="80" height="80" v-lazy="hot.picUrl" alt="" />
				<div class="text">
					<h1 class="name">{{hot.songListAuthor}}</h1>
					<p class="desc">{{hot.songListDesc}}</p>
				</div>
			</li>
		</ul>
		<div class="loading" v-if="!hotList.length"> 
			<Loading/><!--//位置别放错了-->
		</div>
		
	</div>
	
</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import BScroll from 'better-scroll'
	import Loading from '../../base/Loading/Loading.vue'
	import { getRecommend } from '../../api/recommend.js'
	export default {
	data() {
		return {
			images: [],
			hotList: []
		}
	},
	created() {
		this._getRecommend()
	},
	mounted() {
		
//		window.addEventListener('resize', () => {
//			if(!this.myswpier) {
//				return
//			}
//			this.myswiper.update()
//		})//视口问题，待解决
	},
	methods: {
		_getRecommend() {
			getRecommend().then((res) => {
				if(res.code === 0) {
					this.images = res.data.slider
					this.hotList = res.data.songList
					console.log(res.data)
				}
			})
		},
		_initSwiper() {
			this.$nextTick(() => {			
				this.myswiper = new Swiper('.swiper-container', {
					width: undefined,
					height: undefined,
					preloadImages: true,
					autoplay: {
					disableOnInteraction: false
					},
          			loop: true,
          			pagination: {
     					el: '.swiper-pagination',
    				},
				})	
					//new Swiper('.swiper-container')			
			})
		},
		_initBS() {//计算高度得理解
			const outer = this.$refs.recommend
  			const item = 110
  			const space = 5
  			const count = this.images.length
  			outer.style.height = (item + space) * count - space + 'px'
			new BScroll(this.$refs.recommend, {
				//click: true
			})
		},
//		_initH() {
//			var outHeight = this.$refs.recommend
//			var innerHeight = this.$refs.scrollContent.clientHeight
//			outHeight.style.height = outHeight.clientHeight-innerHeight
//		}//有时间要学会计算各种高度
	},
	watch: { //不要用mounted初始化switer，是是一个坑！
		images(value) {
				this._initSwiper()
			},
		hotList(value) {
			
			this.$nextTick(() => {
				this._initBS()
			})
		}
	},
	components: {
		Loading
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/variable"
	.recommend
		position relative 
		overflow hidden
		.swiper-container
			width 100%
			height 100%
			.swiper-wrapper
				width 100%
				height 100%
				.swiper-slide
					display flex
					justify-content center
					align-items flex-start
					flex-wrap wrap	
		.h_tuijian
			height 65px
			line-height 65px
			text-align center
			font-size $font-size-medium
			color $color-theme
		.li_item
			display flex
			padding 0px 20px 20px 20px
			.icon
				padding-right 20px
			.text
				display flex
				flex-direction column
				justify-content center
				.name
					padding-bottom 15px
					color $color-text
				.desc
					color $color-text-d
			
</style>
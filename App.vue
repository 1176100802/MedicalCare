<script>
	export default {
		globalData: {},
		onLaunch: function() {
			console.log('App Launch');
			uni.getSystemInfo({ //设置屏幕高度
				success: res => {
					//减去tabbar的高度，默认为50px
					// this.globalData.screenHeight = res.screenHeight - 50;
					this.$store.commit('setGlobalHeight', res.screenHeight - 50)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onLoad() {
			uni.loadFontFace({
			  family: 'kaiti',
			  source: 'url("https://gitee.com/cqs1/fonts/blob/master/fudan.ttf")',
			  success() {
			      console.log('success')
			  }
			})
			uni.loadFontFace({
			  family: 'fudan',
			  source: 'url("https://gitee.com/cqs1/fonts/blob/master/fudan.ttf")',
			  success() {
			      console.log('success')
			  }
			  
			})
			
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
	

	
	
	// @font-face {
	// 	font-family: "kaiti";
	// 	src: url("~@/static/font/kaiti.TTF") format('truetype');
	// }
	
	
	
</style>

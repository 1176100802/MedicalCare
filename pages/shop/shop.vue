<template>
	<view>
		<view class="top">
			<img src="/static/top.png" :style="'filter:opacity('+opacity+'%);height:100%;width:100%;'" alt="">
		</view>
		<!-- <view class="searchBar" :style="'top:'+Math.min(top,20)+'rpx;background-color:rgba(255,255,255,'+color+');'"> -->
		<view class="searchBar" :style="'top:'+Math.min(top,20)+'rpx'">
			<view class="searchInput" :style="'width:'+width+'%'">
				<u-search bgColor="#ffffff" inputAlign="center" height="45px" shape="round" :showAction="false"
					borderColor="rgb(255,255,0)">
				</u-search>
			</view>
		</view>
		<view class="info" :style="'height:'+screenHeight+'px;'">
			<view class="u-demo-block__content">
				<u-tabs :list="list4" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`"
					:activeStyle="{
						color: '#303133',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}" :inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
					}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @click="click">
				</u-tabs>
			</view>
			<view class="goods">
				<goods-list @goodsItemClick="goGoodsDetail()" :goods="goods"></goods-list>
			</view>
		</view>

	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	const lineBg =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";

	export default {
		data() {
			return {
				screenHeight: 0,
				top: 0,
				color: 0,
				opacity: 100,
				width: 80,
				defaults: 0,
				speed: 0,
				high: 0,
				lineBg,
				goods: [],
				pageindex: 1,
				list4: [{
					name: '中西药品'
				}, {
					name: '感冒用药',
				}, {
					name: '止痛消炎',
				}, {
					name: '止咳平喘'
				}, {
					name: '维矿补充'
				}, {
					name: '腹泻通便'
				}],
			}
		},
		components: {
			"goods-list": goodsList
		},
		methods: {
			click(item) {
				console.log('item', item);
			},
			async getGoodsList(callback) {
				// const res = await this.$myRequest({
				// 	url: '/api/getgoods?pageindex=' + this.pageindex
				// })
				// this.goods = [...this.goods, ...res.data.message]
				// callback && callback()
				this.goods = [{
					"img_url": "/static/medicine.png",
					"title": "medicine1",
					"sell_price": "10000",
					"market_price": "20000",
					"id": "1"
				}, {
					"img_url": "/static/medicine.png",
					"title": "medicine1",
					"sell_price": "10000",
					"market_price": "20000",
					"id": "2"
				}, {
					"img_url": "/static/medicine.png",
					"title": "medicine1",
					"sell_price": "10000",
					"market_price": "20000",
					"id": "3"
				}, {
					"img_url": "/static/medicine.png",
					"title": "medicine1",
					"sell_price": "10000",
					"market_price": "20000"
				}]

			},
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			}
		},
		onPageScroll(e) {
			const defaults = this.defaults
			if (e.scrollTop < this.high) {
				this.top = defaults - (e.scrollTop * (this.speed + 0.5));
				this.opacity = 100 - (e.scrollTop * this.speed);
				this.width = 80 - (e.scrollTop * 0.2)
				this.color = (e.scrollTop * 2) / 100
			}

		},
		onLoad() {
			this.screenHeight = this.$store.state.globalHeight
			// #ifdef MP-WEIXIN
			this.top = 150
			this.defaults = this.top
			this.speed = 1
			this.high = 100
			console.log("WEIXIN")
			// #endif

			// #ifdef H5
			this.top = 220
			this.defaults = this.top
			this.speed = 2
			this.high = 60
			console.log("H5")
			// #endif
			this.getGoodsList()

		},
		onReachBottom() {

			if (this.goods.length < this.pageindex * 10) return this.flag = true
			this.pageindex++
			this.getGoodsList()
		},
		// onPullDownRefresh() {
		// 	this.pageindex=1
		// 	this.goods=[]
		// 	this.flag=false
		// 	setTimeout(()=>{
		// 		this.getGoodsList(()=>{
		// 			uni.stopPullDownRefresh()
		// 		})
		// 	},1000)
		// }

	}
</script>

<style lang="scss">
	.top {
		z-index: 1;
		height: 100px;
		width: 100%;
		text-align: center;
		line-height: 70px;
	}

	.searchBar {
		z-index: 999;
		width: 100%;
		height: 45px;
		position: absolute;
		display: flex;
		position: fixed;

		.searchInput {
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
		}
	}

	.info {
		margin-top: 20rpx;
	}

	.u-page {
		padding-bottom: 500px;
	}
</style>

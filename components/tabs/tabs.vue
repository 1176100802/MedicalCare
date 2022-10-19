<template>
	<view class="uni-tab-bar">
		<view class="scrollClass" v-for="(tab,index) in tabBars" :key="tab.id" :style="scrollStyle">
			<view class="swiper-tab-list" :class="{'active' : tabIndex==index}" @tap="tabtap(index)"
				:style="scrollItemStyle">
				{{tab.name}} {{tab.num?tab.num:""}}
				<view class="swiper-tab-line"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number,
			scrollStyle: {
				type: String,
				default: ""
			},
			scrollItemStyle: {
				type: String,
				default: ""
			}
		},
		methods: {
			//点击切换导航
			tabtap(index) {
				// this.tabIndex = index;
				this.$emit('tabtap', index)
			}
		}
	}
</script>

<style scoped>
	.uni-swiper-tab {
		border-bottom: 6rpx solid #EEEEEE;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.scrollClass {
		display: inline-block;
		width: 200rpx;
	}

	.swiper-tab-list {
		display: inline-block;
		color: #969696;
		font-weight: bold;
		width: 200rpx;
		text-align: center;
	}

	.uni-tab-bar {
		height: 90rpx;
		line-height: 80rpx;
		display: flex;
		justify-content: space-around;
	}

	.uni-tab-bar .active {
		color: #343434;
	}

	.active .swiper-tab-line {
		border-bottom: 10rpx solid red;
		margin: auto;
	}
</style>

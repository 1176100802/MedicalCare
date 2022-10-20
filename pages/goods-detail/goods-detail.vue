<template>
	<view>
		<view class="swiperImg">
			<swiper indicator-dots current='0' @change="swiperChange">
				<swiper-item v-for="(item,index) in list6" :key="index" @click="click">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="info">
			<view class="pricecard">
				<view class="yellowbord" style="width: 60%;border-bottom: 100rpx solid rgb(255, 207, 0);
				border-right: 15px solid transparent;">
				</view>

				<text style="color: black;line-height: 100rpx;margin-left: -60%;font-size: 40rpx;">￥500</text>
				<text
					style="color: black;line-height: 100rpx;margin-left: 5%;font-size: 25rpx;text-decoration: line-through;">￥1000</text>
				<text style="color: rgb(255,207,0);line-height: 100rpx;margin-left: 30%;font-size: 35rpx;">折扣优惠5折</text>
			</view>

			<view class="name">
				<text>名称：namename</text>
			</view>
			<view class="goods_nav">
				<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
					@buttonClick="buttonClick" />
			</view>
		</view>
		<u-popup :show="show" mode="bottom" @close="close" @open="open" >
			<view style="height: 100rpx;margin: 0 auto;padding-top: 50rpx;">
				<u-number-box v-model="value" @change="valChange" ></u-number-box>
			</view>
			<view style="width: 50%;margin: 0 auto;margin-bottom: 10rpx;">
				<u-button text="购买" type="primary" shape="circle" @click="send"></u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				id: 0,
				currentNum: 0,
				value: 0,
				list6: [
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				options: [{
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			swiperChange(event) {
				console.log(event)
				this.currentNum = event.detail.current
			},

			click() {
				// //准备一个装图片路径的  数组imgs
				// let imgs = this.photos.map(item => {
				// 	//只返回图片路径
				// 	return item.pics_big_url
				// })

				uni.previewImage({
					urls: this.list6,
					current: this.currentNum
				})
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				if (e.index == 1) {
					this.show = true
				}
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},

			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			send(){
				uni.redirectTo({
					url:"/pages/paypage/paypage"
				})
			}


		},
		onLoad(options) {
			this.id = options.id

		}
	}
</script>

<style lang="scss">
	image {
		width: 750rpx;
		height: 700rpx;
	}

	swiper {
		width: 100%;
		height: 700rpx;

	}

	.info {

		.pricecard {
			width: 90%;
			margin-left: 5%;
			margin-top: 50rpx;
			height: 100rpx;
			background-color: black;

			display: flex;
		}

		.name {
			margin-top: 50rpx;
			margin-left: 5%;
		}
	}

	.goods_nav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>

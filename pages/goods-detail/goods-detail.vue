<template>
	<view>
		<view class="swiperImg">
			<swiper indicator-dots current='0' @change="swiperChange">
				<swiper-item v-for="(item,index) in goodsInfo.gphoto" :key="index" @click="click">
					<image :src="'http://'+item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="info">
			<view class="pricecard">
				<view class="yellowbord" style="width: 60%;border-bottom: 100rpx solid rgb(255, 207, 0);
				border-right: 15px solid transparent;">
				</view>

				<text style="color: black;line-height: 100rpx;margin-left: -60%;font-size: 40rpx;">￥{{goodsInfo.gSalePrice}}</text>
				<text
					style="color: black;line-height: 100rpx;margin-left: 2%;font-size: 25rpx;text-decoration: line-through;">￥{{goodsInfo.gprice}}</text>
				<text style="color: rgb(255,207,0);line-height: 100rpx;margin-left: 42%;font-size: 35rpx;">折扣优惠{{sale}}折</text>
			</view>

			<view class="name">
				<text>商品名称：{{goodsInfo.gname}}</text>
			</view>
			<view class="gnum">
				<text>商品库存：{{goodsInfo.gnumber}}</text>
			</view>
			<view class="inf">
				<text>商品信息：{{goodsInfo.ginfo}}</text>
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
		<!-- 	<view style="width: 50%;margin: 0 auto;margin-bottom: 10rpx;">
				<u-button text="购买" type="primary" shape="circle" @click="send"></u-button>
			</view> -->
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
					'/static/pic1.jpg'
				],
				options: [],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					}
				],
				sale:0,
				goodsInfo:{}
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
			},
			async getGoodsInfo(){
				const res = await this.$myRequest({
					url: '8021/goods/find/'+this.id,
					method: 'POST'
				})
				this.goodsInfo=res.data.data
				this.goodsInfo.gphoto=[this.goodsInfo.gphoto]
				this.sale=parseInt(goodsInfo.gSalePrice/goodsInfo.gprice*10)
				console.log(this.goodsInfo)
			}


		},
		onLoad(options) {
			
			this.id = options.id
			this.getGoodsInfo()
				
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
		.inf {
			margin-top: 50rpx;
			margin-left: 5%;
		}
		.gnum {
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

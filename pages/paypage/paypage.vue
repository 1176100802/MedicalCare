<template>
	<view :style="'height:'+screenHeight+'px;background-color:#eee;'">

		<view class="top" style="">
			订单状态<{{state}}>
		</view>
		<view class="swiperCard">
			<swiper current='0' @change="swiperChange">
				<swiper-item v-for="(item,index) in list" :key="index" @click="click">
					<view style="display: flex;align-items: center;height: 100%;width: 100%;">
						<view class="imgGoods" style="height: 90%;width: 50%;margin-left: 4%;margin-top: 2.5%;">
							<img src="../../static/list.png" alt="">
						</view>
						<view class="info">
							<text
								style="width: 100%;height: 50%;line-height: 170rpx;overflow: hidden;display: inline-block;text-overflow:ellipsis;font-size:40rpx;">{{item.title}}</text>
							<text
								style="width: 30%;height: 50%;line-height: 130rpx;display: inline-block;font-size:30rpx ;">{{item.num}}件</text>
							<text
								style="width: 70%;height: 50%;line-height: 130rpx;display: inline-block;font-size:35rpx ;color: red;">{{item.price}}元</text>
						</view>
					</view>

				</swiper-item>
			</swiper>
		</view>
		<view class="step">
			<view>
				<u-steps :current="current1" direction="column">
					<u-steps-item title="已下单" desc="10:30">
					</u-steps-item>
					<u-steps-item title="已支付" desc="10:35">
					</u-steps-item>
					<u-steps-item title="已完成" desc="11:40">
					</u-steps-item>
				</u-steps>
			</view>
		</view>
		<view class="sumInfo">
			<text>订单编号:{{id}}</text>
			<text>订单时间:{{id}}</text>
			<text>订单总价:{{sum}}</text>
		</view>
		
		<view class="bottomButton" >
			<u-button text="支付" size="large"></u-button>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current1: 2,
				screenHeight: 0,
				"state": "未支付",
				"id": 123456789,
				"sum": 100000,
				list: [{
					"title": "tttttttttttttttttttttttttttttt",
					"price": 1000,
					"num": 100
				},
				{
					"title": "22tttttttttttttttttttttttttttttt",
					"price": 12000,
					"num": 1200
				}]
			}
		},
		methods: {
			swiperChange(event) {
				console.log(event)
				this.currentNum = event.detail.current
			},
			click() {
				// uni.navigateTo({
				// 	url:
				// })
			}

		},
		onLoad() {
			this.screenHeight = this.$store.state.globalHeight
		}
	}
</script>

<style lang="scss">
	img {
		width: 100%;
		height: 100%;
	}

	.info {
		width: 50%;
		height: 100%;
		padding-left: 3%;
		padding-right: 3%;

	}

	.top {
		height: 400rpx;
		width: 100%;
		background-color: rgb(235, 106, 45);
		color: white;
		font-size: 50rpx;
		text-align: center;
		line-height: 300rpx;
		z-index: 1;
	}

	.swiperCard {
		z-index: 999;

		width: 90%;
		height: 300rpx;

		margin-left: 5%;
		margin-top: -150rpx;

	}

	swiper {
		background-color: white;
		border-radius: 20rpx;
		width: 100%;
		height: 100%;

	}

	.sumInfo {
		width: 100%;
		background-color: white;
		padding-left: 10%;
		margin-top: 30rpx;
		font-size: 45rpx;

		text {
			display: inline-block;
			width: 100%;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
		}
	}

	.step {
		width: 100%;
		background-color: white;
		padding-left: 10%;
		margin-top: 30rpx;
		margin-bottom: 20rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.bottomButton{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>

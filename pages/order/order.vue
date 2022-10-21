<template>
	<view style="background-color: rgb(222,225,230);">
		<view :style="'height:'+screenHeight+'px;background-color: rgb(222,225,230);width:100%;position: absolute;top:0;left:0;z-index:-1;'"></view>
		<u-sticky bgColor="#ffffff">
			<u-tabs :list="list1" @click="click"></u-tabs>
		</u-sticky>
		<view >
			<view v-for="item,index in test" style="width: 90%;height: 520rpx;margin-left: 5%;background-color: white;border-radius: 20rpx;">
				<view class="topBar"
					style="width: 100%;height: 100rpx;line-height: 100rpx;margin-top: 20rpx;">
					<text style="display: inline-block;margin-left: 10%;">ID:{{item.id}}</text>
					<text style="display: inline-block;margin-left: 50%;">{{item.state}}</text>
				</view>
				<view class="imgs" style="width: 100%;height: 200rpx;margin-top: 20rpx;">
					<u-scroll-list indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c" @right="right" @left="left">
						<view class="scroll-list" style="flex-direction: row;">
							<view class="scroll-list__goods-item" v-for="(item, index) in goodsArr" :key="index"
								:class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']" style="margin-left: 20rpx;">
								<image  class="scroll-list__goods-item__image" :src="goodsBaseUrl + item.thumbnail"
									mode=""></image>
								<text class="scroll-list__goods-item__text">￥{{ item.price }}</text>
							</view>
							
						</view>
					</u-scroll-list>
				</view>

				<view style="height:100rpx ;width: 100%;line-height: 100rpx;">
					<text style="display: inline-block;margin-left: 10%;">创建时间:2022-01-01</text>
					<text style="display: inline-block;margin-left: 10%;">总价:3200</text>
				</view>
				
				<view style="width: 30%;height: 100rpx;margin-left:60%;">
					<u-button text="查看"  ></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight: 0,
				goodsBaseUrl: 'https://cdn.uviewui.com/uview/goods/',
				goodsArr: [{
						price: '230.5',
						thumbnail: '1.jpg'
					},
					{
						price: '74.1',
						thumbnail: '2.jpg'
					},
					{
						price: '8457',
						thumbnail: '6.jpg'
					},
					{
						price: '1442',
						thumbnail: '5.jpg'
					},
					{
						price: '541',
						thumbnail: '2.jpg'
					},
					{
						price: '234',
						thumbnail: '3.jpg'
					},
					{
						price: '562',
						thumbnail: '4.jpg'
					},
					{
						price: '251.5',
						thumbnail: '1.jpg'
					}
				],
				list1: [{
					name: '已支付',
				}, {
					name: '未支付',
				}, {
					name: '已完成',
				}],
				test: [{
					id: "1233",
					state: "已支付",
					listImg: ["", ""],
					time: "2022-01-01",
					sum: 20000
				}]
			}
		},
		methods: {
			click(item) {
				console.log('item', item);
			},
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			}
		},
		onLoad() {
			this.screenHeight = (this.$store.state.globalHeight)+100
		}
	}
</script>

<style lang="scss">
	img {
		width: 100%;
		height: 100%;
	}

	.scroll-list {
		@include flex(column);

		&__goods-item {
			margin-right: 20px;

			&__image {
				width: 60px;
				height: 60px;
				border-radius: 4px;
			}

			&__text {
				color: #f56c6c;
				text-align: center;
				font-size: 12px;
				margin-top: 5px;
			}
		}

		&__show-more {
			background-color: #fff0f0;
			border-radius: 3px;
			padding: 3px 6px;
			@include flex(column);
			align-items: center;

			&__text {
				font-size: 12px;
				width: 12px;
				color: #f56c6c;
				line-height: 16px;
			}
		}

		&__line {
			@include flex;
			margin-top: 10px;

			&__item {
				margin-right: 15px;

				&__image {
					width: 61px;
					height: 48px;
				}

				&__text {
					margin-top: 5px;
					color: $u-content-color;
					font-size: 12px;
					text-align: center;
				}

				&--no-margin-right {
					margin-right: 0;
				}
			}
		}
	}
</style>

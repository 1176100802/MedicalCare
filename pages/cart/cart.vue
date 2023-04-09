<template>
	<view :style="'height:'+(screenHeight+200)+'px;background-color:#eee;'">
		<view class="cart">
			<view v-for="(item,index) in test"
				style="height: 200rpx;width: 100%;display: flex;align-items: center;border-bottom: 7px solid #eee;border-top: 7px solid #eee;background-color: white;">

				<u-checkbox activeColor="blue" shape="circle" checked="item.checked" customStyle="margin-left:5%;">
				</u-checkbox>

				<view style="height: 70%;width: 20%;margin-left:5%;">
					<img src="../../static/list.png" style="" alt="">
				</view>
				<view class="right" style="margin-left: 5%;width: 60%;height: 100%;">
					<view
						style="height: 100rpx;line-height: 100rpx;width: 90%;display: block;z-index: 999;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;font-size: 25rpx;">
						<text>{{item.title}}</text>
					</view>
					<view style="line-height: 100rpx;width: 90%;display: flex;align-items: center;">
						<text style="font-size: 40rpx;color: red;">$123</text>
						<text style="margin-left: 2%;text-decoration: line-through;font-size: 20rpx;">$123</text>
						<view style="width: 70%;margin-left: 5%;">
							<u-number-box v-model="item.num" @change="valChange" button-size="30" color="#ffffff"
								bgColor="#2979ff" iconStyle="color: #fff"></u-number-box>
						</view>
					</view>

				</view>


			</view>


		</view>
		<view class="goods_nav">
			<view style="margin-left: 10%;">
				<u-checkbox activeColor="blue" shape="circle" :checked="all" label="全选">
				</u-checkbox>
			</view>
			<view style="margin-left: 10%;">
				<text>合计：￥{{sum}}</text>
			</view>
			<view style="margin-left: 5%;width: 20%;">
				<u-button text="支付" type="error" shape="circle" @click="click"></u-button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				empty: null,
				screenHeight: 0,
				sum: 10000,
				all: false,
				test: [{
						checked: true,
						title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
						num: 10
					},
					{
						checked: true,
						title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
						num: 10
					}, {
						checked: true,
						title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
						num: 10
					},
					{
						checked: true,
						title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
						num: 10
					},
					{
						checked: true,
						title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
						num: 10
					},
					{
						checked: true,
						title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
						num: 10
					},
					{
						checked: true,
						title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
						num: 10
					},
					{
						checked: true,
						title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
						num: 10
					}
				]
			}
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			click() {
				console.log('click');
			}
		},
		onLoad() {
			this.screenHeight = this.$store.state.globalHeight
		}
	}
</script>

<style lang="scss">
	.cart {
		width: 100%;




	}

	img {
		width: 100%;
		height: 100%;
	}

	.goods_nav {
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #eee;
		height: 100rpx;
		display: flex;
		align-items: center;
		z-index: 999;
	}
</style>

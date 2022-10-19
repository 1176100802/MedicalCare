<template>
	<view style="height: 1000px;">
		<view class="cart">
			<view v-for="(item,index) in test" style="height: 200rpx;width: 100%;display: flex;align-items: center;margin-top: 10rpx;border-bottom: 7px solid #eee;">
				<u-checkbox activeColor="blue" shape="circle" checked="item.checked" customStyle="margin-left:5%;">
				</u-checkbox>
				<view style="height: 70%;width: 20%;margin-left:5%;">
					<img src="../../static/list.png" style="" alt="">
				</view>
				<view class="right" style="margin-left: 5%;width: 60%;height: 100%;">
					<view
						style="height: 100rpx;line-height: 100rpx;width: 90%;display: block;z-index: 999;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;font-size: 35rpx;">
						<text>{{item.title}}</text>
					</view>
					<view style="line-height: 100rpx;width: 90%;display: flex;align-items: center;">
						<text style="font-size: 40rpx;">$123</text>
						<text style="margin-left: 2%;text-decoration: line-through;font-size: 20rpx;">$123</text>
						<view style="width: 60%;margin-left: 5%;">
							<u-number-box v-model="item.num" @change="valChange" button-size="20" color="#ffffff"
								bgColor="#2979ff" iconStyle="color: #fff"></u-number-box>
						</view>
					</view>

				</view>
				
				
			</view>
		
			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				test: [{
					checked: true,
					title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
					num: 10
				},
				{
					checked: true,
					title: "上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从上传首次尝试从",
					num: 10
				}]
			}
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			}
		}
	}
</script>

<style lang="scss">
	.cart {
		width: 90%;
		margin-left: 5%;
		background-color: rgba(234,236,237,.5);
		border-radius: 15rpx;
		margin-top: 50rpx;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>

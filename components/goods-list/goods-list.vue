<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.goodsid" @click="navigator(item.goodsid)">
			<view style="margin-left: -10%;">
				<image :src="'http://'+item.gphoto" ></image>
			</view>
			<view class="price">
				<text>￥{{item.gSalePrice}}</text>
				<text>￥{{item.gprice}}</text>
			</view>
			<view class="name" style="margin: 0 auto;font-size: 40rpx;">
				{{item.gname}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		methods: {
			navigator(id) {
				this.$emit('goodsItemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods_item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;

			image {
				width: 80%;
				height: 150px;
				display: block;
				margin: auto;
			}

			.price {
				color: skyblue;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}

			.name {
				width: 300rpx;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
				overflow: hidden;
			}
		}
	}
</style>

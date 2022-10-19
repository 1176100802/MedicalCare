<template>

	<view class="home">
		<view class="u-demo-block__content">
			<u-notice-bar :text="text5" mode="closable"></u-notice-bar>
		</view>
		<view class="topBar">
			<view class="usearch">
				<u-search bgColor="#ffffff" inputAlign="center" height="35" shape="round" :showAction="false">
				</u-search>
			</view>
		</view>
		<view class="center">
			<view class="u-demo-block">
				<view>
					<swiper :indicator-dots="true" class="swiper">
						<swiper-item>
							<u-grid>
								<u-grid-item v-for="(item, index) in swiperList" :index="index" :key="index"
									@click="click">
									<u-icon :customStyle="{paddingTop:40+'rpx'}" :name="item" :size="30"></u-icon>
									<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
								</u-grid-item>
							</u-grid>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<u-toast ref="uToast" />
		</view>



		<u-swiper :list="list3" indicator indicatorMode="line" circular></u-swiper>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list3: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				swiperList: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email', 'list'],
				text5: '涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川'
			}
		},
		methods: {
			
			async getSwipers() {
				// const res=await this.$myRequest({
				// 	url:'/getSwiper',
				// 	method:'GET'
				// })
				// this.swipers=res.data
			},
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			}
		},
		onLoad() {
			this.getSwipers();

			//判断是否登录保存（读取Vuex）


			// uni.showModal({
			// 	title: '授权',
			// 	content: "是否授权",
			// 	success: (res) => {
			// 		if (res.confirm) {
						
			// 		}
			// 	}
			// })


		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			margin-top: 50rpx;
			width: 750rpx;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.topBar {
			width: 100%;
			height: 250rpx;
			background-color: #71d5a1;

			.usearch {
				padding-top: 30rpx;
				margin: 0 auto;
				width: 80%;
			}
		}

		.center {
			width: 95%;
			margin: 0 auto;
			box-shadow: 2px 2px 5px #000;
			border-radius: 10rpx;
			margin-top: 20rpx;
			margin-bottom: 20rpx;

			.swiper {
				height: 280px;
			}

			.grid-text {
				font-size: 14px;
				color: #909399;
				padding: 10rpx 0 20rpx 0rpx;
				/* #ifndef APP-PLUS */
				box-sizing: border-box;
				/* #endif */
			}
		}

		.u-demo-block__content {
			@include flex(column);
		}
	}
</style>

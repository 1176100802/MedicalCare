<template>
	<view class="person">

		<view class="topBar">

		</view>
		<view class="info">
			<u-avatar text="北" fontSize="30" randomBgColor size="70" customStyle="z-index:999"></u-avatar>

		</view>
		<view class="center" :style="'height:'+screenHeight+'px;background-color: rgb(222,225,230);'">
			<view class="myInfo"
				style="background-color: white;border-radius: 20rpx;box-shadow: 0px 1px 2px #000;width: 96%;margin-left: 2%;">
				<text style="margin-left: 35px;line-height: 50px;font-family: kaiti;font-size: 20px;">我的信息</text>
				<u-grid :border="false" col="4" @click="click">
					<u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex">
						<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
						<text class="grid-text">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>
			<view class="careInfo"
				style="background-color: white;border-radius: 20rpx;box-shadow: 0px 1px 2px #000;width: 96%;margin-left: 2%;margin-top: 30rpx;">
				<text style="margin-left: 35px;line-height: 50px;font-family: kaiti;font-size: 20px;">挂号信息</text>
				<u-grid :border="false" col="4">
					<u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex">
						<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
						<text class="grid-text">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight: 0,
				list: [{
						name: 'photo',
						title: '图片'
					},
					{
						name: 'lock',
						title: '锁头'
					},
					{
						name: 'star',
						title: '星星'
					},
					{
						name: 'hourglass',
						title: '沙漏'
					},
					{
						name: 'home',
						title: '首页'
					},
					{
						name: 'star',
						title: '音量'
					},
				]

			}
		},
		methods: {
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
				if (name == 0) {
					uni.navigateTo({
						url: "/pages/unpateinfo/unpateinfo"
					})
				} else if (name == 1) {
					uni.navigateTo({
						url: "/pages/info/info"
					})
				} else if (name == 2) {
					uni.makePhoneCall({
						phoneNumber: "123", //电话号码
						success: function(e) {
							console.log(e);
						},
						fail: function(e) {
							console.log(e);

						}
					})
				} else if (name == 3) {
					uni.navigateTo({
						url: "/pages/cart/cart"
					})
				}
				else if (name == 4) {
					uni.navigateTo({
						url: "/pages/order/order"
					})
				}
			}
		},
		onLoad() {
			this.screenHeight = this.$store.state.globalHeight
		},
	}
</script>

<style lang="scss">
	.person {
		overflow: hidden;



		.topBar:after {
			/* 这个伪类的作用就是一个圆弧的背景色 */
			width: 140%;
			height: 350rpx;
			position: absolute;
			left: -20%;

			/* 之所以left:20%,是因为width:140%，宝贝可以是是别的值，例如width:160%，那么left:30%才能水平居中，可以发现规律的 */
			top: 0;
			z-index: 1;
			/*层叠顺序，最底层显示*/
			content: '';
			border-radius: 0 0 50% 50%;
			/*分别对应 左上 右上 右下 左下*/
			background-color: #71d5a1;
			/* 将这个伪类水平居中 */
		}

		.info {
			margin-top: 150rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background-color: rgb(222, 225, 230);
			padding-bottom: 130rpx;
		}
	}

	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
</style>

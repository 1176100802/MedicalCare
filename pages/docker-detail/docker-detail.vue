<template>
	<view class="dockerDetail">
		<view class="topBar">

		</view>
		<view class="box">
			<view class="aImg">
				<img :src="dockerInfo.doctorphoto" >
			</view>
			<text style="margin-left: 50rpx;">{{dockerInfo.doctorname}}</text>
		</view>
		<view class="tab">
			<u-tabs :list="list1" @click="click" lineWidth="50"></u-tabs>
		</view>
		<view class="info" :style="'height:'+screenHeight+'px'">
			<view v-if="index === 0" style="width: 100%;">
				<u-collapse @change="change" @close="close" @open="open">
					<u-collapse-item title="医护预约" name="Address">
						<view v-for="(item,index) in info" :key="index" style="margin-bottom: 30rpx;">
							<text class="date" style="color: green;width: 100%;display: block">{{item.date}}</text>
							<text class="price"
								style="color: red;width: 50%;display: block;margin-top: 30rpx;margin-bottom: 30rpx;">价格:{{item.price}}</text>
							<u-button text="申请" style="width: 80%;margin-bottom: 30rpx;" type="primary"
								@click="sendRequest(index)"></u-button>
							<u-line color="#2979ff" style="margin-top: 10rpx;"></u-line>
						</view>
					</u-collapse-item>
				</u-collapse>
			</view>
			<view v-else>
				<u-collapse @change="change" @close="close" @open="open">
					<u-collapse-item title="医护介绍" name="Introduce">
						<text class="u-collapse-content">{{dockerInfo.doctorinfo}}</text>
					</u-collapse-item>
					<u-collapse-item title="医护擅长" name="Habite">
						<text class="u-collapse-content">{{dockerInfo.doctorable}}</text>
					</u-collapse-item>
				</u-collapse>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				doctorid: 0,
				list1: [{
					name: '当日挂号',
				}, {
					name: '医生介绍',
				}],
				screenHeight: 0,
				index: 0,
				info: [{
						date: "2021-10-21",
						price: "120"
					},
					{
						date: "2021-11-21",
						price: "130"
					}
				],
				dockerInfo:{}

			}
		},
		methods: {
			click(item) {
				this.index = item.index
				console.log('item', item);
			},
			open(e) {
				// console.log('open', e)
			},
			close(e) {
				// console.log('close', e)
			},
			change(e) {
				// console.log('change', e)
			},
			sendRequest(index) {

			},
			async getInfo() {
				const res = await this.$myRequest({
					url: '8001/doctor/find/'+this.doctorid,
					method: 'POST'
				})
				
				this.dockerInfo = res.data.data;

			}

		},
		onLoad(option) {
			this.doctorid = option.doctorid
			this.screenHeight = this.$store.state.globalHeight
			this.getInfo()
		}
	}
</script>

<style lang="scss">
	.dockerDetail {
		.topBar {
			height: 250rpx;
			width: 100%;
			background-color: #19be6b;
			padding-bottom: 10rpx;

		}

		.box {
			display: flex;
			position: absolute;
			width: 90%;
			height: 230rpx;
			background-color: white;
			border-radius: 10rpx;
			box-shadow: 1px 2px 5px #000;
			margin-left: 5%;
			margin-top: -190rpx;
			justify-content: center;
			align-items: center;
			text-align: center;

			.aImg {
				height: 100rpx;
				width: 100rpx;

				img {
					height: 100%;
					width: 100%;
				}
			}
		}

		.tab {
			margin-top: 70rpx;
		}

		.info {
			background-color: rgb(243, 244, 246);

		}
	}

	.u-page {
		padding: 0;

		&__item {

			&__title {
				color: $u-tips-color;
				background-color: $u-bg-color;
				padding: 15px;
				font-size: 15px;

				&__slot-title {
					color: $u-primary;
					font-size: 14px;
				}
			}
		}
	}

	.u-collapse-content {
		color: $u-tips-color;
		font-size: 14px;
	}
</style>

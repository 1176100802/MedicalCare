<template>
	<view class="login">
		<view class="top" :style="'height:'+screenHeight+'px'">
			<u-avatar :src="src"></u-avatar>
			<text style="text-align: center;line-height: 100rpx;">智慧医疗</text>
		</view>
		<view class="center">
		<!-- 	<view>
				<text>请登录</text>
			</view> -->
			<view style="margin-top: 20rpx;font-size: 15px;margin-bottom: 20rpx;">
				授权绑定为你提供更好服务
			</view>
			<view style="width: 80%;margin-left: 10%;">
				<u-button type="error" text="一键登录" shape="circle" @click="weixinLogin()"
					style="font-size: 20px;height: 100rpx;margin-top: 30rpx;" color="rgb(255,0,0)"></u-button>
				<u-button customStyle="width:30%" type="default" text="取消" :hairline="false" @click="goToIndex()"></u-button>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				src: "https://www.uviewui.com/common/logo.png",
				screenHeight: 0,
				userInfos:null
			}
		},
		computed: {
			...mapState(['userInfo'])
		},

		methods: {
			...mapActions(['login', 'logout']),
			
			
			
			weixinLogin() {
				
				uni.getUserProfile({
					desc: '注册',
					success: (res) => {
						uni.login({
							provider: 'weixin',
							success: (res2) => {
								uni.showLoading({
									title: '登陆中',
									icon:'loading'
								})
								
							
								this.wxLogin(res2.code,res.userInfo.nickName)

							}
						})
					}
				})
			},
			async wxLogin(code,nickName) {
				const res = await this.$myRequest({
					url: '/getCode',
					method: 'POST',
					data: {
						code:code
					}
				})
				uni.hideLoading();
				if(res.data.status==200){
					
					//、保存至Vuex
					this.login(JSON.parse(res.data.data))
					this.goToIndex();
				}
				
				else{
					this.$myToast({
						title:'登录失败',
						icon:'error'
					})
				}
			
			},
			
			goToIndex() {
				uni.switchTab({
					url: '/pages/index/index'
					// complete(res) {
					// console.log(res)	
					// }
				});
			},
			sureCache() {
				this.userInfos=this.$store.state.userInfo
				if (JSON.stringify(this.userInfos) == "{}") {
					this.$myToast({
						title:'请登录',
						icon:'none'
					})
				} else {
					console.log("login")
					this.goToIndex()
				}

			}
		},
		onLoad() {
			this.sureCache()
			this.screenHeight = this.$store.state.globalHeight
			this.screenHeight = (this.screenHeight) / 2.8

		}
	}
</script>

<style lang="scss">
	.login {
		.top {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-family: kaiti;
		}

		.center {
			
			font-weight: normal;
			font-style: normal;
			text-align: center;
			font-size: 18px;

		}
	}
</style>

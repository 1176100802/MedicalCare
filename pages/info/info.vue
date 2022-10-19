<template>
	<view class="info" :style="'height:'+screenHeight+'px;'">
		<u-loading-page :loading="load"></u-loading-page>
		<tabs :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></tabs>
		<view class="content" v-if=" contData.length !=0">
			<view class="item" style="margin-top: 30rpx;" v-for=" item,index in contData" :key="index">
				<u-badge :value="item.date" customStyle="width:150rpx;text-align: center;margin: 0 auto;"
					bgColor="#909399"></u-badge>
				<view
					style="background-color: white;padding-top: 20rpx;padding-bottom: 25rpx;padding-left: 2%;padding-right: 2%;margin-top: 30rpx;border-radius: 20rpx;width: 94%;margin-left: 1%;">
					<u-read-more showHeight="50" toggle @open="open" @close="close">
						<u-parse :content="item.content"></u-parse>
					</u-read-more>
				</view>
			</view>
		</view>
		<view  v-else>
			<u-empty mode="message" icon="http://cdn.uviewui.com/uview/empty/message.png">
			</u-empty>
		</view>
	</view>
</template>

<script>
	import tabs from "../../components/tabs/tabs.vue"
	export default {
		data() {
			return {
				load:true,
				tabIndex: 0,
				tabBars: [{
						name: "就医提醒",
						id: "jiuyi"
					},
					{
						name: "问诊消息",
						id: "wenzhen"
					},
					{
						name: "通知公告",
						id: "tongzhi"
					}
				],
				contData: [],
				screenHeight: 0
			}
		},
		methods: {
			tabtap(index) {
				this.load=true
				
				console.log(index)
				this.tabIndex = index;
				this.getInfo()
			},
			getInfo() {
				
				//发送请求 获取数据

				if (this.tabIndex == 1) {
					this.contData = [{
							"title": this.tabIndex,
							"content": "实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死",
							"date": "2022-01-01"
						},
						{
							"title": this.tabIndex,
							"content": `实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死`,
							"date": "2022-01-02"
						},
						{
							"title": this.tabIndex,
							"content": `实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死`,
							"date": "2022-01-02"
						},
						{
							"title": this.tabIndex,
							"content": `实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死实打实的你说的那是你打死`,
							"date": "2022-01-02"
						}
					]
				} else {
					this.contData = []
				}
				setTimeout(()=>{
					this.load=false
				},2000)
				
			},

			open(name) {
				console.log('open', name);
			},
			close(name) {
				console.log('close', name);
			}
		},
		onLoad() {
			this.screenHeight = this.$store.state.globalHeight
			this.getInfo()
			
		},
		components: {
			tabs
		}
	}
</script>

<style lang="scss">
	.info {
		background-color: rgb(229, 231, 235);

	}
</style>

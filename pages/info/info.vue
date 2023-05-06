<template>
	<view class="info" style="background-color: rgb(222,225,230);">
		<view
			:style="'height:'+screenHeight+'px;background-color: rgb(222,225,230);width:100%;position: absolute;top:0;left:0;z-index:-1;'">
		</view>
		
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
		<view v-else>
			<u-empty mode="message" icon="http://cdn.uviewui.com/uview/empty/message.png">
			</u-empty>
		</view>
		<u-loading-page :loading="load"></u-loading-page>
	</view>
</template>

<script>
	import tabs from "../../components/tabs/tabs.vue"
	export default {
		data() {
			return {
				load: true,
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
				this.load = true
				
				this.tabIndex = index;
				this.getInfo()
			},
			getInfo() {
				
				//发送请求 获取数据

				if (this.tabIndex == 1) {
					this.contData = [{
							"title": this.tabIndex,
							"content": "利用量表采集1160例心系临床患者的问诊信息,用频次分析及聚类分析两种方法对所搜集的问诊信息进行分析,探讨心系疾病的中医问诊信息组合规律.结果:心系疾病问诊信息的出现具有一定的规律性,该规律性与中医辨证理论基本一致.症状组合规律和中医辨证密切相关,对证候分类有重要的指导意义,可从症状的规律性角度探索中医辨证的内涵.",
							"date": "2022-01-01"
						},
						{
							"title": this.tabIndex,
							"content": `使用频数分析方法分析患者的临床特征及中医证候特征,以及急性加重住院的节气分布情况.[结果](1)3096例COPD住院患者的年龄中位数为77岁,高峰年龄为75～89岁,男性患者是女性患者的4.86倍.(2)心血管疾病占合并病首位,肺部感染是COPD患者急性加重的主要原因,糖尿病是常见合并病`,
							"date": "2022-01-02"
						},
						{
							"title": this.tabIndex,
							"content": `慢性阻塞性肺疾病患者的中医证候学特点和分布规律.方法运用因子分析法对116例慢性阻塞性肺疾病患者的中医证候特点及分布规律进行初步探讨.结果得到9个慢性阻塞性肺疾病的中医临床类证候分类.结论本研究所归纳的类证候基本与《慢性阻塞性肺疾病中医证候诊断标准(2011版)》相一致`,
							"date": "2022-01-02"
						}
					]
				} else {
					this.contData = []
				}
				setTimeout(() => {
					this.load = false
				}, 2000)

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

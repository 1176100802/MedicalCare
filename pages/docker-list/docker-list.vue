<template>
	<view>

		<!-- #ifdef H5 -->
		<view class="topBar" style="top: 70rpx;">
			<image @click="open" class="tImage" src="/static/list.png" mode="scaleToFill"></image>
			<text class="title">{{title}}</text>
		</view>
		<!-- #endif -->

		<!-- #ifdef MP-WEIXIN -->
		<view class="topBar" style="top: 0rpx;">
			<image @click="open" class="tImage" src="/static/list.png" mode="scaleToFill"></image>
			<text class="title">{{title}}</text>
		</view>
		<!-- #endif -->




		<view @touchstart="touchStart" @touchend="touchEnd">
			<!-- 遮罩层 -->
			<view class="drawer-mask" :class="{ 'drawer-mask-visible': stateDrawer }" @tap="close()" />
			<!-- 内容列表 -->
			<view class="drawer-content" :class="{ 'drawer-content-visible': stateDrawer}">
				<scroll-view style="height: 100%;" scroll-y="true">
					<view style="font-size: 30px;">类型选择</view>
					<view v-for="(item,index) in dockerList" :key="index" @click="getDockers(index)">
						<view v-if="index == currentIndex"><text style="color: red;">{{item.name}}</text></view>
						<view v-else><text style="color: black;">{{ item.name }}</text></view>
					</view>
				</scroll-view>
			</view>
		</view>


		<view class="info" :style="'height:'+screenHeight+'px'" @touchstart="touchStart" @touchend="touchEnd">
			<u-list>
				<u-list-item v-for="(item, index) in indexList" :key="index">
					<u-cell :title="item.doctorname" @click="nav(item.doctorid)">
					</u-cell>
				</u-list-item>
			</u-list>
		</view>
		<u-loading-page loading-color="#000000" :loading="loaded"></u-loading-page>
	</view>

</template>

<script>
	/**
	 * Drawer 抽屉侧滑菜单
	 * @property {Boolean} mask = [true | false] 是否显示遮罩
	 * @property {Boolean} maskClick = [true | false] 点击遮罩是否关闭
	 */
	export default {
		data() {
			return {
				title: "",
				stateDrawer: false,
				startTime: null, // 手势滑动时间
				startPosition: 0, // 手势进入时
				endPosition: 0, // 手势离开时
				screenHeight: 0,
				indexList: [],
				dockerList: [],
				currentIndex: 0,
				loaded: null
			}
		},
		created() {},
		methods: {
			close() {
				this._changeDrawer('stateDrawer', false)
			},
			open() {
				this._changeDrawer('stateDrawer', true)
			},
			_changeDrawer(param, status) {
				this[param] = status
			},
			// 手势进入时
			touchStart(e) {
				this.startTime = Date.now()
				this.startPosition = e.changedTouches[0].clientX
			},
			// 手势离开时
			touchEnd(e) {
				const endTime = Date.now()
				if (endTime - this.startTime > 2000) {
					return;
				}
				this.endPosition = e.changedTouches[0].clientX;
				var slideDistance = this.endPosition - this.startPosition;
				if (slideDistance > 50) {
					this.open()
				}
				if (slideDistance < -50) {
					this.close()
				}
			},

			nav(index) {
				uni.navigateTo({
					url: '/pages/docker-detail/docker-detail?doctorid=' + index
				});
			},
			async getDockerList() {
				this.loaded = true;
				try{
					const res = await this.$myRequest({
						url: '8001/department/all',
						method: 'POST'
					})
					
					this.dockerList = res.data.data;
				
					this.getDockers(0)	
					
				}catch(error){
					this.loaded = false;
				}
			
			},
			async getDockers(index) {
				this.loaded = true;
				this.title = this.dockerList[index].name;
				this.currentIndex = index;
				this.close();
				var id = this.dockerList[index].departid;
				try{
					const res = await this.$myRequest({
						url: '8001/doctor/by/'+id,
						method: 'GET'
					})
					this.indexList = res.data.data;
					this.loaded = false;
				}catch(error){
					this.loaded = false;
				}
				
			}

		},
		onLoad() {
			this.screenHeight = this.$store.state.globalHeight

			this.getDockerList()
		}
	}
</script>

<style scoped>
	.tImage {
		margin-left: 30rpx;
		height: 64%;
		width: 10%;
	}

	.topBar {
		/* border-radius: 20rpx; */
		background-color: rgba(214, 239, 210, .7);
		display: flex;
		position: fixed;

		/* left: 2%; */
		z-index: 999;
		width: 100%;
		height: 100rpx;
		justify-content: center;
		align-items: center;
	}

	.drawer-content view {
		font-size: 20px;
		line-height: 1.5;
		margin-top: 70rpx;
		margin-bottom: 10px;
	}



	.title {
		margin: 0 auto;
		text-align: center;
		line-height: 64rpx;
	}






	/* 侧滑菜单 因为需要手势滑动，所以左侧留边20rpx*/
	.drawer-content {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 65%;
		bottom: 0;
		z-index: 33;
		background-color: rgba(255, 255, 255, 1);
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		transform: translateX(calc(-100% + 20rpx));
		transition: transform 0.1s ease;
	}

	.drawer-content-visible {
		z-index: 999;
		transform: translateX(0px);
	}

	/* 侧滑菜单 遮罩层 */
	.drawer-mask {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.4);
		opacity: 0;
		transition: opacity 0.1s;
	}

	.drawer-mask-visible {
		z-index: 999;
		opacity: 1;
	}


	.info {

		margin-top: 100rpx;
	}
</style>

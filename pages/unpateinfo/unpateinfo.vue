<template>
	<view style="width: 90%;margin: 0 auto;">
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form labelPosition="top" :model="model1" :rules="rules" ref="form1">
			<u-form-item label="姓名" prop="userInfo.username" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.username" border="surround"></u--input>
			</u-form-item>
			<u-form-item label="手机" prop="userInfo.phone" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.phone" border="surround"></u--input>
			</u-form-item>
			<u-form-item label="性别" prop="userInfo.sex" borderBottom @click="showSex = true; hideKeyboard()"
				ref="item1">
				<u--input v-model="model1.userInfo.sex" disabled disabledColor="#ffffff" placeholder="请选择性别"
					border="surround"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="邮箱" prop="userInfo.email" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.email" border="surround"></u--input>
			</u-form-item>
			<u-form-item label="生日" prop="userInfo.birthday" borderBottom ref="item1"
				@click="showBirthday = true; hideKeyboard()">
				<u--input v-model="model1.userInfo.birthday" disabled disabledColor="#ffffff" placeholder="请选择生日"
					border="surround"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
		</u--form>
		<u-button type="primary" text="提交" customStyle="margin-top: 50px" @click="submit"></u-button>
		<u-button type="error" text="重置" customStyle="margin-top: 10px" @click="reset"></u-button>
		<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" @close="showSex = false" @select="sexSelect">
		</u-action-sheet>
		<u-datetime-picker :show="showBirthday" :value="birthday" mode="date" closeOnClickOverlay
			@confirm="birthdayConfirm" @cancel="birthdayClose" @close="birthdayClose"></u-datetime-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSex: false,
				showBirthday: false,
				birthday: Number(new Date()),
				model1: {
					userInfo: {
						userID: 0,
						username: '',
						sex: '',
						birthday: '',
						email: '',
						phone: ''
					},
				},
				actions: [{
						name: '男',
					},
					{
						name: '女',
					}
				],
				rules: {
					'userInfo.username': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.phone': {
						type: 'string',
						required: true,
						message: '请填写手机号',
						trigger: ['blur', 'change']
					},
					'userInfo.birthday': {
						type: 'string',
						required: true,
						message: '请选择生日',
						trigger: ['change']
					},
					'userInfo.email': {
						type: 'string',
						required: true,
						message: '请输入邮箱',
						trigger: ['blur', 'change']
					}
				}
			}
		},
		onReady() {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
			this.$refs.form1.setRules(this.rules)
		},
		methods: {
			sexSelect(e) {
				this.model1.userInfo.sex = e.name
				this.$refs.form1.validateField('userInfo.sex')
			},
			birthdayClose() {
				this.showBirthday = false
				this.$refs.form1.validateField('userInfo.birthday')
			},
			birthdayConfirm(e) {
				this.showBirthday = false
				this.model1.userInfo.birthday = uni.$u.timeFormat(e.value, 'yyyy-mm-dd')
				this.$refs.form1.validateField('userInfo.birthday')
			},
			submit() {
				// 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
				this.$refs.form1.validate().then(res => {
					this.modifyUserInfo()
				}).catch(errors => {
					uni.$u.toast('参数设置有误')
				})
			},
			open(message) {
				this.$alert(message, {
					confirmButtonText: '确定',
					callback: action => {
						this.$message({
							type: 'info',
							message: message
						});
					}
				});
			},
			async modifyUserInfo() {
				
				if(this.model1.userInfo.sex=='男'){
					this.model1.userInfo.sex=1
				}else{
					this.model1.userInfo.sex=0
				}
				console.log(this.model1.userInfo)
				const res = await this.$myRequest({
					url: '8001/wx_user/setInfo',
					method: 'POST',
					data: this.model1.userInfo
				})
				if (res.data.code == 200) {
					this.open('修改成功')
				}

			},
			reset() {
				const validateList = ['userInfo.username', 'userInfo.phone', 'userInfo.sex', 'userInfo.email',
					'userInfo.birthday'
				]
				this.$refs.form1.resetFields()
				this.$refs.form1.clearValidate()
				setTimeout(() => {
					this.$refs.form1.clearValidate(validateList)
					// 或者使用 this.$refs.form1.clearValidate()
					this.model1.userInfo.userID = 0
					this.model1.userInfo.username = ''
					this.model1.userInfo.phone = ''
					this.model1.userInfo.sex = ''
					this.model1.userInfo.email = ''
					this.model1.userInfo.birthday = ''
				}, 10)
			},
			hideKeyboard() {
				uni.hideKeyboard()
			}
		},
		onLoad() {
			
			this.model1.userInfo = this.$store.state.userInfo
			console.log(this.model1.userInfo)
			if(this.model1.userInfo.sex==1){
				this.model1.userInfo.sex='男'
			}
			if(this.model1.userInfo.sex==0){
				this.model1.userInfo.sex='女'
			}
		}
	}
</script>

<style>

</style>

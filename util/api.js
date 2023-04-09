const BASE_URL = 'http://192.168.248.178:8001'
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header:{'content-type':'application/json'},
			success: (res) => {
				// 设置未登录拦截，如果后端code返回401则跳转到login页面
				// console.log(res)
				// if(res.data.code==401){
				// 	uni.switchTab({
				// 		url: '/pages/login/login',
				// 		complete(res) {
				// 			uni.showToast({
				// 				title: '未登录',
				// 				icon:"error"
				// 			})
				// 		}
				// 	});
				// }else{
				// 	resolve(res)
				// }
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败',
					icon:"error"
				})
				reject(err)
			}

		})
	})
}

const BASE_URL = 'http://localhost:8080'
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header:{'content-type':'application/x-www-form-urlencoded'},
			success: (res) => {
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

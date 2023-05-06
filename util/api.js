const BASE_URL = 'http://192.168.164.178:'
export const myRequest = (options) => {
	let promise = new Promise(function(resolve, reject) {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header: {
				'content-type': 'application/json'
			}
		}).then((res) => {
				if(res[1].data.code==200){
					resolve(res[1])
				}else{
					uni.showToast({
						title: '请求接口失败',
						icon:"error"
					})
					
				}
				
			}
		).catch((err)=>{
			uni.showToast({
				title: '请求接口失败',
				icon:"error"
			})
			
		})
	})
	return promise;
}


const BASE_URL = "https://tea.qingnian8.com/api/bizhi"

//使用Promise()方法封装了uni-app的uni.request方法
export function request(config = {}) {
	//resolve 成功  reject 失败
	return new Promise((resolve, reject) => {
		let {
			url,
			method = "GET",
			header = {},
			data = {}
		} = config;

		url = BASE_URL + url;
		header['access-key'] = "xxm_sunliguo";
		console.log(header);

		uni.request({
			url,
			data,
			method,
			header,
			//成功后的回调
			success: res => {
				if (res.data.errCode == 0) {
					resolve(res.data);
				} else if (res.data.errCode === 400) {
					uni.showModal({
						title: "错误提示",
						content: res.data.errMsg,
						showCancel: false
					})
					reject(res.data.data)
				} else {
					uni.showModal({
						title: res.data.errMsg,
						icon: "none",
					});
					rejct(res.data.data);
				}
			},
			//失败后的回调
			fail: err => {
				uni.showToast({
					title:'请求失败',
					showCancel:false,
					icon:"error",
				})
				reject(err);
			}
		})
	})
}
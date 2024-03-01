function request(url, method = "GET", dat {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method: method.toLocaleUpperCase(),
			data: data,
			header: {
				"Content-type": "application/x-www-form-urlencoded"
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (res) => {
				reject(res);
			}
		})
	})
}

export {
	request
}
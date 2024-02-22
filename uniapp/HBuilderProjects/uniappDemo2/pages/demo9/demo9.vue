<template>
	<view>
		<text>回调地狱</text>
		<!-- {{res.header}} -->
		<button @click="getPingLun">请求</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: null
			}
		},
		watch: {
			//监听res遍历，当值有变化时执行
			res(newValue,oldValue) {
				uni.showToast({
					title:'新值'+newValue
				})
				console.log("新值，老值：",newValue,oldValue);
			}
		},
		onLoad() {
			console.log('onLoad')
			console.log(this.getData());
		},
		methods: {
			getData() {
				//获取分类列表id
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: res => {
						let id = res.data[0].id
						// 根据分类id获取该分类下的所有文章
						uni.request({
							url: "https://ku.qingnian8.com/dataApi/news/newslist.php",
							data: {
								cid: id
							},
							success: res2 => {
								//获取到一篇文章的id，根据文章id找到该文章下的评论
								let id = res2.data[0].id;
								uni.request({
									url: "https://ku.qingnian8.com/dataApi/news/comment.php",
									data: {
										aid: id
									},
									success: res3 => {
										//找到该文章下所有的评论
										console.log(res3)
										this.res = res3
									}
								})
							}
						})

					}
				})
			},
			getPingLun:()=>{
				console.log('getPinglun')
				this.getData();
			}
		}
	}
</script>

<style>
	view {
		width: 750rpx;
	}

	text {
		font-size: 50px;
		font-weight: 300;
		text-align: center;
	}
</style>
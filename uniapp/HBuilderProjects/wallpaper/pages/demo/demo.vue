<template>
	<view>

	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
	onLoad((e) => {
		// console.log(e);
		console.log(getData())
	})

	const getData = () => {
		//获取分类列表id
		uni.request({
			url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
			success: res => {
				console.log('res', res)
				let id = res.data[0].id
				// 根据分类id获取该分类下的所有文章
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/newslist.php",
					data: {
						cid: id
					},
					success: res2 => {
						console.log('res2', res2)
						//获取到一篇文章的id，根据文章id找到该文章下的评论
						let id = res2.data[2].id;
						uni.request({
							url: "https://ku.qingnian8.com/dataApi/news/comment.php",
							data: {
								aid: id
							},
							success: res3 => {
								//找到该文章下所有的评论
								console.log("res3", res3)
							}
						})
					}
				})

			}
		})
	}
</script>

<style lang="scss" scoped>

</style>
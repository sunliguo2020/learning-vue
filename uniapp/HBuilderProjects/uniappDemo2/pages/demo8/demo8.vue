<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'hello world'
			}
		},
		methods: {
			//获取导航列表
			getNav(){
				new Promise();
			}
		},
		onLoad(){
			let p = new Promise((resolve,reject)=>{
				uni.request({
					url:'http://ku.qingnian8.com/dataApi/news/navlist.php2',
					success:res=>{
						// console.log(res);
						// resolve(res);
					},
					fail:err=>{
						reject(err)
					}
				})
			});
			console.log(p);
			p.then(res=>{
				console.log(res);
			}).catch(err=>{
				console.log(err)
			});
		}
	}
</script>

<style>

</style>

<template>
	<view>
		
	</view>
</template>

<script setup>
(function request() {
	uni.showLoading({
		
	})
		uni.request({
			url: "https://jsonplaceholder.typicode.com/posts",
			data:{
				id:1
			},
			timeout:1000,
			method:'get',
			success: res => {
				console.log(res);
			},
			fail:err=>{
				console.log('超时');
				console.log(err);
			},
			complete:()=>{
				uni.hideLoading()
			}
		})
	})()
</script>

<style lang="scss" scoped>

</style>

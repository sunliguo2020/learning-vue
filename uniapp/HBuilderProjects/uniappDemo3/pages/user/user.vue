<template>
	<view>
		个人中心
	</view>
</template>

<script setup>

uni.showLoading({
	title:'加载中。。。',
	complete:function(res){
		console.log('加载完成',res);
	}
})
setTimeout(()=>{
	uni.hideLoading()
},2000)
</script>

<style lang="scss" scoped>

</style>

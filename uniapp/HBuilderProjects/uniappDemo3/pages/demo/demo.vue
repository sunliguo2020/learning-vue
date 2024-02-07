<template>
	<view>
		demo页面
		<navigator url="/pages/demo2/demo2">跳转到demo2</navigator>
		<navigator url="/pages/demo4/demo4">跳转到demo4</navigator>
		<view @click="onClick">
			跳转到demo2
		</view>
	
	</view>
</template>

<script setup>
const onClick = function(){
	uni.navigateTo({
		url:'/pages/demo2/demo2?name=张三&age=18&hot=篮球',
	})
}
</script>

<style lang="scss" scoped>

</style>

<template>
	<view class="content">
		<navigator open-type="reLaunch" url="/pages/user/user">个人中心</navigator>
		
		<button @click="show">显示</button>
		<button @click="hide">隐藏</button>
		<navigator url="/pages/demo/demo">跳转到demo</navigator>
		<navigator url="/pages/demo3/demo3">跳转到demo3</navigator>
		<navigator url="/pages/demo4/demo4">跳转到demo4</navigator>
		<navigator url="/pages/demo5/demo5">跳转到demo5</navigator>
		<navigator url="/pages/requestDemo/requestDemo">萌宠大集合</navigator>
	</view>
</template>

<script setup>
	const title = ref('首页')
	const show = function (){
		uni.showToast({
			"title":'showToast',
			// "mask":true,
			duration:3000
		})
	};
	const hide = function (){
		uni.hideToast();
	}


</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f95;
	}
</style>

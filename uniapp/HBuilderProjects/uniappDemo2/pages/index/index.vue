<template>
	<view class="">
		<!-- <xxm-header></xxm-header>
		<UserInfo username='咸虾米' avatar="../../static/pic1.png"></UserInfo>
		<UserInfo username='李四' ></UserInfo>
		<UserInfo :username='name' avatar="../../static/pic3.webp"></UserInfo> -->
		<xxm-layout></xxm-layout>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	const name = ref('王五')
</script>

<style lang='scss' scoped>
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
		color: #8f8f94;
	}
</style>
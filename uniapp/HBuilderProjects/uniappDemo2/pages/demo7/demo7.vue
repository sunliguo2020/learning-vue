<template>
	<view class="layout">
		<view class="box">
			我是字体
			<view class='text'>我是字体2</view>
		</view>
		<view  class="text" v-for="item in 100">{{item}}</view>
	</view>
</template>

<script setup>
	import {
		onReachBottom
	} from "@dcloudio/uni-app";
	onReachBottom(() => {
		console.log("onReachBottom到底了！")
	})
</script>

<style lang="scss" scoped>
	.box {
		width: 200px;
		height: 200px;
		background: orange
	}

	.text {
		font-size: 52rpx;
		color: $uni-border-color;
	}
</style>
<template>
	<view class="layout">
		<view class="row" v-for="item in arrs" :key="item.id">
			<view class="title">{{item.title}}</view>
			<view class="content">{{item.body}}</view>
		</view>
	</view>
</template>

<script setup>
	let arrs = ref([]);
	(function request() {
		uni.request({
			url: "https://jsonplaceholder.typicode.com/posts",
			success: res => {
				console.log(res);
				arrs.value = res.data
			}
		})
	})()
</script>

<style lang="scss" scoped>
.layout{
	padding:30rpx;
	.row{
		border-bottom: 1px solid #cfcfcf;
		padding:20rpx 0;
		.title{
			font-size:36rpx;
			margin-bottom: 10rpx;
		}
		.content{
			font-size:20rpx;
			color:#666;
		}
	}
}
</style>
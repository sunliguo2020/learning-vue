<template>
	<view>
		<view v-for="(item,index) in taoShowObj" :key="index">
			<image :src="item.url" mode="widthFix" class='showpic'></image>
			<view class="row">
				<view class="label">店铺：{{item.shop}}</view>
				<view class="label">评论：{{item.comment}}</view>
			</view>

		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		apiTaoShow
	} from "@/api/apis.js"
	import {
		onReachBottom
	} from "@dcloudio/uni-app"
	
	const taoShowObj = ref([])
	
	const getTaoShowObj = async () => {
		const res = await apiTaoShow({
			size: 10
		});
		// console.log(res.data);
		taoShowObj.value = [...taoShowObj.value, ...res.data];
		console.log(taoShowObj.value)
	}
	getTaoShowObj();
	onReachBottom(() => {
		console.log('触底了');
		getTaoShowObj()
	})
</script>

<style lang="scss" scoped>
	.showpic {
		width: 750rpx;
	}

	view {
		.row {
			display: flex;
			padding: 10rpx 0;
			font-size: 32rpx;
			line-height: 1.7em;

			.label {
				color: pink;
				width: 400rpx;
				text-align: center;
				font-size: 30rpx;
			}
		}

		image {
			width: 750rpx;
		}

		text {
			color: #000;
			padding-left: 10rpx;
			width: 80rpx;
			line-height: 1em;
			text-align: center;
			font-size: 28rpx;
		}
	}
</style>
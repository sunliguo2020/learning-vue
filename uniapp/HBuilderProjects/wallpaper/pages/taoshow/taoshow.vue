<template>
	<view>
		<view>轮播展示</view>
		<view class="preview">
			<swiper :current="swiperCurrent"
			class="swiper"
			indicator-dots
			autoplay
			@animationfinish="swiperDone" 
			@change="swiperChange">
				<swiper-item v-for="(item,index) in taoShowObj" :key="index">
					<image :src="item.url" mode="aspectFit"></image>
				</swiper-item>
			</swiper>
			
		</view>
	</view>
<!-- 	<view>
		<view>单页展示</view>
		<view v-for="(item,index) in taoShowObj" :key="index">
			<image :src="item.url" mode="widthFix" class='showpic'></image>
			<view class="row">
				<view class="label">店铺：{{item.shop}}</view>
				<view class="label">评论：{{item.comment}}</view>
			</view>
		</view>
	</view> -->
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		apiTaoShow
	} from "@/api/apis.js"
	import {
		onReachBottom,
		onShow,
		onLoad,
		onShareAppMessage
	} from "@dcloudio/uni-app"
	
	const taoShowObj = ref([])
	const swiperCurrent = ref(0);
	
	onShow(() => {
		uni.getNetworkType({
			success(res) {
				console.log("获取网络类型为:", res)
				uni.showToast({
					title: '网络类型' + res.networkType,
					icon: "none",
				})
			},
			fail: (err) => {
				console.log('获取网络类型失败', err)
			}
		})
	})
	//获取买家秀
	const getTaoShowObj = async () => {
		const res = await apiTaoShow({
			size: 10
		});
		// console.log(res.data);
		// 追加新数据，保留原数据
		// taoShowObj.value = [...taoShowObj.value, ...res.data];
		// 只保留新数据
		taoShowObj.value = res.data ;
		console.log(taoShowObj.value)
	};
	onLoad((e)=>{
		console.log('onLoad执行');
		getTaoShowObj();
	});
	//上拉加载数据
	onReachBottom(() => {
		console.log('触底了');
		getTaoShowObj()
	})

	//轮播切换一屏
	const swiperDone = function(e) {
		// console.log('切换一屏,动画完成', e)
	}
	
	//current 更新
	const swiperChange = function(e) {
		// console.log('current改变了', e);
		console.log('当前current值为', e.detail.current)
		//当前买家秀图片数量
		var buyer_reviews_images_count = taoShowObj.value.length
		console.log('当前数据量',buyer_reviews_images_count)
		//检查current是否到头了
		if (e.detail.current +1 >= buyer_reviews_images_count) {
			console.log('准备获取新数据');
			getTaoShowObj()
			// 如果追加数据，将current修改为最后一个。
			// swiperCurrent.value = buyer_reviews_images_count;
		}
	}

	//分享小程序
	onShareAppMessage((res)=>{
		console.log("onShareAppMessage",res);
		if (res.from == 'menu'){
			return {
				'title':'买家秀',
				path:'pages/taoshow/taoshow'
			}
		}
	})
</script>

<style lang="scss" scoped>
	.preview{
		width:100%;
		height:100vh;
	}
	.swiper {
		width:750rpx;
		height:1000rpx;
		image {
			width: 100%;
			height: 100%
		}
	}

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
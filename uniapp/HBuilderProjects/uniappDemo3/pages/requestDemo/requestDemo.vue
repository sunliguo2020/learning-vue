<template>
	<view class="container">
		<view class="layout">
			<view class="box" v-for="(item,index) in arrs" :key="item.id" >
				<view class="pic">
					<image lazy-load :src="item.url" mode="widthFix" @click="previewPic(index)"></image>
				</view>
				<view class='text'>
					{{item.id}}
				</view>
			</view>
		</view>
		
		<view class="float">
			<view class="item" @click="onRefresh">
				<uni-icons type="refreshempty" size="30"></uni-icons>
			</view>
			<view class="item" @click="onTop">
				<uni-icons type="up" size="30"></uni-icons>
			</view>
		</view>
		<uni-load-more status="loading"></uni-load-more>
	</view>
</template>

<script setup>
	import {onReachBottom,onPullDownRefresh}  from "@dcloudio/uni-app"
	const arrs = ref([]);
	
function network(){
	uni.showNavigationBarLoading();
	uni.request({
		url:'https://api.thecatapi.com/v1/images/search',
		data:{
			limit:10,
		},
		success:res=>{
			console.log(res);
			// arrs.value = res.data;
			if (res.statusCode === 200)
			{
				arrs.value = [...arrs.value,...res.data]
			}
			else{
				uni.showToast({
					title: '接口返回错误'
				});
			}
			
		},
		fail:err=>{
			uni.showToast({
				title:'请求资源加载失败'
			})
			console.log('请求资源加载失败');
		},
		complete:()=>{
			uni.hideNavigationBarLoading();
			uni.stopPullDownRefresh();
		},
		timeout:15000,
	})
};
network()
//点击预览
const previewPic = function(index){
		console.log(index);
		console.log(arrs.value);
		const urls = arrs.value.map(item=>{
			return item.url
		});
		console.log(urls);
		uni.previewImage({
			urls,
			current:index
		})
	}
//点击刷新
const onRefresh=function(){
	console.log('点击刷新');
	uni.startPullDownRefresh({
		
	});
}
//点击
const onTop = ()=>{
	console.log('跳到开头');
	uni.pageScrollTo({
		scrollTop:0,
		duration:100
	})
}
//触底更新
onReachBottom(()=>{
	console.log('触底更新')
	network();
	console.log(arrs.value);
})
//下拉刷新
onPullDownRefresh(()=>{
	console.log('下拉刷新!');
	arrs.value = [];
	network();
})
</script>

<style lang="scss" scoped>
	.container{
		.layout{
			padding:50rpx;
			.box{
				margin-bottom:60rpx;
				box-shadow: 0 10rpx 30rpx rgba(0, 0, 0 ,0.08);
				border-radius: 10rpx;
				overflow: hidden;
				.pic{
					image{
						width:100%;
					}
				}
				.text {
					padding:30rpx 0 ;
					
				}
			}
		}
		.float{
			position:fixed;
			right:30rpx;
			bottom:80rpx;
			.item{
				width:90rpx;
				height:90rpx;
				background:rgba(255,255,255,0.9);
				border-radius: 50%;
				display:flex;
				align-items: center;
				justify-content: center;
				border:1px solid #eee;
				margin-bottom: 20rpx;
			}
		}
	}
</style>

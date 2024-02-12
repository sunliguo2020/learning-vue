<template>
	<view class="userLayout pageBg">
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">
				10.10.10.10
			</view>
			<view class="address">来自于：山东</view>
		</view>
		<view class="section">
			<view class="list">
				<navigator class="row" >
					<view class="left">
						<uni-icons type="download-filled" size="20"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</navigator>
				
				<navigator class="row" >
					<view class="left">
						<uni-icons type="star-filled" size="20"></uni-icons>
						<view class="text">我的评分</view>
					</view>
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</navigator>
				
				<navigator class="row" >
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20"></uni-icons>
						<view class="text">联系客服</view>
					</view>
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					<!-- #ifdef MP -->
					<button open-type="contact0">联系客服</button>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<button @click="onContact">拨打电话</button>
					<!-- #endif -->
				</navigator>
			</view>
		</view>
		
		
		<view class="section">
			<view class="list">
				<navigator class="row" >
					<view class="left">
						<uni-icons type="notification-filled" size="20"></uni-icons>
						<view class="text">订阅更新</view>
					</view>
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="15"></uni-icons>
					</view>
				</navigator>
				
				<navigator class="row" >
					<view class="left">
						<uni-icons type="flag-filled" size="20"></uni-icons>
						<view class="text">常见问题</view>
					</view>
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="15"></uni-icons>
					</view>
				</navigator>
			
			</view>
			
		</view>
	</view>
</template>

<script setup>
const onContact =()=>{
	uni.makePhoneCall({
		phoneNumber:"114"
	})
}
</script>

<style lang="scss" scoped>
	.userLayout {
		.userInfo {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding: 50rpx 0;
			
			.avatar {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				overflow: hidden;
			
				image {
					width: 100%;
					height: 100%;
				}
			}
			.ip {
				font-size: 44rpx;
				color: #333;
				padding: 20rpx 0 5 rpx;
			}
			.address {
				font-size: 28rpx;
				color: #aaa;
			}
		}
		.section {
			width:690rpx;
			margin:50rpx auto;
			border:1px solid #eee;
			border-radius:10rpx;
			box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
			.list{
				.row{
					display:flex;
					justify-content: space-between;
					align-items:center;
					padding:0 30rpx;
					height:100rpx;
					border-bottom:1px solid #eee;
					position: relative;
					background:#fff;
					&:last-child{
						border-bottom:0;
					}
					.left {
						display:flex;
						align-items: center;
						.text{
							padding-left:20rpx;
							color:#666;
						}
					}
					.right{
						display:flex;
						align-items: center;
						.text{
							font-size:28rpx;
							color:#aaa;
						}
					}
					button{
						position:absolute;
						top:0;
						left:0;
						height:100rpx;
						width:100%;
						opacity: 0;
					}
				}
			}
		}
	}

</style>
<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper circular indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay>
				<swiper-item v-for="item in 3">
					<image src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="2000" duration="300" circular>
					<swiper-item v-for="item in 10">文字文字内容文字内容文字内容文字内容文字内容文字内容内容</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#28b389">
				</uni-icons>
			</view>
		</view>

		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size=18 color="#28b389"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
						
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in 8">
						<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>

					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">more</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in 8"></theme-item>
			</view>
		</view>

	</view>
</template>

<script setup>

</script>

<style scoped lang="scss">
	.homeLayout {
		.banner {
			width: 750rpx;
			padding: 30rpx 0;

			swiper {
				width: 750rpx;
				height: 340rpx;

				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;

					image {
						height: 100%;
						width: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}

		.notice {
			width: 590rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;

			.left {
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.text {
					color: #28b389;
					font-weight: 600;
					font-size: 28rpx;
				}
			}

			.center {
				flex: 1;

				swiper {
					height: 100%;

					swiper-item {
						height: 100%;
						font-size: 30rpx;
						color: #666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}

			.right {
				width: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

		}

		.select {
			padding-top: 50rpx;
			.date{
				color:#28b389;
				display:flex;
				align-items: center;
				.text{
					margin-left:5rpx;
					
				}
			}
			.content {
				width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;

				scroll-view {
					white-space: nowrap;

					.box {
						width: 200rpx;
						height: 430rpx;
						display: inline-block;
						margin-right: 15rpx;

						image {
							width: 100%;
							heigth: 100%;
							border-radius: 12rpx;
						}
					}

					.box:last-child {
						margin-right: 30rpx;
					}
				}
			}
		}
		.theme{
			padding-top:50rpx;
			.more {
				font-size:32rpx;
				color:#888;
			}
			.content{
				margin-top:30rpx;
				padding:0 30rpx;
				display:grid;
				gap:15rpx;
				grid-template-columns:repeat(3,1fr);
			}
		}
	}
</style>
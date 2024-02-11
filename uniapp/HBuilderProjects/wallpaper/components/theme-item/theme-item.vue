<template>
	<view class="themeitem">
		<navigator url="" class="box">
			<image class="pic" src="../../common/images/classify2.jpg" mode="aspectFill"></image>
			<view class="mask">明星美女</view>
			<view class="tab">三天前更新</view>
		</navigator>
	</view>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.themeitem{
		.box {
			height:340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position:relative;
			.pic {
				width:100%;
				height:100%;
			}
			.mask{
				width:100%;
				height:70rpx;
				position:absolute;
				bottom:0;
				left:0;
				background: rgba(0,0,0,0.2);
				color:#fff;
				display:flex;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(10rpx);
				font-weight: 600;
				font-size: 30rpx;
			}
			.tab {
				position:absolute;
				left:
			}
		}
	}

</style>
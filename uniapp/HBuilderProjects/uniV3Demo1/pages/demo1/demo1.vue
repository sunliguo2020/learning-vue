<template>
	<swiper indicator-dots indicator-color="rgba(255,255,255,0.3)"
	 indicator-active-color="#fff"
	 circular
	 autoplay
	 interval="2000"
	 >
		<swiper-item><image src="../../static/pic1.png"></image></swiper-item>
		<swiper-item><image src="../../static/pic2.png"></image></swiper-item>
		<swiper-item><image src="../../static/pic3.webp"></image></swiper-item>
		<swiper-item><image src="../../static/pic4.jpg"></image></swiper-item>
	</swiper>
	<view class="">
		<image src="../../static/logo.png" class="pic1"></image>
		<image src="../../static/pic2.png" mode='top' ></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	swiper {
		
		background: #ccc;
		width: 300px;
		height: 150px;
	}
	.pic1{
		width:100px;
		height:100px;
	}
</style>
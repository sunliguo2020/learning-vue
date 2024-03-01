<template>
	<view class="preview">
		<swiper>
			<swiper-item v-for="item in 5">
				<image src="@/common/images/preview1.jpg" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	var age = ref(0);
	const formSubmit = function(e) {
			console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
			console.log(e.detail.value)
			console.log(+e.detail.value.age)
			// var formdata = e.detail.value
			// uni.showModal({
			// 	content: '表单数据内容：' + JSON.stringify(formdata),
			// 	showCancel: false
			// });
		}
</script>

<style lang="scss" scoped>
.preview{
	width:100%;
	height:100vh;
	swiper{
		width:100%;
		height:100%;
		image{
			width:100%;
			height:100%
		}
	}
}
</style>
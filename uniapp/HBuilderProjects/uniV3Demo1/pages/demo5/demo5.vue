<template>
	<view>
		<view class='box' @click="onClick" :style="{background:color}">{{num}} </view>
	</view>
	<view>
		<switch @change="onChange(124,$event)">开关</switch>
		<button :loading="isLoading" type="primary">按钮</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const num = ref(1);
	const color = ref('#fc359a')
	const isLoading = ref(false);

	function onClick() {
		// console.log('123');
		num.value++;
		console.log(Math.random().toString().substring(3,9));
		color.value = '#'+Math.random().toString().substring(3,9);
	};

	function onChange(a,e) {
		console.log(e);
		console.log(a)
		isLoading.value = e.detail.value
	}
</script>

<style lang="scss">
	.box {
		width: 200px;
		height: 200px;
		background: orange;
	}
</style>
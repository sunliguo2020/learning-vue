<template>
	<view>
		<view class='box' v-on:click="onClick"></view>
	</view>
	<view>
		<switch  @change="onChange"></switch>
		<button :loading="isLoading" type="primary">按钮</button>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	const isLoading = ref(false);
	function onClick() {
		console.log('123');
	};

	function onChange(e) {
		isLoading.value  = e.detail.value;
		console.log(e);
	}
</script>

<style lang="scss">
	.box {
		width: 200px;
		height: 200px;
		background: orange;
	}
</style>
<template>
	<view>
		<button type="primary" plain>按钮</button>
		<button size='default' type="primary" loading>按钮</button>
		<view>----
		</view>
		<input type="text" placeholder="请输入搜索内容" />
		<view>{{2+34}}</view>
		<view>{{a}}</view>
	</view>
	<view>{{Date.now()}}</view>
	<view>{{Math.random()}}</view>
	<view>{{ 1>2 ?"张三":"李四"}}</view>
	<view>{{fn()}}</view>
</template>

<script setup>
	const a = 5;
	function fn(){
		return "Vue 3 学习"
	}
</script>

<style>

</style>

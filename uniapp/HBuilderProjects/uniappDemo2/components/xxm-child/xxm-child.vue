<template>
	<view>
		子组件
		<!-- <button @click="$emit('add',123)">按钮</button> -->
		<button @click="onClick">按钮</button>
	</view>
</template>

<script setup>
	const emit = defineEmits(['add'])
	function onClick(){
		emit('add',Math.random())
	}
</script>

<style lang="scss">

</style>
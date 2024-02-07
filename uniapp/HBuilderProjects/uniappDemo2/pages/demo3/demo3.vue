<template>
	<view>
		<xxm-child @add="onAdd"></xxm-child>
		<view>{{num}}</view>
	</view>
</template>

<script setup>
	import {ref} from "vue";
	const num = ref('');
	const onAdd = function(e){
		console.log(e)
		num.value = e
	};
</script>

<style lang="scss" scoped>

</style>

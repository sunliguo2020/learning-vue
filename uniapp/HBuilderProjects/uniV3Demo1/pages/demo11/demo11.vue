<template>
	<view class="out">
		<input type="text" v-model="person" />
		{{person}}
	</view>
</template>

<script setup>
	import {
		ref,
		watch
	} from "vue";
	const person = ref("");
	watch(person, (newValue, oldValue) => {
		console.log(newValue);
		console.log(oldValue);
	});
</script>

<style lang="scss" scoped>
	.out {
		padding: 10px 10px;
		margin:0 30px;

		input {
			border: 1px solid orange;
			padding: 0 10px;
		}
	}
</style>
<template>
	<view>
		<demo-child ref="child" ></demo-child>
		<button @click='update'>点击修改子值</button>
		<navigator url="/pages/demo6/demo6?name=王五&age=20">跳转到demo6</navigator>
	</view>
</template>

<script setup>
	import {ref,
		onMounted
	} from 'vue';
	const child = ref(null);
	const update = function (){
		child.value.updateCount();
	}
	onMounted(() => {
		console.log(child.value)
	})
</script>

<style lang="scss" scoped>

</style>
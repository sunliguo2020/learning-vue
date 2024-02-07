<template>
	<view view="layout">
		<scroll-view scroll-y="true" class="scroll" ref="scroll">
			<view></view>
		</scroll-view>
		<life-demo v-if='show'></life-demo>

	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from "vue";
	const scroll = ref(null);
	console.log(scroll.value);
	onMounted(()=>{
		console.log(scroll.value);
	})
	const show = ref(true);
	setTimeout(()=>{
		show.value = false
	},2000)
</script>

<style lang="scss" scoped>

</style>
<template>
	<view class='out'>
		姓：<input type='text' v-model="firstName" placeholder="请输入名"/>
		名：<input type='text' v-model="lastName" placeholder="请输入姓"/>
		<view >全称：{{fullName}}</view>

	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from "vue";
	const firstName = ref('');
	const lastName = ref('');
	const fullName = computed(()=>{
		if (firstName.value.length>0 && lastName.value.length>0) {
			return firstName.value + '-' + lastName.value;
		}
		
	})
</script>

<style lang="scss" scoped>
	.out {
		padding: 20px;

		input {
			border: 1px solid orange;
			margin: 10px, 0;
			padding: 0 10px;
		}
	}
</style>
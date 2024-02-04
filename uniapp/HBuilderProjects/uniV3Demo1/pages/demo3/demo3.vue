<template>
	<view>
		<view>{{num1}}</view>
		<view>{{num2}}</view>
		<view>{{arr[2]}}</view>
		<view>{{obj.name}}</view>
		<view>{{obj}}</view>
		<view>{{obj.name}}</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	let num1 = 5;
	// setInterval(()=>{
	// 	num1++;
	// 	console.log(num1)
	// },1000)
	let num2 = ref(10);
	console.log(num2)
	setInterval(()=>{
		num2.value++;
		console.log(num2.value)
	},1000);
	let test = ref('咸虾米');
	let arr =ref([1,2,3,4])
	let obj = ref({
		name:'王五',
		age:18
	})
</script>

<style>

</style>
<template>
	<view>
		<button type='primary' :loading="false">按钮</button>
		<image v-bind:src="arrs[1]"></image>
		<image :src="picurl"></image>
	</view>
	<view class='box' :class="{active:isActive}">v-bind指令</view>
	<view class='box' :style="{width:'300px',height:260+'px',fontSize:size+'px'}" >内联样式</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	
	const isActive = ref(false);
	const picurl = ref("../../static/pic1.png")
	const size = ref(30)
	const arrs = ref(["../../static/pic1.png",
		"../../static/pic2.png",
		"../../static/pic3.webp",
		"../../static/pic4.jpg",
	])
	let i = 0;
	setInterval(()=>{
		i++;
		picurl.value = arrs.value[i%4];
		isActive.value = !isActive.value;
		size.value= size.value+i;
		console.log(size.value)
	},2000)
</script>

<style lang='scss'>
	.box{
		width:200px;
		height: 200px;
		background:orange;
		font-size: 20px;
	}
	.active{
		background:green;
		color:"#fff"
	}
</style>
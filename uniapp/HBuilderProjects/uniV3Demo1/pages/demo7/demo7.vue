<template>
	<view class='out'>
		<view v-for="(item,index) in goods" :key="item.id">
		<view class="item">
			<checkbox></checkbox>
			<text class='title'>{{item.name}}</text>
			<text @click="remove(index)">删除</text>
		</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue"
const goods = ref([
	{id:11,name:'小米'},
	{id:22,name:'华为'},
	{id:33,name:'苹果'},
	{id:44,name:'oppo'},
]);
function remove(index){
	console.log(index);
	goods.value.splice(index,1);
}
</script>

<style lang="scss" scoped>
.item {
	padding: 10px;
	.title{
		padding-right: 39px;
	}
}
</style>

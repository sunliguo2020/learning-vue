<template>
	<view class='out'>
		<checkbox-group @change="itemChange">
			<view v-for="(item,index) in goods" :key="item.id">

				<view class="item">
					<checkbox :value="item.id" :checked="item.checked"></checkbox>
					<text class='title'>{{item.name}}</text>
					<text class="price">{{item.price}}</text>
					<text @click="remove(index)" class='del'>删除</text>
				</view>

			</view>
			{{selectGroup}}
		</checkbox-group>
		<view class="card">
			{{goods}}
			<view class='text'>
				选中{{selectGroup.length}}个产品，总价：{{totalPrice}}元
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,computed
	} from "vue";
	const selectGroup = ref([]);
	const totalPrice = computed(()=>{
		return goods.value.filter(item=>item.checked).reduce((prev,curr)=>prev+curr.price,0)
	})
	const goods = ref([{
			id: "11",
			name: '小米',
			price: 9999,
			checked: false
		},
		{
			id: "22",
			name: '华为',

			price: 5899,
			checked: false
		},
		{
			id: "33",
			name: '苹果',
			price: 2988,
			checked: false
		},
		{
			id: "44",
			name: 'oppo',
			price: 4999,
			checked: false
		},
	]);

	function remove(index) {
		console.log(index);
		goods.value.splice(index, 1);
	};

	function itemChange(e) {
		console.log(e);
		console.log(e.detail.value)
		selectGroup.value = e.detail.value;
		goods.value.forEach(item=>{
			item.checked = selectGroup.value.includes(item.id);
		})
	}
</script>

<style lang="scss" scoped>
	.item {
		padding: 10px;

		.title {
			padding-right: 39px;
		}

		.price {
			padding: 0 10px;
		}

		.del {}
	}

	.card {
		margin-top: 30px;
		border-top: 1px solid #eee;
		padding-top: 10px;
	}
</style>
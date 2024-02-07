<template>
	<view class='userinfo'>
		<image :src="avatar" mode=""></image>
		<view class="username">{{username}}</view>
	</view>
</template>

<script setup>
	// // 子组件声明
	// const props = defineProps(['username', 'avatar'])
	// console.log(props)
	const props = defineProps({
		username:{
			type:String,
			default:'匿名'
		},
		avatar:{
			type:String,
			default:'../../static/logo.png'
		}
	})
	
</script>

<style lang="scss" scoped>
	.userinfo {
		width: 100%;
		background: #ccc;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		image {
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}

		.username {
			font-size: 10px;
			padding: 10px 0;
		}
	}
</style>
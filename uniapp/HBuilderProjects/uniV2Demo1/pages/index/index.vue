<template>
<view class="box">
<h1>uniapp<span class="row">零基础</span>入门</h1>
<pubTitle></pubTitle>
</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.box {
		width:300px;
		height:300px;
		background: pink;
		h1{
			font-size:40px;
			color:red;
			.row{
				font-style: italic;
			}
		}
	}
</style>

<template>
	<view>
		<text>{{textvalue}}</text>
		<!-- <text>{{globalvar}}</text> -->
		<button :type='buttontype' @click='changetextvalue'>修改为789</button>

	</view>
</template>

<script>
	var globalvar = 1;

	function globalfun() {
		console.log(globalvar)
	}
	export default {
		data() {
			return {
				textvalue: "123",
				buttontype: 'primary'
			};
		},
		onLoad() {
			globalvar = 2;
			globalfun();
			this.textvalue = '456'
		},
		methods: {
			changetextvalue() {
				this.textvalue = '789'
			}
		}
	}
</script>

<style>

</style>
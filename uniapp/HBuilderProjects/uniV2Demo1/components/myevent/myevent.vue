<template>
	<view>
		<input type="text" placeholder="请输入" @input="onInput" @click="$emit('somevent')">
	</view>
</template>

<script>
	export default {
		name:"myevent",
		data() {
			return {
				
			};
		},
		methods:{
			onInput(e){
				console.log(e.detail.value);
				this.$emit('myevent',123123);
			}
		}
	}
</script>

<style lang="scss">

</style>
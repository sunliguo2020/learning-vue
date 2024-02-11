<template>
	<view>
		<!-- <myevent @myevent="onmyevent" @click.native="onclick" @someevent="onsomeevent"></myevent> -->
		<myevent></myevent>
	</view>
	
</template>

<script>
	export default {
		emits:[],
		data() {
			return {
				list_title:'自定义首页'
			};
		},
		methods:{
			onmyevent(e){
				console.log(e)
			},
			onclick(){
				console.log('onclick,123')
			},
			onsomeevent(e){
				console.log('addfasf',e)
			}
		}
	}
</script>

<style lang="scss">

</style>

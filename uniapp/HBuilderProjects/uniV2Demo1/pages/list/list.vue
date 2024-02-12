<template>
	<view>
		<!-- <myevent @myevent="onmyevent" @click.native="onclick" @someevent="onsomeevent"></myevent> -->
		<myevent></myevent>
		<button @click="state=true">开启</button>
		<mypop :state="state" @stateEnv='change'></mypop>
	</view>
	
</template>

<script>
	export default {
		emits:[],
		data() {
			return {
				list_title:'自定义首页',
				state:false,
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
			},
			change:function (e){
				this.state=false;
			}
		}
	}
</script>

<style lang="scss">

</style>

<template>
	<view>
		弹出框样式
		<view class="box" :style="{height:state?'300rpx':'0'}">
			
		</view>
		<button size="mini" @click="onClose">关闭</button>
	</view>
</template>

<script>
	export default {
		name:"mypop",
		props:{
			state:{
				default:false,
				type:Boolean
			}
		},
		methods:{
			onClose:function(e){
				console.log(e);
				// this.state=false;
				this.$emit('stateEnv',false)
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.box{
		height:300rpx;
		width:300rpx;
		background: pink;
	}

</style>
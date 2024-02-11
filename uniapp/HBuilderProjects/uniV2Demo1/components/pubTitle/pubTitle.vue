<template>
	<view class="pubTitle">
		<view class="big">{{title}}</view>
		<view class="small">{{subtitle}}</view>
		<view class="line"></view>
		<view >{{time}</view>
		<view >{{list}}</view>
		<view>{{obj}}</view>
	</view>
</template>

<script>
	export default {
		name:"pubTitle",
		// props:['title','subtitle'],
		props:{
			title:{
				default:'标题',
				type:String,
			},
			subtitle:{
				default:'subtitle',
				require:true,
			},
			time:{
				default:Date.now(),
				type:Number
			},
			list :{
				type:Array,
				default:function(){
					return [1,2,3,4]
				}
			},
			obj:{
				default:()=>({name:'张三'}),
				// type:Object
			}
		},
		
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.pubTitle{
	padding :60rpx 30rpx;
	text-align: center;
	background: #95e1d3;
	.big{
		font-size:50rpx;
		font-weight: 600;
		color:#333;
	}
	.small{
		font-size: 28rpx;
		color:#888;
	}
	.line{
		display:inline-block;
		width:80rpx;
		height:8rpx;
		background: #1aa034;
		border-radius: 10rpx;
		
	}
}
</style>
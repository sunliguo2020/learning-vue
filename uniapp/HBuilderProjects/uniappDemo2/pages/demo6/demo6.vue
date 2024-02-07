<template>
	<view>
	<navigator url='/pages/demo4/demo4' open-type="reLaunch">跳转到demo4</navigator>
	<view v-for="item in 100">{{item}}</view>
	
	<view class="fixed" v-if="fixed">向上箭头
		</view>
	</view>
	
</template>

<script setup>
	import {
		onLoad,onReady,onShow,onHide,onUnload,onPageScroll
	} from "@dcloudio/uni-app";
	import {ref} from "vue";
	const fixed = ref(false)
	onLoad((e)=>{
		console.log("onload函数");
		console.log("我是参数e:",e)
	} )
	onReady(()=>{
		console.log(scroll.value)
	});
	onShow(()=>{
		console.log('onShow函数')
	});
	onHide(()=>{
		console.log('onHide函数')
	});
	onUnload(()=>{
		console.log("onUnload被调用")
	}
	);
	onPageScroll((e)=>{
		console.log(e);
		fixed.value = e.scrollTop >200;
	})
</script>

<style lang="scss" scoped>
.fixed{
	width:100px;
	height:100px;
	background:orange;
	position: fixed;
	right:30px;
	bottom:30px;
}
</style>
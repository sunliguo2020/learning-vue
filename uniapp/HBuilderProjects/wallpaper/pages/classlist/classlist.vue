<template>
	<view class="classlist">
		<view class="loadingLayout" v-if="!classList&&!noData">
			<uni-load-more status="loading"></uni-load-more>
		</view>
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item in classList" :key="item.key">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
	<view class="loadingLayout" v-if="classList || noData">
		<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	import {
		onLoad,
		onReachBottom
	} from "@dcloudio/uni-app"
	import {
		apiGetClassList
	} from "@/api/apis.js"
	
	const noData = ref(false);
	const classList = ref([]);
	const queryParms = {
		pageNum:1,
		pageSize:12
	};

	onLoad((e) => {
		console.log(e);
		let {
			id = null, name = null
		} = e;
		console.log(id, name);
		queryParms.classid = id;
		uni.setNavigationBarTitle({
			title: name
		})
		getClassList();
	});
	
	onReachBottom(()=>{
		queryParms.pageNum++;
		if (noData.value){
			return ;
		}
		getClassList();
	})
	//获取分类信息
	const getClassList = async () => {
		let res = await apiGetClassList(queryParms);
		classList.value = [...classList.value,...res.data];
		console.log(res.data);
		if (queryParms.pageSize > res.data.length){
			noData.value = true;
		}
	}
</script>

<style lang="scss" scoped>
	.classlist {
		.content {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5rpx;
			padding: 5rpx;

			.item {
				height: 440rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
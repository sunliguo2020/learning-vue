<template>
	<view>
		
	</view>
</template>

<script setup>

</script>

<style scoped>
	.page{width:100%;min-height:100vh;orverflow:hidden;}
	.header{width:100%;background-color:#eb1625;overflow:hidden;position: fixed;left:0;top:0;z-index:90;}
	.header .search-header{width:100%;height:170rpx;margin-top:40rpx;padding-bottom:20rpx;display:flex;justify-content: center;align-items: flex-end;}
	.header .search-header.ipx{height:210rpx;}
	.header .search-wrap{width:80%;height:52rpx;background-color:rgba(255,255,255,0.9);border-radius: 5px;display: flex;align-items: center;}
	.header .icon{width:44rpx;height:44rpx;background-image:url("@/static/images/main/search_icon.png");background-size:100%;background-position: center;background-repeat: no-repeat;margin:0 20rpx;}
	.header .text{color:#999999;font-size:28rpx;}

	.shop-main{width:100%;margin-top:220rpx;}
	.shop-main .shop-list{width:100%;border-bottom:1px solid #EFEFEF;box-sizing: border-box;padding:20rpx 0;}
	.shop-main .shop-list .shop-wrap{width:92%;margin:0 auto;display:flex;}
	.shop-main .shop-list .shop-wrap .image{width:160rpx;height:160rpx;margin-right:20rpx;}
	.shop-main .shop-list .shop-wrap .image image{width:100%;height:100%;border-radius: 5px;}
	.shop-main .shop-list .shop-info{width:72%;clear: both;}
	.shop-main .shop-list .shop-info .shop-name{width:100%;height:44rpx;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;font-size:32rpx;font-weight: bold;}
	.shop-main .shop-list .shop-info .distance{font-size:28rpx;margin-top:10rpx;color:#666666}
	.shop-main .shop-list .shop-info .address{font-size:28rpx;margin-top:10rpx;color:#666666;width:100%;height:44rpx;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;}
	.shop-main .shop-list .shop-info .pack-btn{padding:10rpx 20rpx;background-color:#eb1625;font-size:28rpx;color:#FFFFFF;display: table;border-radius: 5px;float: right;margin-top:10rpx;}
</style>

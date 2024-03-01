<template>
	<view class="page">
		<view class="status_bar bg_color"></view>
		<view class="header">
			<view :class="{'search-header':true,'ipx':false}"></view>
			<view class="search-wrap">
				<view class="icon"></view>
				<view class="search">输入商家名或菜品</view>
			</view>
		</view>
		<view :class="{'shop-main':true,ipx:false}">
			<view class="shop-list">
				<view class="image">

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapActions} from "vuex";
	export default {
		data() {
			return {
				isShow:false
			}
		},
		onLoad() {
			this.lng=0;//经度
			this.lat=0;//纬度
			this.maxPage=0;//总页数
			this.curPage=1;//当前页码
		},
		onShow(){
			uni.getSetting({
				success:(res)=> {
					//用户没有开启地位位置
					if(!res.authSetting['scope.userLocation']){
						uni.showModal({
							title: '开启获取地理位置',
							content: '请打开"位置信息"权限，找到附近的店铺',
							success: (res)=> {
								if (res.confirm) {
									//调起客户端小程序设置界面
									uni.openSetting({
										success:(res2)=> {
											//如果用户打开了地理位置
											if(res2.authSetting['scope.userLocation']){
												uni.getLocation({
													type: 'gcj02',
													success:  (res)=> {
														this.lng=res.longitude;
														this.lat=res.latitude;
														this.getShop({page:1,lng:this.lng,lat:this.lat,success:(pageNum)=>{
																this.maxPage=pageNum;
															}
														});
													}
												});
											}
										}
									});
								}
							}
						});
					}
				}
			})
			uni.getLocation({
				type: 'gcj02',
				success:  (res)=> {
					this.lng=res.longitude;
					this.lat=res.latitude;
					this.getShop({page:1,lng:this.lng,lat:this.lat,success:(pageNum)=>{
							this.maxPage=pageNum;
						}
					});
				}
			});
		},
		methods: {
			...mapActions({
				getShop:"business/getShop",
				getShopPage:"business/getShopPage"
			}),
			goPage(url){
				uni.redirectTo({
					url
				})
			}
		},
		computed:{
			...mapState({
				isIpx:state=>state.system.isIpx,
				shops:state=>state.business.shops
			})
		},
		//分享小程序
		onShareAppMessage(res) {
			return {
				title: '点餐小程序',
				path: '/pages/main/main'
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.curPage=1;
			this.getShop({page:this.curPage,lng:this.lng,lat:this.lat,complete:()=>{
					uni.stopPullDownRefresh();
				}
			});
		},
		//上拉加载数据
		onReachBottom(){
			if(this.curPage<this.maxPage) {
				this.curPage++;
				this.getShopPage({page:this.curPage,lng:this.lng,lat:this.lat});
			}
		},
	
	}
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
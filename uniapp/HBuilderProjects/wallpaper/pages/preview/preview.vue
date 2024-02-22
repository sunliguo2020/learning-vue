<template>
	<view class="preview">
		<!-- 壁纸轮播 -->
		<swiper circular @change="swiperChange" :current="currentIndex">
			<swiper-item v-for="(item,index) in picList" :key="item._id">
				<image v-if="readImgs.includes(index)" @click="maskChange" :src="item.picurl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<!-- 遮罩层 -->
		<view v-if="maskState" class="mask">
			<view class="goBack" :style="{top:getStatusBarHeight()+'px'}" @click="goBack">
				<uni-icons type="back" color="#fff" size="20"></uni-icons>
			</view>
			<view class="count">{{currentIndex+1}} / {{picList.length}}</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>

				<view class="box" @click="clickScore">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">{{currentInfo.score}}分</view>
				</view>

				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>

		</view>

		<!-- 弹出框 -->
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18" color='#999'></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">

						<view class="row">
							<view class="label">壁纸ID：</view>
							<text selectable class='value'>{{currentInfo._id}}</text>
						</view>

						<view class="row">
							<view class="label ">分类：</view>
							<text selectable class='value class'>明星美女</text>
						</view>

						<view class="row">
							<view class="label">发布者：</view>
							<text selectable class='value'>{{currentInfo.nickname}}</text>
						</view>

						<view class="row">
							<view class="label">评分：</view>
							<view class="value rate_box">
								<uni-rate @change="onChange" :value="currentInfo.score"></uni-rate>
								<text selectable class='score'>{{currentInfo.score}}分</text>
							</view>
						</view>

						<view class="row">
							<view class="label">摘要：</view>
							<view class="value">
								<text selectable class='value'>
									{{currentInfo.description}}
								</text>
							</view>
						</view>

						<view class="row">
							<view class="label">标签：</view>
							<view class="value tabs">
								<text selectable class='tab' v-for="(item,index) in currentInfo.tabs" :key="index">
									{{item}}
								</text>
							</view>
						</view>

					</view>

				</scroll-view>
			</view>
		</uni-popup>

		<!-- 评分弹窗 -->
		<uni-popup ref="scorePopup" :is-mask-click="false">
			<view class="scorePopup">
				<view class="popHeader">
					<view></view>
					<view class="title">{{isScore?'已经评过分了':'壁纸评分'}}</view>
					<view class="close" @click="clickScoreClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<view class="content">
					<uni-rate v-model="userScore" allow-half @change="" :disabled="isScore" />
					<text class="text">{{userScore}}分</text>
				</view>
				<view class="footer">
					<button @click="submitScore" :disabled="!userScore||isScore" type="default" size="mini"
						plain>确认评分</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import {
		getStatusBarHeight
	} from "@/utils/system.js";
	import {
		onShow,
		onLoad
	} from "@dcloudio/uni-app";

	import {
		apiGetSetupScore
	} from '@/api/apis.js'

	const maskState = ref(true);
	const infoPopup = ref(null);
	const scorePopup = ref(null);
	const userScore = ref(0);
	const picList = ref([]);
	const currentId = ref(null);
	const currentIndex = ref(0);
	const currentInfo = ref(null);
	const readImgs = ref([]);
	const isScore = ref(false);
	//获取缓存中的数据
	const storageClissList = uni.getStorageSync("storageClissList");

	picList.value = storageClissList.map(item => {
		return {
			...item,
			picurl: item.smallPicurl.replace('_small.webp', ".jpg"),
		}
	});
	console.log("storageClissList", storageClissList);

	onLoad((e) => {
		// console.log('e.id',e.id);
		// console.log('currentId',currentId.value);
		currentId.value = e.id;
		//当前图片的 索引
		currentIndex.value = picList.value.findIndex(item => item._id === currentId.value);
		currentInfo.value = picList.value[currentIndex.value];
		readImgsFun();
	});

	//更新图片索引
	const swiperChange = (e) => {
		currentIndex.value = e.detail.current;
		currentInfo.value = picList.value[currentIndex.value];
		console.log('当前图片信息：', currentInfo.value);
		readImgsFun();
	};

	//已经浏览的图片
	function readImgsFun() {
		readImgs.value.push(
			currentIndex.value <= 0 ? picList.value.length - 1 : currentIndex.value - 1,
			currentIndex.value,
			currentIndex.value >= picList.value.length - 1 ? 0 : currentIndex.value + 1
		);

		readImgs.value = [...new Set(readImgs.value)]
	};

	//info 弹窗关闭按钮
	const clickInfoClose = () => {
		infoPopup.value.close();
	};
	//info弹窗
	const clickInfo = () => {
		infoPopup.value.open();
	};
	//评分弹窗
	const clickScore = () => {
		console.log('评分弹窗', currentInfo.value);
		if (currentInfo.value.userScore) {
			isScore.value = true;
			userScore.value = currentInfo.value.userScore;
			console.log(userScore.value);
		}
		scorePopup.value.open('center');
		infoPopup.value.close();
	}
	//评分弹窗关闭
	const clickScoreClose = (e) => {
		// console.log(e)
		scorePopup.value.close();
		userScore.value = 0;
		isScore.value = false;
	}
	//确认评分
	const submitScore = async () => {
		console.log(userScore.value);
		console.log(userScore);

		let {
			classid,
			_id: wallId
		} = currentInfo.value;

		let res = await apiGetSetupScore({
			classid,
			wallId,
			userScore: userScore.value
		});
		if (res.errCode === 0) {
			uni.showToast({
				title: "评分成功",
				icon: 'none'
			});
			picList.value[currentIndex.value].userScore = userScore.value;
			uni.setStorageSync("storageClissList", picList.value);
			clickScoreClose();
		}
		console.log(res);
	};
	//遮罩层状态
	const maskChange = () => {
		console.log(maskState);
		maskState.value = !maskState.value
	};
	//星级评分
	const onChange = function(e) {
		console.log('rate发生改变:' + JSON.stringify(e));
		userScore.value = e.value;
	}
	//返回
	const goBack = () => {
		uni.navigateBack();
	}
</script>

<style lang="scss" scoped>
	.preview {
		width: 100%;
		height: 100vh;
		position: relative;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.mask {
			&>view {
				position: absolute;
				left: 0;
				margin: auto;
				color: #fff;
				right: 0;
				width: fit-content;
			}

			.goBack {
				width: 38rpx;
				height: 38rpx;
				background: rgba(0, 0, 0, 0.5);
				left: 30rpx;
				margin-left: 0;
				border-radius: 100rpx;
				top: 0;
				backdrop-filter: blur(10rpx);
				border: 1rpx solid rgba(255, 255, 255, 0.3);
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.count {
				top: 10vh;
				background: rgba(0, 0, 0, 0.3);
				font-size: 28rpx;
				color: #fff;
				border-radius: 40rpx;
				padding: 8rpx 28rpx;
				backdrop-filter: blur(10rpx);
			}

			.time {
				font-size: 140rpx;
				top: calc(10vh + 80rpx);
				font-weight: 100;
				line-height: 1em;
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
			}

			.date {
				font-size: 34rpx;
				top: calc(10vh + 230rpx);
				text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
			}

			.footer {
				background: rgba(255, 255, 255, 0.8);
				bottom: 10vh;
				width: 65vw;
				height: 120rpx;
				border-radius: 120rpx;
				color: #000;
				display: flex;
				justify-content: space-around;
				align-items: center;
				box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(20rpx);

				.box {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 2rpx 12rpx;

					// border:1px solid red;
					.text {
						font-size: 26rpx;
						color: $text-font-color-2;
					}
				}
			}
		}

		.popHeader {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				color: $text-font-color-2;
				font-size: 26rpx;
			}

			.close {
				// border: 1px solid red;
				padding: 6rpx;
			}
		}

		.infoPopup {
			background: #fff;
			padding: 30rpx;
			border-radius: 30rpx 30rpx 0 0;
			overflow: hidden;

			scroll-view {
				max-height: 60vh;

				.content {
					.row {
						display: flex;
						padding: 16rpx 0;
						font-size: 32rpx;
						line-height: 1.7em;

						.label {
							color: $text-font-color-3;
							width: 140rpx;
							text-align: right;
							font-size: 30rpx;
						}

						.value {
							flex: 1;
							width: 0;

						}

						.rate_box {
							display: flex;
							align-items: center;

							.score {
								font-size: 26rpx;
								color: #text-font-color-2;
								padding-left: 10rpx;
							}
						}

						.tabs {
							display: flex;
							flex-wrap: wrap;

							.tab {
								border: 1px solid $brand-theme-color;
								color: $brand-theme-color;
								font-size: 22rpx;
								padding: 10rpx 30rpx;
								border-radius: 40rpx;
								line-height: 1em;
								margin: 0 10rpx 10rpx 0;
							}
						}

						.class {
							color: $brand-theme-color;
						}
					}
				}
			}
		}

		.scorePopup {
			background: #fff;
			padding: 30rpx;
			width: 70vw;
			border-radius: 30rpx;

			.content {
				padding: 30rpx 0;
				display: flex;
				justify-content: center;
				align-items: center;

				.text {
					color: #FFCA3E;
					padding-left: 10rpx;
					width: 80rpx;
					line-height: 1em;
					text-align: right;
					font-size: 28rpx;
				}
			}

			.footer {
				padding: 10rpx 0;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
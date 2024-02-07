<template>
	<view>
		分类页面
		<button @click="select" type="primary">选择学历</button>
		<button @click="showModal">模态框</button>
	</view>
</template>

<script setup>
	setTimeout(()=>{
		uni.setNavigationBarTitle({
			title:"动态白头",
		})
	},2000)
	const showModal = function(){
		uni.showModal({
			title: '是否删除',
			content: '删除后不能恢复！',
			// showCancel:false,
			cancelText: 'no',
			cancelColor: "#999",
			confirmText: 'Yes',
			confirmColor: "red",
			editable: true,
			success: res => {
				console.log(res);
				if (res.confirm) {
					uni.showToast({
						title: "删除成功",
					})
				}
			}
		})
	};

	function select() {
		uni.showActionSheet({
			"title":"请选择",
			itemList: ['高中', '大专', '本科', '研究生'],
			complete: res => {
				console.log("complete:",res);
			},
			success: function(res) {
				console.log('success:',res);
				console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
			},
			fail: function(res) {
				console.log('fail:',res);
				console.log(res.errMsg);
			}
		})
	}
</script>

<style lang="scss" scoped>

</style>
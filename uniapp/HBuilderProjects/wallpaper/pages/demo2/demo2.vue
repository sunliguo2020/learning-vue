<template>
	<view>
		
	</view>
</template>

<script >
	export default {
		onLoad(){
			console.log(this.getData())
		},
		methods:{
			getData(){
			  //获取分类列表id
			  uni.request({
			    url:"https://ku.qingnian8.com/dataApi/news/navlist.php",
			    success:res=>{
			     console.log(res)
			    }
			  })
			} 
		}
	}
</script>

<style lang="scss" scoped>

</style>

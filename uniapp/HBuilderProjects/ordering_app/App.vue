<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
			width:100%;
			min-height: 100%;
			font-size:16px;
			display:flex;
		}
		m-input{
			width: 100%;
			display:flex;
			flex:1;
		}
		input,button{
			border:0 none;
			outline: none;
			border-radius: 0px;
			
		}
		button::after{
			border: 0 none;
			outline:none;
			border-line:0px;
		}
		.status_bar{
			height: var(--status-bar-height);
			width:100%;
		}
		.no-data{
			width:100%;
			text-align: center;
			font-size:32rpx;
			position: absolute;
			left:50%;
			top:30%;
			z-index:3;
			transform:translate(-50%,-80%);
		}
</style>

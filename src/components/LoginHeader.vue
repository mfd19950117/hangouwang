<template>
	<header id="header">
		<div class="header-l">
			<router-link to="/home">
				<i class="iconfont icon-shouye"></i>
			</router-link>
		</div>
		<div class="header-t">登录</div>
			
		
		<div class="header-r">
			<router-link to="/register">注册</router-link>
		</div>
	</header>
</template>

<script>
	
	export default{
		
	}
</script>

<style scoped>
#header{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.header-l,.header-r{
	display: flex;
	margin-top:10px;
	width:10%;
	height:37px;
	align-items: center;
	align-content: center;
	justify-content: center;
	color:#333333;
}
.header-l>a>i{
	color:#666;
	font-size: 18px;
}
.header-r>a{
	color:#ED5564;
	font-size: 15px;
}
.header-t{
	margin-top:15px;
	font-size:20px;
	
}	
</style>
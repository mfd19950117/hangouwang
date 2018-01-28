<template>
	<header id="header">
		<mt-header title="购物车">
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			    
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
	</header>
</template>

<script>
	
	export default{
		
	}
</script>

<style scoped>
.mint-header{
	background:#e7e7e9 ;
	color:#333;
	font-size: 16px;
	margin-top:10px;
}	
</style>
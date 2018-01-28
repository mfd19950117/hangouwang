<template>
	<header id="header" class="mm">		
		  	<div class="logo"></div>
		    <div class="header-wrap">
		      <a href="javascript:;" class="a-inp"> <i class="icon1"></i> </a>
			  <a href="javascript:;" class="mm-cart"></a>
		    </div>
	</header>
</template>

<script>
  import Vue from 'vue';
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
	export default{
		
	}
</script>

<style scoped>
.mm{
	height:43px;
	padding:10px;		
}
.mm>.logo{	
	width: 33.3%;
    float: left;
    height: 45px;
	background: url(../img/home_logo.png) no-repeat center;
}
.mm>.header-wrap{
	width: 66.6%;
    height: 45px;
    line-height: 45px;
    float: left;
    display: block;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
}
.mm>.header-wrap>.a-inp{
	width: 70%;
    border: solid 1px #ccc;
    border-radius: 20px;
    height: 35px;
    background: #fff;
    overflow: hidden;
    position: relative;
    display: inline-block;
    margin-top:4px;
}
.mm>.header-wrap>.a-inp>.icon1{
	display: block;
    width: 35px;
    height: 35px;
	background: url(../img/search_ico.png) no-repeat center;
	background-size: 55%;
    float: right;
}
.mm>.header-wrap>.mm-cart{
    width: 40px;
    height: 40px;
	background: url(../img/cart_b.png) no-repeat center;
	background-size: 65%;
	float: right;
	margin-top:2px;
	margin-right:15px;
}
</style>
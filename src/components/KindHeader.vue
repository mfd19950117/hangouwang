<template>
	<header id="header">
		<div class="header-l">
			<a href="javascript:history.go(-1)">
				<i class="iconfont icon-disclosureindicator"></i>
			</a>
		</div>
		<div class="header-inpt">
			<span class="search-inpt" id="keyword">请输入关键字</span>
			<i class="icon2"></i>
		</div>
		<div class="header-r">
			<a href="">
				<i class="iconfont icon-iconfontgengduo"></i>
			</a>
		</div>
	</header>
</template>

<script>
  import Vue from 'vue';
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  export default {
    methods:{
      back(){
        history.back();
      }
    }
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
.header-l>a>i,.header-r>a>i{
	color:#333333;
}
.header-inpt{
	display: flex;
	width:60%;
	height:37px;
	margin-top:10px;
}
.header-inpt>.search-inpt{
	width:80%;
	height:35px;
	line-height: 35px;
    color: #BBB;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 20px;
    border: solid 1px #ccc;
    text-indent: 40px;
    margin-left:15px;
}
.icon2{
	display: block;
	width: 35px;
    height: 35px;
    float: right;
	background: url(../img/search_ico.png) no-repeat center;
	background-size: 55%;
	margin-left:10px;
}
</style>
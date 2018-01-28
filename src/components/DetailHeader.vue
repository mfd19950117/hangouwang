<template>
	<header id="header">
		<!--<button @click="back()">返回</button>
		产品详情
		<router-link to="/cart">
			<i class="iconfont icon-icon1"></i>
		</router-link>-->
		
		<mt-header title="商品详情">
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			    
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
	</header>	
</template>

<script>
  import Vue from 'vue';
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
	import MyAjax from "@/md/MyAjax.js"
	export default{
		methods:{
			back(){
				history.back()
			}
		}
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
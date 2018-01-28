<template>
	<footer id="footer1">
		<ul>
			<li >
				<router-link to="/">
					<i class="iconfont icon-kefu1"></i>
					客服
				</router-link>
			</li>
			<li >
				<router-link to="/cart">
					<i class="iconfont icon-gouwuche"></i>
					购物车
				</router-link>
			</li>			
			<li >
				立即购买
			</li>
			<li  @click="addCart()">
				加入购物车
			</li>
		</ul>
	</footer>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js"
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			/*
             * 此处有坑
             * 判断有没有登录，登录之后再加入，否则先登录
             */
			addCart(){
				var userID = localStorage.getItem("userID");
				var goodsID = this.$route.params.goodsID;
				var number = 1;
				var url ="http://datainfo.duapp.com/shopdata/updatecar.php";
				url+="?userID="+userID+"&goodsID="+goodsID+"&number=1";
				MyAjax.fetch(url,(data) =>{
					console.log(data);
					if(data=="1"){
						alert("加入购物车成功")
					}else{
						alert("gg")
					}
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">
  @charset "utf-8";
  @import "~@/lib/reset.scss";
 #footer1{
 	opacity: 1;
 	height:45px;
 } 
 ul{
 	@include rect(100%, 100%);
 	@include flexbox();
 	
 	li{
 		@include flexbox();
 		@include flex-direction(column);
 		@include justify-content();
 		@include align-items();
 		a{
 			@include rect(100%,  100%);
            @include flexbox();
             @include flex-direction(column);
             @include justify-content();
             @include align-items();@include textcolor(#333);
 		}
 	}
 }
 #container #footer1 ul li{
 	&:nth-child(1){
 		@include flex(1.5);
 		@include rect(auto, 100%);
 		@include bgcolor(#DDD);
 		
 	}
 	&:nth-child(2){
 		@include flex(2);
 		@include rect(auto, 100%);
 		@include bgcolor(#DDD);
 	}
 	
    &:nth-child(3){
         @include bgcolor(#ED5564);
         @include textcolor(#fff);
         @include flex(3.5);
         @include rect(auto, 100%);         
         @include font-weight(600);
       }
       &:nth-child(4){
         @include bgcolor(#FB6E52);
         @include textcolor(#fff);
         @include flex(4);
         @include rect(auto, 100%);         
         @include font-weight(600);
       }   
 }
</style>
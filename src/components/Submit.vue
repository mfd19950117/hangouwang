<template>
	<div id="content" class="content">
		 地址<input type="text" placeholder="地址" />
                         支付方式
		<ul class="cartlist">
			<li v-for="(item,index) in cartlist" :key="index">
			    <img :src="item.goodsListImg" alt="" />￥:{{item.price}}
			    <p>{{item.goodsName}}</p>
			    <button @click="reduce(item)">-</button>
			    {{item.number}}
			    <button @click="add(item)">+</button>
			           小计:{{item.price*1*item.number}}
			</li>
		</ul>
		<footer>
                                     总计：{{totalPrice}}
             <router-link to="/submit">结算</router-link>
        </footer>
	</div>
</template>

<script>
	 import MyAjax from "@/md/MyAjax.js"
	export default{
		data(){
			return{
				cartlist:[],
				totalPrice:""
			}
		},
		
		mounted(){
             /**
              * 如果没有登录，去登录
              * 如果登录了，显示购物车
              *    如果没有商品，显示购物车是空的
              *    有，显示商品
              */
             document.getElementById("footer").style.display="none"
          var that = this;
         if(localStorage.getItem("userID")){
         	var userID = localStorage.getItem("userID");
         	var url = "http://datainfo.duapp.com/shopdata/getCar.php?userID="+userID;
         	MyAjax.fetchJsonp(url,( data) =>{
         		console.log("1111")
         		console.log(data);
         		that.cartlist = data;
         		/**
                 * 先行查询出第一次的总价
                 */
                var tp = 0
		        for(var item of data){
		          tp += item.number*1 * item.price;
		        }
		        console.log(tp)
		        that.totalPrice = tp
         	})
         }else{
         	this.$router.push("/login")
         }

		}
	}
</script>

<style scoped="">
  footer{
    width: 100%;
    height: 50px;
    background-color: #ccc;
    position: fixed;
    bottom: 0;
    left:0;
  }
</style>
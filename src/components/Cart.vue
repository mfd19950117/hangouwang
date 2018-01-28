<template>
	<div id="content" class="content">
		
		<!--特色-->
		<div class="teset">
			<i class="iconfont icon-dianpushouquanxiaofangzi"></i>
			<span>{{data.store_info.store_name}}</span>
		</div>

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
             <router-link to="/submit">提交订单</router-link>
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
		methods:{
			reduce(item){
				var number = item.number*1-1;
				item.number = number;
				this.totalPrice -= item.price*1; 
				var userID = localStorage.getItem("userID");
				//var goodsID = this.$route.params.goodsID;
				var number = 1;
				var url ="http://datainfo.duapp.com/shopdata/updatecar.php";
							
				url+="?userID="+userID+"&goodsID="+item.goodsID+"&number="+number;
				MyAjax.fetch(url,(data) =>{
					console.log(data);
					if(data=="1"){
						alert("购物车更新成功")
					}else{
						alert("gg")
					}
				})
			},
			add(item){
				var number = item.number*1+1;
				item.number = number;
				this.totalPrice += item.price*1; 
				var userID = localStorage.getItem("userID");
				//var goodsID = this.$route.params.goodsID;
//				var number = 1;
				var url ="http://datainfo.duapp.com/shopdata/updatecar.php";
				url+="?userID="+userID+"&goodsID="+item.goodsID+"&number="+number;
				MyAjax.fetch(url,(data) =>{
					console.log(data);
					if(data=="1"){
						alert("购物车更新成功")
					}else{
						alert("gg")
					}
				})
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
.teset{
	width: 100%;
	height:auto;
	padding:11px;
	font-size: 16px;
    color: #333;
    border-bottom:1px solid #EEEEEE;
}	
	
	
	
	
	
  footer{
    width: 100%;
    height: 50px;
    background-color: #ccc;
    position: fixed;
    bottom: 0;
    left:0;
    
  }
</style>
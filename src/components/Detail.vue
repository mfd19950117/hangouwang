<template>
	<div id="content" class="content">
		<!--bannerlist-->
		<mt-swipe :prevent="true" :auto="4000">
           <mt-swipe-item  v-for = "(item, index) in bannerlist" :key="index"> <img class="mm" :src="item"/></mt-swipe-item>
        </mt-swipe>
		
		<!--datas-->
		<p class="goodsname">{{data.goods_info.goods_name}}</p>
		<p class="goodsjingle">{{data.goods_info.goods_jingle}}</p>
		<div class="price1">
			<span class="goods_price"><em>￥</em>{{data.goods_info.goods_price}}</span>
			<span class="goods_salenum">销量:{{data.goods_info.goods_salenum}}</span>
		</div>
		<div class="detail-item">
			<span class="item-name">送至</span>
			<span class="area-name">{{data.goods_hair_info.area_name}}</span>
			<span class="if_store_cn">{{data.goods_hair_info.if_store_cn}}</span>
			<p class="mf">{{data.goods_hair_info.content}}</p>
		</div>	
		<div class="yixuan">
			已选
			<span>默认</span>
			<i class="iconfont icon-xiangyou-copy"></i>
		</div>
		<div class="kong"></div>
        <div class="pingjia">
				<span class="shangpin1">商品评价</span>
				<span class="haoping">好评率{{data.goods_evaluate_info.good_percent}}%</span>
				<span>(17人评价)</span>
				<i class="iconfont icon-xiangyou-copy"></i>
		</div>
        <div class="kong"></div>
		<!--特色-->
		<div class="teset">
			<i class="iconfont icon-dianpushouquanxiaofangzi"></i>
			<span>{{data.store_info.store_name}}</span>
			<i class="iconfont icon-xiangyou-copy you"></i>
		</div>
        <!--描述-->
		<div class="describe">
			<span>{{data.store_info.store_credit.store_desccredit.text}}相符 <b>{{data.store_info.store_credit.store_desccredit.credit}}</b></span>
			<span>{{data.store_info.store_credit.store_servicecredit.text}}态度 <b>{{data.store_info.store_credit.store_servicecredit.credit}}</b></span>
			<span>{{data.store_info.store_credit.store_deliverycredit.text}}速度 <b>{{data.store_info.store_credit.store_deliverycredit.credit}}</b></span>
		</div>
        <div class="kong"></div>
        
        <!--商品列表-->
		<div class="list">
			<h1>店铺推荐</h1>
			<ul>
				<li v-for="(item,index) in data.goods_commend_list" :key="index">
					<router-link :to="{name:'detail',params:{goodsID:item.goods_id}}">
						<img :src="item.goods_image_url" />
						<p>{{item.goods_name}}</p>
						<span>￥{{item.goods_price}}</span>
					</router-link>
				</li>
			</ul>
		</div>
         <!--更多-->
		<div class="more">
			点击查看产品详情
		</div>

        
	</div>
</template>

<script>
	import Vue from 'vue'
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
	import MyAjax from "@/md/MyAjax.js";
	export default{
		data(){
			return{
				bannerlist:[],
				data:[]
				
			}
		},
		mounted(){
			var that = this;
			var goodsID = this.$route.params.goodsID;
			var Bannerurl="http://localhost:8080/list/mo_bile/index.php?act=goods&op=goods_detail&goods_id="+goodsID+"&key=";
			MyAjax.fetch(Bannerurl,(data)=>{
				//console.log(data.datas.goods_image)
				var str = data.datas.goods_image;
				var arr = str.split(",");
				console.log(arr);
				that.bannerlist = arr;
				const{code,datas}=data;
				that.data=datas;
				console.log(datas);
								
			})		
        }			
}			

</script>

<style scoped>
    	
.mint-swipe{
	width:100%;	
    max-height: 350px;
    border-bottom:1px solid #ccc;
    overflow: hidden;    
}
.mm{
	width:100%;
	height:100%;
	padding:0 6px; 
}
.goodsname{
	font-size:16px;
	line-height:25px;
	user-select:none ;
	padding:0 5px;
}
.goodsjingle{
	font-size:12px;
	line-height:20px;
	color:#777;
	user-select:none ;
	padding:0 5px;
}
.price1{
	width:100%;
	height:auto;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	padding:0 5px;
}
.goods_price{
	color:#DB4453;
	font-size: 20px;
	font-weight:500;
	user-select:none ;
}
.goods_price>em{
	font-size: 12px;
	font-weight:normal;
	user-select:none ;
}
.goods_salenum{
	font-size: 14px;
	font-weight:500;
	user-select:none ;
}
.detail-item{
	width:100%;
	height:auto;
	border-bottom: solid 1px #EEE;
	padding:11px;
}
.item-name{
	color:#888;
	font-size: 14px;
	font-weight:600;
	user-select:none ;
}
.area-name{
	color:#333;
	font-size: 14px;
	user-select:none ;
}
.if_store_cn{
	color: #ED5564;
    font-weight:800;
    font-size: 14px;
    user-select:none ;
}
.mf{
	font-size: 14px;
    color: #888;
    line-height: 20px;
    margin-top:5px;
    margin-left: 30px;
    user-select:none ;
}
.yixuan{
	width:100%;
	height:auto;	
	padding:11px;
	font-size: 14px;
    color: #888;
}
.yixuan>span{
	display: inline-block;
	font-size: 12px;
	width:15%;
	height:auto;
	border:1px solid #ccc;
	text-align: center;
}
.yixuan>i{
	float: right;
}
.kong{
	width: 100%;
	height:15px;
	background: #EEEEEE;
}
.pingjia{
	width: 100%;
	height:auto;
	padding:11px;
	font-size: 14px;
    color: #888;
}

.haoping{
    font-size: 12px;
    display: inline-block;
    margin-left: 15px;
    color: #ED5564;
    font-weight:800;
}
.pingjia>i{
	float: right;
}
.teset{
	width: 100%;
	height:auto;
	padding:11px;
	font-size: 16px;
    color: #333;
    border-bottom:1px solid #EEEEEE;
}
.teset>.you{
	float: right;
}
.describe{
	width: 100%;
	height:auto;
	padding:11px;
	font-size: 13px;
	font-weight:800;
	color: #888;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.list{
	width: 100%;
	height:auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.list>h1{
	font-size: 14px;
    color: #888;
    padding:9px 10px;
}
.list>ul{
	width: 100%;
	height:auto;
	
}
.list>ul>li{
	width: 25%;
	float: left;
	padding:8px;
}
.list>ul>li>a{
	color:#777;
}
.list>ul>li>a>img{
	width:90%;
	height:90%;
	border:1px solid #f2f2f2;				
}
.list>ul>li>a>p{
	font-size: 12px;
	overflow: hidden;
	width:90%;
	height:32px;
}
.list>ul>li>a>span{
	font-size: 10px;
}
.more{
	width:100%;
	height:auto;
	padding:12px;
	background: #EEEEEE;
	color:#999;
	border-top:1px solid #ccc;
	border-bottom:1px solid #ccc;
	text-align: center;
}
</style>
<template>
	<div id="content" class="content">
      <mt-swipe :prevent="true" :auto="4000">
           <mt-swipe-item  v-for = "(item, index) in bannerlist" :key="index"> <img class="mm" :src="item.image"/></mt-swipe-item>
      </mt-swipe>
      <div class="top"></div>
      
      <div class="find-zx">
      	<h2 class="tit-zx">{{zhuanxuan}}</h2>
      	<ul>
      		<li v-for="(item,index) in zhuanxuanlist.item" :key="index">
      			<img :src="item.image" alt="" />
      		</li>
      	</ul>
      </div>
      <div class="zx2">
      	<ul>
      		<li v-for="(item,index) in zhuanxuanlist2.item" :key="index">
      			<img :src="item.image" alt="" />
      		</li>
      	</ul>
      </div>
       
       <div class="home-list">
			<ul v-for="(item,index) in goodstitle" :key="index" class="table">
				<h2>{{item.goods.title}}</h2>
				
				<div class="odiv">
					<li v-for="goods in item.goods.item">
						<router-link :to="{name:'detail',params:{goodsID:goods.goods_id}}">
						<img :src="goods.goods_image">
						<p>{{goods.goods_name}}</p>
						<span>￥{{goods.goods_promotion_price}}</span>
						</router-link>
					</li>
				</div>
			</ul>
        </div>

    	
<div id="kong"></div>
    
 <div class="bottom">
			<ul class="kindbottom">
				<li v-for="item in bottomlist">
					<router-link :to="item.path">
					{{item.name}}
					</router-link>
				</li>
			</ul>
			<ul class="kindbottom1">
				<li v-for="item in kehulist">
					<router-link :to="item.path">
						<span><i class="iconfont" :class="item.icon"></i></span>
						<p>{{item.name}}</p>
					</router-link>
				</li>
			</ul>
			<div class="footer">
				Copyright ? 2014-2016 汉购网
				<a href="#">hangowa.com</a>
				版权所有
			</div>
		</div>
    
    
</div>	
</template>

<script>
	import MyAjax from "@/md/MyAjax.js";
	export default{
		data(){
			return{
                bannerlist:[],
                zhuanxuan:"",
                zhuanxuanlist:[],
                zhuanxuanlist2:[],
                goodstitle:[],

                bottomlist:[
					{
						name:"登录",
						path:"/login"
					},
					{
						name:"注册",
						path:"/register"
					},
					{
						name:"反馈",
						path:"/"
					},
					{
						name:"回到顶部",
						path:"/"
					}
				],
				kehulist:[
					{
						name:'客户端',
						path:"/",
						icon:"icon-h5xiazaikehuduan"
					},
					{
						name:'触屏版',
						path:"/",
						icon:"icon-chupingshebei"
					},
					{
						name:'电脑版',
						path:"/",
						icon:"icon-weibudiannaobanicon"
					}
				]

			}
		},
		mounted(){
			var that = this;
		    var bannerurl = "http://localhost:8080/list/mo_bile/index.php?act=index&op=special&special_id=1" ;		    
		    MyAjax.fetch(bannerurl,(data)=>{
		    	var arr=[];
		    	const{code,datas}=data;

		    	that.bannerlist = data.datas.list[0].adv_list.item;
		    	
		    	that.zhuanxuan = data.datas.list[1].explode3.title;
		    	that.zhuanxuanlist = data.datas.list[1].explode3;
		    	
		    	that.zhuanxuanlist2 = data.datas.list[2].home3;
		    	
//		    	that.goodstitle = data.datas.list.goods;
//              
                for(var i=3;i<datas.list.length;i++){
                	arr.push(datas.list[i]);
                }
                console.log(arr);
                that.goodstitle = arr;
		    	
		    })
		    
		},
		updated(){
			var mySwiper = new Swiper ('.swiper-container', {		    
		    loop: true,
		    autoplay:3000,
		    autoplayDisableOnInteraction:false,//用户操作之后还可以继续自动轮播
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		  })      
		}
	}
</script>

<style scoped lang="scss">
  @import "~@/lib/reset.scss";
 .mint-swipe{
	width:100%;	
    max-height: 153px;
    overflow: hidden;    
}
.mm{
	width:100%;
	height:100%;
/*	padding:0 6px; */
}
.top{
   	 @include rect(100%,  15px);
	 @include bgcolor(#f0f0f0);
} 
.find-zx{
	@include rect(100%,auto);
	.tit-zx{
		@include rect(100%,auto);
		@include border(0 0 0 5px,#ED5564,solid);		
		padding:6px;
	}
	ul{
		@include rect(100%,60px);
		@include flexbox();
		/*@include flex-direction(row);*/
		li{
			@include rect(auto,100%);
			@include flex();
			img{
				@include rect(100%,100%);
				@include flex-direction(column);
                @include justify-content();
                @include align-items();
			}
		}
	}
}
.zx2{
	@include rect(100%,auto);
	ul{
		@include rect(100%,98px);
		@include flexbox();
		li{
			@include rect(auto,100%);
			@include flex();
			img{
				@include rect(100%,100%);
				@include flex-direction(column);
                @include justify-content();
                @include align-items();
			}
		}
	}
}
.home-list{
   @include rect(100%,  auto);
   display: flex;
   flex-direction: column;
   .table{
   	@include rect(100%,  auto);
   	background:#fff;
		h2{
			@include flexbox();
			@include rect(100%,  0.30rem);
			@include justify-content();
			@include align-items();
			@include fontsize(0.14rem);
		}
		li{
			@include rect(45%,  auto);
			/*border-bottom:1px solid #ccc;*/
			float:left;
			margin: 0 8px;
			img{
				@include rect(100%,  100%);
			}
			p{
				font-size:0.14rem;
				border-bottom:1px solid #ccc;
				overflow:hidden;
				margin-bottom:10px;
				@include rect(100%,0.40rem);
				 @include textcolor(#000);
			}
			span{
				font-size:0.16rem;
				font-weight: bold;
				@include textcolor(red);
			}
		}
   }
}


#kong{
	@include rect(100%,  16px);
	@include bgcolor(#f0f0f0);
	@include flexbox();
}


.bottom{
	@include rect(100%,auto);
	@include bgcolor(#fff);
	.kindbottom{
		@include rect(100%,45px);
		@include border(0 0 1px 0,#ccc,solid)
		@include flexbox();
		
		li{
			@include rect(auto,100%);
			@include flex();
			
			a{
				@include rect(100%,100%);
				@include flexbox();
				@include flex-direction(column);
				@include justify-content();
				@include align-items();
				@include textcolor(#909090);
			}
		}
	}
	
	.kindbottom1{
		@include rect(100%,0.67rem);
		@include border(0 0 1px 0,#ccc,solid)
		@include flexbox();
		@include justify-content(center) ;
		padding:0 40px;
		li{
			@include rect(auto,100%);
			@include flex();
			a{
				@include rect(100%,100%);
				@include flexbox();
				@include flex-direction(column);
				@include justify-content();
				@include align-items();
				@include textcolor(#929292);
				span{
					@include rect(50%,55%);
					display: inline-block;
					@include border(1px,#ccc,solid);
					/*@include border-radius(100%);*/
					border-radius:50%;
					i{
						@include flexbox();
						@include justify-content();
						@include align-items();
						@include fontsize(25px);
				    }
				}
				
			}
		}
	}
	.footer{
		/*padding:0 10px;*/
		@include flexbox();
		@include align-items();
		@include justify-content();
		@include rect(100%,100%);
		@include textcolor(#9f9f9f);
		@include fontsize(12px);
		a{
			@include textcolor(#9f9f9f);
			
		}
	}
}

</style>
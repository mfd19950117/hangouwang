<template>
	<div id="content" class="content">
      <img :src="img" alt="" />
      
      <div class="home-nav">
	      <ul id="ulist">
	      	<li v-for="(item,index) in ulist">
	      		<router-link :to="item.path">
		      		<span :style="item.color"><i class="iconfont" :color="item.color" :class="item.icon"></i></span>
					<p>{{item.name}}</p>
				</router-link>
	      	</li>
	      </ul>
      </div>
      
       <div class="top"></div>
       <div v-for = "item in goodsList" class = "home-list">            
    		<h3 class="titel">{{item.title}}</h3>
    		<p class="interduse"><span>---</span class="time">小编向您推荐一下商品<span>---</span></p>
    		
    		<div class="showBOxContent">
	    		<div class = "showBox" v-for = "goods in item.item ">
	    			<router-link :to="{name:'detail',params:{goodsID:goods.goods_id}}">
		    			<div class="proitem">
		    				<img :src="goods.goods_image" class="proImg"/>
		    				<p class="proName">{{goods.goods_name}}</p>    				
		    				<div  class="goodsFooter" >
		    					<span class="proPrise">￥{{goods.goods_promotion_price}}</span>
		    				</div>
		    			</div>
	    			</router-link>
	    		</div>
    		</div>
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
                img:"",
                ulist:[
                   {
                   	icon:'icon-fenlei',
		            name:"分类",
		            path:"/kind",
		            color:"background:#FB6E52"
                   },
                   {
                   	icon:'icon-icon',
		            name:"购物车",
		            path:"/cart",
		            color:"background:#48CFAE"
                   },
                   {
                   	icon:'icon-home',
		            name:"我的",
		            path:"/user",
		            color:"background:#4FC0E8"
                   },
                   {
                   	icon:'icon-meiriqiandao',
		            name:"签到",
		            path:"/cart",
		            color:"background:#AC92ED"
                   }
                ],
				goodsList:[],

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
		    var imgurl = "http://www.hangowa.com/mo_bile/index.php" ;
		    MyAjax.fetchJsonp(imgurl,(data)=>{
		    	console.log(data.datas.list[0].adv_list.item[0].image);
		    	that.img = data.datas.list[0].adv_list.item[0].image;		    	
		    })
		    var listurl = "http://localhost:3000/list";
		   // var listurl = "http://www.hangowa.com/mo_bile/index.php";
		    
			var that = this;
			var titlelist = [];
			var goodslist = [];
			MyAjax.fetch(listurl,(data)=>{				
				const { code, datas} = data;
				console.log(datas);
				for(var i = 1 ; i < datas.list.length ; i++){			
	//				titlelist.push(datas.list[i].goods.title);
					goodslist.push(datas.list[i].goods);	
				}
			})
			this.classTitle = titlelist;
			this.goodsList = goodslist;
			console.log(this.goodsList)
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
 
  img{
  	@include rect(100%, 152px)
  }
  
  .home-nav{
  	@include rect(100%, 99px);
  	#ulist{
  		@include rect(100%, 100%);
  		@include flexbox();
  		li{
  			@include flex();
  			@include rect(auto,  100%);
  			
  			a{
  				@include rect(100%,  100%);
                @include flexbox();
                @include flex-direction(column);
                @include justify-content();
                @include align-items();
                @include textcolor(#fff);
                @include text-align(center);
                
                span{
	  				display:inline-block;
	  				@include rect(53px, 53px);
	  				@include border-radius(100%);
	  				@include align-items();
	  				@include justify-content(center);
	  				@include flex-direction(column);
                    @include flexbox();
                    i{
  			       	   @include fontsize(22px);
  			        }                  
  			    }
  			       
  			       p{
  			       	   @include textcolor(#555);
  			       }
  			       
  			}
  		}
  	}
  } 
 .top{
   	 @include rect(100%,  15px);
	 @include bgcolor(#f0f0f0);
   } 
.home-list{
   @include rect(100%,  auto);
   display: flex;
   flex-direction: column;
  .titel {
    font-size: 16px;
    color: #333;
    margin-top:10px;
    font-weight: normal;
    text-align: center;
}
 .interduse {
    font-weight: normal;
    text-align: center;
    color: #999;
	}
	.time{
    color: #999;
    display: inline-block;
    position: relative;
	}
	
	.proitem{
		width:45%;
		height:245px;
		float:left;
		margin-left:12px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.proImg{
		border-radius: 6px 6px 0 0;
		display: flex;
		
	}
	.proName{
		width:100%;
		height:45px;
		overflow: hidden;
		display: flex;
		flex-direction: flex-end;
	}
	.goodsFooter{
		border-top: solid 1px #EEE;
		width:100%;height:32px;
		display: flex;
		/*background: yellowgreen;*/
		
		.proPrise{
			color: #DB4453;
			font-weight: 600;
			justify-content: center;
			display: inline-block;
			margin-top: 5px;
			margin-left: 3px;
		}
	}	
}

#kong{
	@include rect(100%,  16px);
	@include bgcolor(#f0f0f0);
	@include flexbox();
}

/*.home-footer{
	@include rect(100%,  auto);
	@include bgcolor(#fff);
	@include flexbox();
	@include border(0 1px 0 0,#EEE,solid );
	ul{
		@include rect(100%,  40px);
        @include flexbox();
        @include border(0  0 0 1px,#EEE,solid );
        li{
            @include flex();
            @include rect(auto,  100%);                
            a{
	            @include rect(100%,  100%);	           
	            @include flexbox();
	            @include flex-direction(row);
	            @include justify-content(center);
	            @include align-items();
	            @include textcolor(#555);
	            @include border(0 1px 0 0,#EEE,solid);
            }
            
        }
	}
	/*.banben{
		@include rect(100%,  60px);
        @include flexbox();
        @include bgcolor(pink)
	}*/

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
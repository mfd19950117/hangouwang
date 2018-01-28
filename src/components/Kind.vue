<template>
	<div id="content" class="content">
		<ul class="kindType">
			<li v-for="(item,index) in typelist" :key="index">
				<div class="type_img">
			        <img :src="item.wap_logo" alt="" />
			   </div>
				<router-link :to="{name:'kindtype',params:{cat_id:item.cat_id}}">					
					<img :src="item" alt="" />
					<p>{{item.cat_name}}</p>
				</router-link>
			</li>
		</ul>
		
		<ul class="kindlist">
			<li v-if="flag" v-for = "(item,index) in classList">
				<p class="kindlist-p">{{item.cat_name}}<i class="iconfont icon-iconxiangyou"></i></p>
				<ol class="kindlist-list">
					<li v-for = "item in classList[index].child">
						{{item.cat_name}}
					</li>
				</ol>
			</li>
			<li v-else>
				暂无数据
			</li>
		</ul>
	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js"
	export default{
		data(){
			return{
				typelist:[],
				classList:[],
				flag:true
			}
		},
		mounted(){
			var that = this;
		    var classUrl = "http://localhost:3000/list1";
		    MyAjax.fetch(classUrl,(data) => {		    	
		        that.typelist = data.datas.category_list;
			});
		    var cat_id = this.$route.params.cat_id;
		    var listUrl = "http://localhost:8080/list/mo_bile/index.php?act=goods_class&op=get_child_all&gc_id="+cat_id;
		    MyAjax.fetch(listUrl,(data) => {
		    	//console.log(data)
		    	if(data == "0"){
		    		that.flag = false;
		    	}else{
		    		that.flag = true;
		    		that.classList = data.datas.class_list;
		    	}
		    	
		    })
		},
		watch:{
			$route(){
				var that = this;
				var cat_id = this.$route.params.cat_id;
		        var listUrl = "http://localhost:8080/list/mo_bile/index.php?act=goods_class&op=get_child_all&gc_id="+cat_id;
		        MyAjax.fetch(listUrl,(data) => {
			    	if(data == "0"){
		    		that.flag = false;
		    	    }else{
		    	    	that.flag = true;
		    		   that.classList = data.datas.class_list;
		    	    }
		       })
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/lib/reset.scss";
	
	#content{
		@include flexbox();
		.kindType{
			@include rect(80px,100%);
			@include border(0 1px 0 0,#ccc,solid)
			li{
				@include rect(100%,62px);
				@include flexbox();
				@include flex-direction(column);
				@include align-items();
				@include justify-content();
                @include border(0 0 1px 0, #333, solid);
                @include textcolor(#999);
                 .type_img {
                 	 img{
                 	 	/*display:inline-block;*/
                 	 	
       	               @include rect(30px, 18px);
       	               @include textcolor(#999);
       	               
                     }
                 }

                a{
                   @include textcolor(#999);
                   
                   /*&.router-link-active{
                	 @include textcolor(#f66);
                   }*/
                }
			}
		}
		
		.kindlist{
			@include flex();
			@include rect(auto,100%);
			@include bgcolor(#fcfcfc);

			>li{				
				text-indent: 10px;
				display: block;
				@include rect(100%,auto);				
                @include border(1px 0 0 0, #333, solid);
                @include fontsize(14px);
                @include textcolor(#111);
                @include bgcolor(#e7e7e9);
                i{
                	@include flexbox();
                	float:right;
                }
                .kindlist-list{
                	text-indent: 0;
                	@include rect(100%, auto);
                	@include bgcolor(#fff);
                	li{
                		@include rect(100%, 40px);
						font-size: 12px;
				        line-height: 35px;
				        vertical-align: top;
				        display: inline-block;
				        width: 67px;
				        padding: 4px;
				        margin-left: 7px;
				        border-radius: 0;

                	}
                }

			}
		}
		
		
    /*.kindlist{
      @include flex();
      @include rect(auto, 100%);
      background-color: #fcfcfc;
      
      >li{
      	width: 100%;
      	text-indent: 10px;
      	display: block;
		    font-size: 20px;
		    
		    color: #111;
		    background-color: #ccc;
		  
    		
		  	ol{
		  		text-indent: 0;
	      	@include rect(100%, auto);
					background: #fff;
					li{
						@include rect(100%, 40px);
						font-size: 14px;
				    line-height: 35px;
				    vertical-align: top;
				    display: inline-block;
				    width: 67px;
				    padding: 4px;
				    margin-left: 7px;
				    border-radius: 0;
					}
	      }
      }
    }*/
		
		
	}
</style>
<template>
<div id="content">
	
	
 
    <mt-field  label="用户名" placeholder="请输入用户名" v-model="userID"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <input id="checkbox" type="checkbox" checked="" class="checkbox"><label for="checkbox">同意</label>
    <a href="javascript:;" class="a1">用户注册协议</a>
    <mt-button type="primary" size="large" @click="register(userID,password)">注册</mt-button>
    <div class="footer">
		Copyright ? 2014-2016 汉购网
		<a href="#" class="a2">hangowa.com</a>
		版权所有
    </div>
    
    <p v-if = "code == '0'">用户名重名</p>
    <p v-if = "code == '1'">注册成功</p>
    <p v-if = "code == '2'">注册失败</p>
</div>
  
</template>

<script>
	 import Vue from "vue"
  import MyAjax from "@/md/MyAjax.js"
  import { Toast,Field,Button  } from 'mint-ui';
  Vue.component(Field.name, Field);
  Vue.component(Button.name, Button);
	
	export default{
		data(){
			return{
				userID:"",
				password:"",
				code:""
			}
		},
		methods:{
			userIDfn(){
				this.code=""
			},
			blurUserID(userID){
				
			},
			register(userID,password){
				var that = this;
				var registerUrl = "http://datainfo.duapp.com/shopdata/userinfo.php";
				registerUrl += "?status=register&userID="+userID+"&password="+password;
				
				MyAjax.fetch(registerUrl,(data) =>{
					console.log(data);
					if(data=="0"){
						//that.code=0;
						instance = Toast('用户名重名')
						setTimeout(()=>{
						    //that.code="";
						    instance.close();
						    that.userID="";
						    that.password="";
					    },3000)
					}else if(data=="1"){
						that.code=1;
						this.$router.push("/login")						                       
					}else if(data=="2"){
						//that.code=2;
						instance = Toast('注册失败')
						setTimeout(()=>{
						    //that.code="";
						    instance.close();
						    that.userID="";
						    that.password="";
					    },3000)
					}
					
				})
			}
		}
	}
</script>

<style scoped="" >

#content{
	background-color: #f5f5f5;
	
}
.mint-field{	
	height:42px;
}
.checkbox{
	width: 13px;
    height:13px;
    margin-top:20px;
    margin-left:50px;
    margin-right:8px;
    /*vertical-align: middle;*/
}

.a1{
	color: #4B89DC;
}
/*.checkbox+label{
	display: inline-block;	
	width: 20px;
    height:20px;
    border: 1px solid #CCC;
    background-color: #48CFAE;
    border-radius: 100%;
    user-select: text;
    border: 1px solid #CCC;
}
.checkbox:checked+label{
	background-color: #48CFAE;
	color:white;
	border: 1px solid #CCC;border-radius: 100%;
}*/
.mint-button{
	margin:20px auto;
	background: #EEE;
	width: 85%;
	color:#888;
	border-radius: 8px;
}
 
.footer{
		color: #555;
		text-align: center;
		
}		
.a2{
        color: #555;
	    font-weight:600;
	    display: inline-block;
	    margin:0 auto;
}	  
</style>
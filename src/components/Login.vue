<template>
<div id="content">	 
      <mt-field  label="用户名" placeholder="请输入用户名" v-model="userID"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <input id="checkbox" type="checkbox" checked="" class="checkbox">
    <a href="javascript:;" class="a1">七天自动登录</a>
    <a href="javascript:;" class="a3">忘记密码?</a>
    <mt-button type="primary" size="large" @click="login(userID,password)">登录</mt-button>
    
    <div class="jiont-login">
    	<h2>
    		<span>合作账号登录</span>
    	</h2>
    </div>
    <ul>
    	<li>
    		<a href="javascript:;" class="qq"></a>
    	</li>
    </ul>
    
    
    <div class="footer">
		Copyright ? 2014-2016 汉购网
		<a href="#" class="a2">hangowa.com</a>
		版权所有
    </div>
     
     <p v-if = "code == '0'">用户名不存在</p>
     <p v-if = "code == '2'">密码错误</p>
	</div>
</template>

<script>
  import MyAjax from "@/md/MyAjax.js"
  export default {
    data(){
      return {
        userID:"",
        password:"",
        code:""
      }
    },
    methods:{
      userIDfn(){
        this.code = "";
      },
      blurUserID(userID){
        
      },
      login(userID,password){
        var that = this;
        var registerUrl = "http://datainfo.duapp.com/shopdata/userinfo.php";
        registerUrl += "?status=login&userID=" + userID + "&password=" +password; 
        
        MyAjax.fetch(registerUrl,(data) => {
          console.log(data)
          if(data == "0"){
            that.code = 0;
            setTimeout(() => {
              that.code = "";
            },2000)
          }else if(data == "2"){
            that.code = 2;
            setTimeout(() => {
              that.code = "";
            },2000)
          }else{
            console.log(data)
            localStorage.setItem("userID",data.userID)
            that.$router.push("/home")
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
	color: #666;
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
.jiont-login{
 	width: 100%;
 	height:auto;
 	text-align: center;
 	
 }
.jiont-login>h2{
	height: 25px;
    border-bottom: solid #CCC 1px;
    font-size: 100%;
    font-weight: normal;
}
.jiont-login>h2>span{
	display: inline-block;
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    background-color: #f5f5f5;
    color: #666;
    font-size: 14px;
    transform: translate3d(0, 50%, 0);
} 

ul{
	display: inline-block;
    width: 100%;
    height: 40px;
    margin: 22px auto 0;
    font-size: 0;
    text-align: center;
}
ul>li{
    text-align: center;	
}
ul>li>a{
	background: url(../img/qq.png);
	border-color: #4FC0E8;
	display: inline-block;
    width: 43px;
    height: 43px;
    background-color: #FFF;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 70%;
    border: solid 1px;
    border-radius: 50%;
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
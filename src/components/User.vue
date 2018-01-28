<template>
	<div id="content" class="content">
		<div v-if="isLogin">
			{{userID}}
			<button @click="logout()">退出</button> 
		</div>
		<div v-else>
			<router-link to="/login">登录</router-link>
		     &nbsp;&nbsp;&nbsp;&nbsp;
		     <router-link to="/register">注册</router-link>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isLogin:false,
				userID:""
			}
		},
		mounted(){
			if(localStorage.getItem("userID")){
				this.isLogin=true;
				this.userID=localStorage.getItem("userID");
			}
		},
		methods:{
			logout(){
				localStorage.removeItem("userID");
				this.$router.push("/login")
			}
		}
	}
</script>

<style scoped="">
	#content{
		text-align: center;
		padding-top:50px;
	}
</style>
<template>
	<footer id="footer">
		<ul>
			<li v-for="(item,index) in list">
				<router-link :to="item.path">
				<i class="iconfont" :class="item.icon"></i>
				<p>{{item.name}}</p>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
	export default{
		data(){
			return{
				list:[
				  {
		            icon:'icon-shouye',
		            name:"首页",
		            path:"/home"
		          },{
		            icon:'icon-zhinanzhen1',
		            name:"发现",
		            path:"/find"
		          },{
		            icon:'icon-fenlei',
		            name:"分类",
		            path:"/kind"
		          },{
		            icon:'icon-home',
		            name:"我的",
		            path:"/user"
		          }
				]
			}
		}
	}
</script>

<style>
</style>
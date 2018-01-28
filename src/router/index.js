import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import HomeHeader from "@/components/HomeHeader.vue"
import Home from "@/components/Home.vue"
import FindHeader from "@/components/FindHeader.vue"
import Find from "@/components/Find.vue"
import KindHeader from "@/components/KindHeader.vue"
import Kind from "@/components/Kind.vue"
import CartHeader from "@/components/CartHeader.vue"
import Cart from "@/components/Cart.vue"
import UserHeader from "@/components/UserHeader.vue"
import User from "@/components/User.vue"
import DetailHeader from "@/components/DetailHeader.vue"
import Detail from "@/components/Detail.vue"
import RegisterHeader from "@/components/RegisterHeader.vue"
import Register from "@/components/Register.vue"
import LoginHeader from "@/components/LoginHeader.vue"
import Login from "@/components/Login.vue"
import Footer from "@/components/Footer.vue"
import DetailFooter from "@/components/DetailFooter.vue"
import SubmitHeader from '@/components/SubmitHeader.vue'
import Submit from '@/components/Submit.vue'
export default new Router({
  routes: [
    {
    	path:"/",
    	redirect:"/home",
    },
    {
    	path:"/kind",
    	redirect:"/kind/35",
    },
    {
    	path:"/home",
    	name:"home",
    	components:{
    		header:HomeHeader,
    		content:Home,
    		footer:Footer
    	}
    },
    {
    	path:"/find",
    	name:"find",
    	components:{
    		header:FindHeader,
    		content:Find,
    		footer:Footer
    	}
    },
    {
    	path:"/detail/:goodsID",
    	name:"detail",
    	components:{
    		header:DetailHeader,
    		content:Detail,
    		footer:DetailFooter
    	}
    },
    {
    	path:"/kind",
    	name:"kind",
    	components:{
    		header:KindHeader,
    		content:Kind,
    		footer:Footer
    	}
    },
    {
    	path:"/kind/:cat_id",
    	name:"kindtype",
    	components:{
    		header:KindHeader,
    		content:Kind,
    		footer:Footer
    	}
    },
    {
    	path:"/cart",
    	name:"cart",
    	components:{
    		header:CartHeader,
    		content:Cart,
    		footer:Footer
    	}
    },
    {
    	path:"/user",
    	name:"user",
    	components:{
    		header:UserHeader,
    		content:User,
    		footer:Footer
    	}
    },
    {
    	path:"/register",
    	name:"register",
    	components:{
    		header:RegisterHeader,
    		content:Register,
    		footer:Footer
    	}
    },
    {
    	path:"/login",
    	name:"login",
    	components:{
    		header:LoginHeader,
    		content:Login,
    		footer:Footer
    	}
    },
    {
      path:"/submit",
      name:"submit",
      components:{
        header: SubmitHeader,
        content:Submit,
        footer:Footer
      }
    }
  ]
})

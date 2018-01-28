<template>
  <div class="container" id="container">
     <router-view name="header"></router-view>
     <router-view name="content"></router-view>
     <router-view name="footer"></router-view>
     <!--<v-footer></v-footer>-->
  </div>
</template>

<script>
	import Footer from "./components/Footer.vue"
export default {
//components:{
//	"v-footer":Footer
//}
}
</script>

<style lang="scss">
  @charset "utf-8";
  @import "~@/lib/reset.scss";
  
   html,body,#app,#container{
     @include rect(100%,  100%);
   }
   #container{
     @include flexbox();
     @include flex-direction(column);
     #header{
        @include rect(100%,  60px);
        @include bgcolor(#e7e7e9);
     }
     #content{
        @include flex();
         @include rect(100%, auto);
         overflow:auto;
     }
     #footer{
        @include rect(100%,  0.5rem);
        @include bgcolor(#000);
        opacity:0.6;
        
        ul{
          @include rect(100%,  100%);
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
             
             &.router-link-active{
               @include textcolor(#f66);
             }
             
            }
            
          }
        }
     }
   }
</style>

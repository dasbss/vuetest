import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import indexs from './components/indexs.vue'
import index from './components/index.vue'
import test from './components/test.vue'
import login from './components/login.vue'
import yonghuguanli from './components/yonghuguanli.vue'
import bokeguanlis from './components/bokeguanlis.vue'
import comment from './components/comment.vue'



import HomePage from './components/HomePage'
import boke from './components/boke.vue'
import liuyan from './components/liuyan.vue'
import HeaderPage from './components/header-page.vue'
import HeaderLogin from './components/header-login.vue'
import vipLogin from './components/viplogin.vue'

/* 去除报错 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
	routes:[
		 {path:'/indexs',component:HomePage},
		 {path:'/',component:vipLogin},
	/* 	 {path:'/test/:id',component:test}, */
		 {path:'/login',component:login},
		 {path:'/header-login',component:HeaderLogin,children:[ 
			 {path:'/HomePage/:miss',components:{
			 		"header":HomePage
			 }}, 
			 {path:'/boke/:miss',components:{
				  "header":boke			
			 }},
			 {path:'/liuyan/:miss',components:{
			 		"header":liuyan
			 }},
		 ]},
		 {path:'/vipLogin',component:vipLogin},
		   {path:'/header-page',component:HeaderPage,children:[ 
			  {path:'/HomePage',components:{
			   		"header":HomePage
			   }},
			   {path:'/boke',components:{
			    	"header":boke
			    }},	   			
			   {path:'/liuyan',components:{
			    	"header":liuyan
			    }},
				{path:'/test/:id',components:{
					 "header":test
				}}
						  
			 /*  {path:'/HomePage',components:{
			   			"header":HomePage
			   }}, */
			   /*path:'/boke/:miss 携带参数，但路径上带着参数 */
		   ]},
		   
		   
	/* 	子组件的使用 */
		{path:'/login',component:index,children:[   
		/* 	{path:'/',redirect:'/HomePage'}, *///进入展示该页面
			{path:'/yonghuguanli',components:{
				"children":yonghuguanli
			}},
			{path:'/bokeguanlis',components:{
				 "children":bokeguanlis
			}},
			{path:'/comment',components:{
				 "children":comment
			}},
			
				
		]		
		},
		/* 局部刷新，单页面跳导航条  设置也给外置的头部*/
		/*{path:'/header-page',component:HeaderPage,children:[
        	{path:'/Homepage',component:HomePage}
			{path:'/HomePage',components:{
				"header":HomePage
			}},
			{path:'/boke',components:{
				"header":boke
			}}
		]}
		 */
		
	]
})
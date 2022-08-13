<template>
	<div>
		<!-- 已登录页面 -->
		<div id="farter">
			<div id="header"> 
			<el-menu
			  :default-active="activeIndex2"
			  class="el-menu-demo"
			  mode="horizontal"
			  @select="handleSelect"
			  background-color="#545c64"
			  text-color="#fff"
			  active-text-color="#ffd04b">
			  
			  <el-menu-item>logo</el-menu-item>   <!-- +$route.params.miss -->
			  <el-menu-item @click="$router.push('/HomePage/'+$route.params.miss)"  index="1" id="indexs">首页</el-menu-item>
			  <el-submenu index="2">
			    <template slot="title">博客</template>
			    <el-menu-item index="2-1"   
				@click="$router.push('/boke/'+$route.params.miss)">音乐播客</el-menu-item>
			    <el-menu-item index="2-2">选项2</el-menu-item>
			    <el-menu-item index="2-3">选项3</el-menu-item>
			    <el-submenu index="2-4">
			      <template slot="title">选项4</template>
			      <el-menu-item index="2-4-1">选项1</el-menu-item>
			      <el-menu-item index="2-4-2">选项2</el-menu-item>
			      <el-menu-item index="2-4-3">选项3</el-menu-item>
			    </el-submenu>
			  </el-submenu>
	     <el-menu-item index="3"
			  @click="$router.push('/liuyan/'+$route.params.miss)">
				 留言
			  </el-menu-item>
		 <el-menu-item index="4"
			  class="aboutme">
			  <a href="#">随笔
			  </a></el-menu-item>
		 <el-menu-item index="5"
			  class="aboutme">
			  <a href="#">关于我
			  </a></el-menu-item>
			  <input type="text" placeholder="请输入内容" id="input">
			  <el-button type="info" plain id="select"
			  class="aboutme">搜索</el-button>
	        
			  <span id="logincontorller" v-show="showlogin==true?true:false">
			  <el-button type="success" plain id="loginbutton"
			  @click="$router.push('/')">登录</el-button>
			  <el-button type="primary" plain
			    @click="$router.push('/')">注册</el-button>
			  </span> 
			  <span style="width: 100px !important;" v-show="showlogin==true?false:true">
				  <el-button type="primary" plain @click="showlogins" id="loginout">退出</el-button>
			      <el-button type="success" plain 
				  @click="$router.push('/login')">后台</el-button>
			  </span>
			</el-menu>
			</div>

		</div>
		<router-view name="header"></router-view>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
	    data() {
	      return {
	        activeIndex: '1',
	        activeIndex2: '1',
			showlogin:false,
	      };
	    },
	    methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      },
		   showlogins() {
		          this.$confirm('确定退出登录?', '提示', {
		            confirmButtonText: '确定',
		            cancelButtonText: '取消',
		            type: 'warning'
		          }).then(() => {
					this.showlogin=true
		            this.$message({
		              type: 'success',
		              message: '退出成功!',			
		            });
		          }).catch(() => {
		            this.$message({
		              type: 'info',
		              message: '已取消退出'
		            });          
		          });
		        },
			
				
			backstage(){
				  axios.post("http://43.142.24.86:9999/VIPLogin",{
					  
				  }).then(vip=>{
					  
				  })
			}
		  
	    }
	
	
	  }
	
</script>


<style scoped>
	.el-menu-item{
		padding: 0 50px;
		font-size: 15px; 
		
	}
	.el-menu-item a{
		text-decoration: none;
	}
	#indexs{
		margin-left: 120px;
	}
	#input{
		margin-left: 120px;
		margin-top: 17px;
		width:350px;
		height: 23px;
		outline: none;
		/* border-radius: 2px;
		border: none; */
	}
	#logincontorller{	
	}
	#select{
		margin-left: 10px;
		padding:  7px 12px;
	}
	#loginbutton{
		margin-left: 170px;
	}
	#loginout{
		margin-left: 10%;
	}	
	@media (max-width:1653px){
		.el-menu-item{
			/* color: crimson !important; */
			padding: 0 30px;
			margin-left: 8%;			
		}
		#loginout{
			margin-left: 10%;		
		}		
	}	
	@media (max-width:1500px){
		.el-menu-item{
			/* color: crimson !important; */
			padding: 0 20px;
			margin-left: 8%;				
		}
		#loginbutton{
			margin-left: 140px;
		}		
	}
	@media (max-width:1350px){
		#loginout{
			padding: 0 20px;
		    margin-left: 7%;
			height: 40px;
		}
		#input{
			margin-left: 100px;
			margin-top: 17px;
			width:300px;
			height: 23px;
			outline: none;			
		}
		#indexs{
			margin-left: 100px;
		}
	}
	@media (max-width:1200px){
		.el-menu-item{
			/* color: crimson !important; */
			padding: 0 15px;
			margin-left: 7%;				
		}
		#input{
			margin-left: 70px;
			margin-top: 17px;
			width:200px;
			height: 23px;
			outline: none;		
		}		
	}
	@media (max-width:1050px){
		.el-menu-item{
			/* color: crimson !important; */
			padding: 0 20px;
			margin-left: 6%;			
		}
		#loginout{
			margin-left: 4%;	
		}
		#input{
			margin-left: 30px;
			margin-top: 17px;
			width:180px;
			height: 23px;
			outline: none;		
		}	
	}
	
	@media (max-width:1000px){
		.el-menu-item{
			/* color: crimson !important; */
			padding: 0 15px;
			margin-left: 5%;
				
		}
		#indexs{
			margin-left: 70px;
		}
		#loginout{
			margin-left: 4%;
		    
		}
		#input{
			margin-left: 30px;
			margin-top: 17px;
			width:180px;
			height: 23px;
			outline: none;
			
		}	
	}
	@media (max-width:900px){
		.el-menu-item{
			/* color: crimson !important; */
			padding: 0 13px;
			margin-left: 4%;
				
		}
		#indexs{
			margin-left: 50px;
		}
		#loginout{
			margin-left: 3%;
		
		}
		#input{
			margin-left: 20px;
			margin-top: 17px;
			width:150px;
			height: 23px;
			outline: none;
			
		}
		
		
	}
	@media (max-width:800px){
		.el-menu-item{
			/* color: crimson !important; */
			padding: 0 12px;
			margin-left: 4%;
				
		}
		#indexs{
			margin-left: 30px;
		}
		#loginout{
			margin-left: 4%;
		
		}
		#input{
			margin-left: 20px;
			margin-top: 17px;
			width:115px;
			height: 23px;
			outline: none;
			
		}
		
	}
	@media (max-width:720px){
		.el-menu-item{
			/* color: crimson !important; */
			padding: 0 10px;
			margin-left: 3%;
				
		}
		#indexs{
			margin-left: 15px;
		}
		#loginout{
			margin-left: 4%;
		    padding: 5px 10px;
		}
		#input{
			margin-left: 16px;
			margin-top: 17px;
			width:110px;
			height: 23px;
			outline: none;
			
		}
		
	}

	@media (max-width:650px) {
		.aboutme{
			display: none;
		}
	}
	
	@media (max-width:480px) {
		.aboutme{
			display: block;
			float: left;
		}
		#select{
			display: none;
		}
		.el-menu-item{
			padding: 0 18px;
			margin-left: 3%;			
		}
		#input{
			margin-left: 18px;
			margin-top: 17px;
			width:360px;
			height: 26px;
			outline: none;
			border-radius: 2px;
			border: none;
		}
		#loginout{
			margin-left: 3%;
		    padding: 4px 5px;
		}
		
	}
	@media (max-width:452px){
		.aboutme{
			display: block;
			float: left;
		}
		.el-menu-item{
			padding: 0 16px;
			margin-left: 1%;			
		}
		#input{
			margin-left: 15px;
			margin-top: 17px;
			width:340px;
			height: 26px;
			outline: none;
			border-radius: 2px;
			border: none;
		}
	}
	@media (max-width:435px){
		.aboutme{
			display: none;
			float: left;
		}
		#input{
			margin-left: 15px;
			margin-top: 17px;
			width:310px;
			height: 26px;
			outline: none;
			border-radius: 2px;
			border: none;
		}
		.el-menu-item{
			padding: 0 32px;
			margin-left: 5%;			
		}
		
	}
	@media (max-width:400px){
		.aboutme{
			display: none;
			float: left;
		}
		.el-menu-item{
			padding: 0 26px;
			margin-left: 5%;			
		}
		#input{
			margin-left: 10px;
			margin-top: 17px;
			width:270px;
			height: 26px;
			outline: none;
		}
	}
	
	

		
	
	

		
	
	
</style>

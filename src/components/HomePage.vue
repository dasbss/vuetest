<template>
	<div id="app">
	    <div>	
			<div class="block">
			    <el-carousel trigger="click" height="1070px"> 
			      <el-carousel-item><!-- v-for="item in 4" :key="item" -->
			      <img ref="img" width="100%" src='https://img-baofun.zhhainiao.com/fs/8237f247891b790409917bdea946a866.jpg'>   
				  </el-carousel-item>
				  <el-carousel-item>
				  <img width="100%" src="https://img-baofun.zhhainiao.com/fs/79b087ac3dbef71cad973c3ca9f3ea30.jpg">   
				  </el-carousel-item>
				  <el-carousel-item>
				  <img width="100%" src="https://img-baofun.zhhainiao.com/fs/3a1c14c4e2704bed0c579b4da8e3f830.jpg">   
				  </el-carousel-item>
				  <el-carousel-item>
				  <img width="100%" src="https://img-baofun.zhhainiao.com/fs/f89409e14fc6465d356ccf6421dddc48.jpg">   
				  </el-carousel-item>
			    </el-carousel>
				
				<div class="SelfIntroduction">
					<h2>自我介绍</h2>
				<div class="self-introduction">
					个人博客比较简陋,欢迎指出问题，联系方式：qq1169112434@163.com。
					注：博客是个人博客，博客同步更新。 		
				</div>
				   <h4>结束语：世界上只有两句真理：1、人一定会死。2、程序一定有Bug。

        谢谢观看！！！！</h4>
				</div>
			  </div>
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        activeIndex: '1',
	        activeIndex2: '1',
			height:''
	      };
	    },
	    methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    },
		mounted(){	
			setTimeout(()=>{
				this.height=this.$refs.img.height+'px'
			},1)
			window.onresize=()=>{
				this.height=(this.$refs.img.height)+'px'
			}
		}/* ,
		
		computed:{
			...mapState(['loginusername'])
		} */
	  }
	
</script>

<style>
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
		#select{
			margin-left: 10px;
			padding:  7px 12px;
		}
		#loginbutton{
			margin-left: 170px;
		}
		
		.SelfIntroduction{
			text-align: center;
			width: 100%;
			height: 100%;
		}
	
	
	/* 走马灯 */
	  .el-carousel__item h3 {
	     color: #475669;
	     font-size: 14px;
	     opacity: 0.75;
	     line-height: 150px;
	     margin: 0;
	   }
	 
	   .el-carousel__item:nth-child(2n) {
	      background-color: #99a9bf;
	   }
	   
	   .el-carousel__item:nth-child(2n+1) {
	      background-color: #d3dce6;
	   }
  
       
	   
	  
	 
	 
	 @media (max-width:1920px){
	 	 	   .el-carousel{
	 	 		   height: 800px;
	 	 	   }
	   
	 }
	   @media (max-width:1800px){
	 	   .el-carousel{
	 		   height: 530px;
	 	   }
	     
	   }
        @media (max-width:1700px){
    		   .el-carousel{
    			   height: 530px;
    		   }
    
  		}
       @media (max-width:1450px){
  		   .el-carousel{
  			   height: 510px;
  		   }
  
		}
		@media (max-width:1267px){
		   .el-carousel{
			   height: 600px;
		   }
		  
		}
		@media (max-width:1088px){
		   .el-carousel{
			   height: 500px;
		   }
		  
		}
 
       @media (max-width:908px){
		   .el-carousel{
			   height: 400px;
		   }
	   }
	   @media (max-width:729px){
	   		   .el-carousel{
	   			   height: 300px;
	   		   }
	   }
		@media (max-width:552px){
				   .el-carousel{
					   height: 200px;
				   }
		} 
</style>
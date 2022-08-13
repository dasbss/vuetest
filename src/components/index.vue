<template>
	<div>
		<div id="left">
			     <div class="left-div">
	                <p id="p1">Back</p>
					<p>stage</p>
			
			     </div>
				
				<li @click="$router.push('/yonghuguanli')">
					<i class="fa fa-address-book"></i> &nbsp;
					用户管理
				</li>
				<li @click="$router.push('/bokeguanlis')">
					<i class="fa fa-user-circle"></i> &nbsp;
					播客管理
				</li>
				<li @click="$router.push('/comment')">
					<i class="fa fa-edit"></i>&nbsp;
					评论管理
				</li>
				<li @click="$router.push('/comment')">
					<i class="fa fa-edit"></i>&nbsp;
					xx管理
				</li>
				
			
		</div>
		
		<div id="rigth">
			<div class class="rigth-div">
				<div class="rigth-div1">
				  后台
				</div>
				<div class="rigth-div2"></div>
                <div class="right-div3">工号:</div>
				<div class="right-div4">Lqm4399</div>
				<div class="right-div5">Administrator</div>
			</div>
			
			<div class="right-boke">
				后台管理
			</div>
			
			<div class="right-view">
				<div class="right-view-div2">
			       <router-view name="children"></router-view>
			   </div>
			</div>
		</div>
		
	</div>
</template>

<script>
	
	export default{
	  methods:{
		  bokeguanli(){
			  this.$router.push("/bokeguanli")
			  
		  }
	  }
	}
</script>

<style scoped>
	div{
	    padding: 0;
		margin: 0;
	
	}
	#left{
		width: 20%;
		height: 900px;
		float: left;
		color: #fff;
		background-color:#2B333E;
	}
	.left-div{
		height: 100px;
	}
	.left-div div{
		height: 100%;
		width: 100px;
	}
    .left-div p{  
		font-size: 30px;
	    display: inline-block;
	}
	.left-div #p1{
		margin-top: 10px;
		margin-left: 32%;
		color: mediumseagreen;
	}
 	#rigth{
		float: left;
		height: 1080px;
		width: 79.7%;
		background-color: #e9ebee;
	}
	.rigth-div{
		width: 100%;
		height: 70px;
		background-color:#2B333E;
		color: #fff;
		font-size: 20px;
		font-family: serif;
		line-height: 65px;	
		text-indent: 1em;
	}
	.rigth-div div{
		height: 70px;
		float: left;		
	}
	.rigth-div1{
		width: 15%;
	}
	.rigth-div2{
		width: 57%;
		
	}
	.right-div3{
		width: 5%;
	
	}
    .right-div4{
		width: 8%;
		font-size: 18px;
		
	}
	.right-div5{
		width: 1%;
		font-size: 18px;
	}
	.right-boke{
		width: 100%;
		height: 70px;
		float: left;
		font-size: 24px;
		line-height: 50px;
		text-indent: 1em;
		font-family: sans-serif;
        background-color: #e9ebee;
	}
	.right-view{
		height: 1000px;
		margin-left: 20px;
		margin-right: 20px;
		background-color: #fff;
	}
	li{
		cursor : pointer;
		color: #fff;
		line-height: 45px;
		font-size: 20px;
		list-style: none;
		height: 50px;
		margin-top: 10px;
		text-align: center;
	}
	li:hover{
		background-color: aquamarine;
		color: darkgray;
	}
	
	@media (max-height:1080px){
		#left{
			width: 20%;
			height: 1080px;
		}
		.right-view{
			height: 1000px;
		}
	}
	@media (max-height:900px){
		#left{
			width: 20%;
			height: 900px;
		}
		.right-view{
			height: 800px;
		}
	}
	
</style>
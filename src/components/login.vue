<template>
	<div id="body">
		  <div id="input" v-show="register==true?true:false">
			  <div class="but">
			  <input type="text" placeholder="UserName/Emial" id="input1"
			  v-model="username" /><br/>
			  <input type="password" placeholder="PassWoed" id="input2"
			  v-model="password" /><br/>  
			  </div>
			  
			  <div id="forget">
				<a href="#">forget your id or password help?</a>
			  </div> 
			  
			  <div id="but">
				  <button @click="login">登录</button>
				  <button @click="register=false">注册</button>
			  </div>
			  
		  </div>
		  <div id="input" v-show="register==true?false:true">
		  		 <div class="but">
		  			  <input type="text" placeholder="UserName/Emial" id="input1"
		  			  v-model="username" /><br/>
		  			  <input :type="passwordshow==true?'password':'text'" placeholder="PassWoed" id="input2"
		  			  v-model="password"/>
					  <i class="fa fa-eye-slash" @click="passwordshow=!passwordshow"></i>	
					  <br/>  
		  			  <input type="ConfirmPassword" placeholder="Confirm Password" id="input3"
		  			  v-model="ConfirmPassword"/><br/>   
				</div>
		  			  <div id="but">
						  <button @click="register=true">返回</button>
		  				  <button>注册</button>
		  			  </div>
		  		</div>	  
		  </div>
		  
	</div>
</template>

<script>
	import axios from 'axios'
	/* import {mapState,mapMutations} from 'vuex' */
	export default{
		data(){
			return{
				register:true,
				username:'',
				password:'',
				passwordshow:true,
				ConfirmPassword:''              
			}
		},
		methods:{
			login(){
				axios.post("http://43.142.24.86:9999/Login",{
					'username':this.username,
					'password':this.password
				}).then(dl=>{
					
					if(this.username==''){
						alert("用户名或密码不能为空!")
					}else if(this.password==''){
						alert("用户名或密码不能为空!")
					}
					else if(dl.data.login==true){
						alert("登录成功")
						/* 携带参数，但路径带参数 */
						
					/* 	 this.$router.push('/bokeguanli/'+dl.data.user) */
						this.$router.push('/bokeguanlis')
					/* 	localStorage.setItem("loginusername",this.username) */
						/* this.$router.push('/HomePage')
						this.loginusername(this.username) */
					}else{
						alert("用户名或密码错误!")
					}		
				})
			}/* ,
			...mapMutations(['loginusername']) */
		}
	}
</script>

<style scoped>
	#body{
		width: 1920px;
		height: 1080px;
	    background-image: url(../assets/img/3890035044d0e2d81e56bf1f6818c928.jpeg);
		background-size: cover;
		background-repeat: no-repeat;
		}
	#input{
		
		width: 550px;
		height: 550px;
		position: fixed;
		left: 30%;
		top: 17%;
		background-color: rgba(255,255,255,0.2);
		border:  white solid 0.0625rem;
		/* border-radius: 14px; */
	}
	#forget{
		margin-top: 20px;
		text-align: center;
		
	}
	#forget a{
		color:beige;
		text-decoration: none;
	}
	#forget a:hover{
		color: skyblue;
	}
	.but{
		margin-top: 150px;
		margin-left: 80px;
		
	}
	.but input{
		width: 380px;
		height: 36px;
		margin-top: 30px;
		border-radius: 5px;
		border: none;
		background-color: rgba(255,255,255,0.8);
		padding-left: 10px;
		box-sizing: border-box;
	}
	.fa-eye-slash{
		font-size: 21px;
		
	}
	.fa-eye-slash:hover{
		color: white;
	}
	#but{
		margin-left: 105px;
		margin-top: 110px;
	}
	#but button{
		margin-left: 35px;
		width: 120px;
		height: 30px;
		background-color: rgba(255,255,255,0.4);
		color:black;
		border: none;
		border-radius: 7px;
	}
	#but button:active{
		
		color: cyan;
	}
</style>

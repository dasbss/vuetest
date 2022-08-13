<template>
	<div class="father">
		<div class="twobox">
			接受赞美和批评，希望大家多多留言，指出不足和错误欢迎进行留言和评论</div>
		
		<div>
		<div class="liuyan">
			<div class="onebox">
				留言板
			</div>
			<el-input
			  type="textarea"
			  :rows="3"
			  placeholder="请输入内容"
			  v-model="textarea">
			</el-input>
			<el-button slot="reference"
			@click="insert">发表</el-button>
			<div>
				<table>
					<ul v-for="(i,key) in select" :key="key">
						<th>
							<td>{{i.username}}:</td>
							<td>{{i.content}}</td>
							<br/>
							<td>{{i.time}}</td>
						</th>
					</ul>
				</table>
			</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import axios from 'axios'
	export default {
	  data() {
	    return {
	      textarea: '',
		  select:''
	    }
	  },
	  mounted(){
		  axios.get("http://localhost:9999/selectMessages")
		  .then(select=>{
			  this.select=select.data
		  })
	  },
	  methods:{
		  insert(){
			  //有bug
			  if(this.textarea==''){
				  this.$message.error('留言不能为空，请输入');
			  }else{
			  axios.post("http://localhost:9999/insert",{
				'content':this.textarea,
				'username':this.$route.params.miss
	/* 			'username':localStorage.getItem("loginusername") */
			  }).then(insert=>{
				if(this.$route.params.miss==null){
					 this.$message({
					          message: '未登录不能留言,跳转登录页面',
					          type: 'warning'
					        });
					this.$router.push("/")
				}else{
					//insert.data.messages==true)
				if(this.$route.params.miss!=null && this.$route.params.miss!=""){
					this.$message({
					  type: 'success',
					  message: '留言成功!',					
					});
				   this.$router.go(0)
				} 	
			  }
			  })
			  }
		  }
	  }
	}
</script>

<style scoped>
	.father{
		height: 1080px;
		width: 100%;
		background-image:url('../assets/img/src=http___m.13lz.cn_d_file_2021-06-18_d67d12779bdf3822482e68682548a274.jpg&refer=http___m.13lz.webp')
	}
	.liuyan{
		width: 800px;
		height: 940px;
		border-color: rgba(255, 255, 255, 0.1);
		position: absolute;
		left: 550px;
		top: 200px;
	}
	.onebox{
		width: 100%;
		text-align: center;
		font-size: 30px;
		margin-bottom: 30px;
	}
	.twobox{
		text-indent: 2em;
		margin-top: 10px;
		font-size: 22px;
		font-style: initial;
	}
	ul{
			  padding: 0 0 0 0;
	}
	table{
			   width: 100%;
	}
	table th{
			   width: 800px;
			   height: 90px;
	}
	table th {
		border: 1px solid black;
	}
	
</style>
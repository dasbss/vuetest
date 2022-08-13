<template>
	<div>
       <div>
		   <div class="caozuo" style="background-color:  #e9ebee;"> 
			<el-input
			  style="width: 200px;"
			  type="textarea"
			  autosize
			  placeholder="搜索评论ID"
			  v-model="inputID">
			</el-input>
			<el-button type="primary" plain style="padding: 9.5px 10px;margin-right: 3%;"
			 @click="select" >搜索</el-button>
			 <el-input
			   style="width: 200px;"
			   type="textarea"
			   autosize
			   placeholder="搜索评论者"
			   v-model="inputUsername">
			 </el-input>
			 <el-button type="primary" plain style="padding: 9.5px 10px;margin-right: 3%;"
			  @click="selectByUsername" >搜索</el-button>
			  
			 <el-button type="info" plain style="padding: 9.5px 10px; margin-left: 10%;"
			  @click="$router.go(0)">重置</el-button>
		   </div>
		   <div class="table-calss">
			   <table class="table">
				   <tr>
				   	<td  style="width: 80px;">评论ID</td>
				   	<td  style="width: 500px;">评论内容</td>
				   	<td  style="width: 300px;">评论人</td>
				   	<td  style="width: 300px;">时间</td>
				   	<td  style="width: 285px;">操作</td>
				   </tr>			   
			   </table>
			   <table class="table-data">
				   <tr v-for="(i,key) in list" :key="key">
					   <td style="width: 80px;">{{i.id}}</td>
					   <td style="width: 500px;">{{i.content}}</td>
					   <td style="width: 300px;">{{i.username}}</td>
					   <td style="width: 300px;">{{i.time}}</td>
					   
						   <el-button type="danger"  plain  @click="deletes(i.id)"
						   style="margin-left: 5px; padding:9.5px 10px; margin-top: 5px;">删除</el-button>
						   </tr>
					   
				   </tr>
			   </table>
			</div>
	   </div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				list:'',
				inputID:'',
			    inputUsername:'',
			}
		},
		mounted(){
			axios.get("http://43.142.24.86:9999/selectMessages").then(sm=>{
				this.list=sm.data
			})
		},
		methods:{
			
			select(){
				if(this.inputID==''){
					this.$message.error('请输入ID，这是一条错误消息');
				}else{
				axios.get("http://43.142.24.86:9999/selectById",{
					params:{
						'id':this.inputID
					}
				}).then(select=>{
					let arr=[]
					arr.push(select.data)
					this.list=arr
				})
				}
			},
			selectByUsername(){
				if(this.inputUsername==''){
					this.$message.error('请输入名字，这是一条错误消息');
				}else{
				axios.get("http://43.142.24.86:9999/selectByUsername",{
					params:{
						'username':this.inputUsername
					}
				}).then(sU=>{
					this.list=sU.data
				})
				}
			},
			deletes(id){
				this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
				      confirmButtonText: '确定',
				      cancelButtonText: '取消',
				      type: 'warning',
				      center: true
				    }).then(() => {
				      this.$message({
				        type: 'success',
				        message: '删除成功!',
						
				      });
					  axios.get("http://43.142.24.86:9999/deleteById",{
					  	params:{
					  		'id':id
					  	}
					  }).then(dele=>{
					  	this.$router.go(0)
					  })
				    }).catch(() => {
				      this.$message({
				        type: 'info',
				        message: '已取消删除'
				      });
				    });
			}
		}
	}
</script>

<style scoped>
	.table tr td{
		font-size:20px;
		cursor : pointer;
	}
	.table-data tr td{
		font-size:20px;
		width:300px;
		cursor : pointer;
	}
	.table tr{
		background-color:  #e9ebee;
	}
	.table-data tr:hover{
		background-color: antiquewhite;
	}
	
</style>
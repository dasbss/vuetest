<template>
	<div>
		<div>
			<div class="caozuo">
					<el-input
					  style="width: 200px;"
					  type="textarea"
					  autosize
					  placeholder="搜索ID"
					  v-model="inputID">
					</el-input>
					<el-button type="primary" plain style="padding: 9.5px 10px;margin-right: 3%;"
					 @click="select" >搜索</el-button>
					<el-input
						  style="width: 200px;"
						  type="textarea"
						  autosize
						  placeholder="搜索博客"
						  v-model="inputBokeName">
					</el-input>	
				<el-button type="primary" plain style="padding: 9.5px 10px;"
				 @click="findByboke">搜索</el-button>
				<el-button type="info" plain style="padding: 9.5px 10px; margin-left: 10%;"
				 @click="$router.go(0)">重置</el-button>
				<!-- <el-button type="success"  plain style="padding: 9.5px 10px;"
				 @click="$router.push('/bokeAddData')">新增</el-button> -->
				 <el-button type="success" @click="dialogFormVisibles = true"  plain
				 style="margin-left: 5px; padding:9.5px 10px;">新增</el-button>      
				 <el-dialog title="新增数据" :visible.sync="dialogFormVisibles">
				   <el-form>
				    <el-form-item label="博客名:" :label-width="formLabelWidth">
				    <el-input v-model="bokename"  placeholder="请输入用户名"></el-input>
				    </el-form-item>
				    <el-form-item label="内容:" :label-width="formLabelWidth">
				    <el-input v-model="bokeinfo" placeholder="请输入密码" type="textarea">
				    </el-input>
				    </el-form-item>
				   </el-form>
				   <div slot="footer" class="dialog-footer">
				     <el-button @click="dialogFormVisibles = false">取 消</el-button>
				     <el-button type="primary" @click="addData" :plain="true">确 定</el-button>
				   </div>
				 </el-dialog>
			<!-- 	<button @click="$router.push('/bokeAddData')">新增</button> -->
				  <!--  <el-button type="danger"plain style="padding: 9.5px 10px;"
					 @click="pls">批量删除</el-button> -->
				
			</div>
			<div class="table-calss">
			<table class="table">
				<tr>
					<td  style="width: 50px;">ID</td>
					<td  style="width: 200px;">博客</td>
					<td  style="width: 775px;">内容</td>
					<td  style="width: 200px;">时间</td>
					<td  style="width: 100px;">点赞</td>
					<td  style="width: 140px;">操作</td>
				</tr>
			</table>
			<hr />
			<table class="tbale-data">
				<tr v-for="(i,key) in pagelist" :label="i.id" :key="key">
					<td style="width: 50px;">{{i.id}}</td>
					<td style="width: 195px;">{{i.bokename}}</td>
					<td style="width: 779px;">{{i.bokeinfo}}</td>
					<td style="width: 200px;">{{i.boketime}}</td>
					<td style="width: 93px;">{{i.boked}}</td>
					
				<el-button type="warning" @click="dialogFormVisible = true"  plain
				style="margin-left: 5px; padding:9.5px 10px;">更新</el-button>      
				<el-dialog title="修改博客" :visible.sync="dialogFormVisible">
				  <el-form>
					<el-form-item label="ID:" :label-width="formLabelWidth">
				    <el-input v-model="bokeid"  placeholder="请输入ID"></el-input>
					</el-form-item>
				    <el-form-item label="博客名:" :label-width="formLabelWidth">
				      <el-input v-model="bokename"  placeholder="请输入博客名"></el-input>
				    </el-form-item>
				    <el-form-item label="内容:" :label-width="formLabelWidth">
				      <el-input v-model="bokeinfo" placeholder="请输入内容" type="textarea">
				      </el-input>
				    </el-form-item>
				
				  </el-form>
				  <div slot="footer" class="dialog-footer">
				    <el-button @click="dialogFormVisible = false">取 消</el-button>
				    <el-button type="primary" @click="update" :plain="true">确 定</el-button>
				  </div>
				</el-dialog>	
					
				<el-button type="danger"  plain  @click="deletes(i.id)"
				style="margin-left: 5px; padding:9.5px 10px; margin-top: 5px;">删除</el-button>
				</tr>
				
			</table>			
			</div>
		</div>
		<div class="page">
			<div>
			<el-pagination
			  @current-change="pages"
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				page:1,
				pagelist:'',
				dialogFormVisible: false,
				dialogFormVisibles:false,
				formLabelWidth: '120px',
				inputID:'',
				inputBokeName:'',
				bokeid:'',
				bokename:'',
				bokeinfo:'',
				
			}
		},
		mounted(){
			axios.get("http://43.142.24.86:9999/PageSelectData",{
				params:{
					'id':this.page
				}
			}).then(page=>{
				this.pagelist=page.data
			})
		},
		methods:{
			findByboke(){
				if(this.inputBokeName!=''){
				axios.get("http://43.142.24.86:9999/selectDataByName",{
					params:{
						'bokename':this.inputBokeName
					}
				}).then(findByboke=>{
					this.pagelist=findByboke.data.data
				})
				}
			},
		
			select(){
				axios.get("http://43.142.24.86:9999/selectDataById",{
					params:{
						'id':this.inputID
					}
				}).then(select=>{
					let arr=[]
					arr.push(select.data.data)
					this.pagelist=arr
				})
				
			},
			pages(pagenum){
				this.page=pagenum
				console.log(pagenum)
				
			},
			addData(){
				
				if(this.bokename==''&&this.bokeinfo==''){
					 this.$message.error('用户名或密码不能为空，请输入!');
				}else if(this.bokename==''){
					this.$message({
					       message: '博客不能为空，请添加博客名！',
					       type: 'warning'
					     });
				}else if(this.bokeinfo==''){
					this.$message({
					       message: '内容不能为空，请添加博客内容！',
					       type: 'warning'
					     });
				}

				if(this.bokename!=''&&this.bokeinfo!=''){					
				axios.post("http://43.142.24.86:9999/addData",{
					'bokename':this.bokename,
					'bokeinfo':this.bokeinfo,
				}).then(add=>{
					  this.$message({
					          message: '添加成功！！！',
					          type: 'success'
					        });
						this.$router.go(0)
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
					  axios.get("http://43.142.24.86:9999/DeleteById",{
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
			},
			update(){
				axios.post("http://43.142.24.86:9999/updateByIds",{
					'id':this.bokeid,
					'bokename':this.bokename,
					'bokeinfo':this.bokeinfo,	
				}).then(update=>{
					console.log(update.data.data)
					if(update.data.data==1){
					 this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
							this.$router.go(0)
					}
					if(this.bokeinfo==''&& this.bokename==''){
						alert("博客名或内容不能为空，请输入!")
					}else if(this.id==''){
						alert("请输入ID!")
					}
				
					
				})
			}
		},
		watch:{
			page(){
				axios.get("http://43.142.24.86:9999/PageSelectData",{
					params:{
					'id':this.page,
				}}).then(page=>{
					  this.pagelist=page.data
					  console.log(page.data)
			})
			}
		}
	}
</script>

<style scoped>
	.caozuo{
		background-color:  #e9ebee;
	}
	.table tr td{
		background-color:  #e9ebee;
	}
	.table tr td{
		font-size:20px;
		cursor : pointer;
	}
	.tbale-data tr td{
		font-size:20px;
		width:300px;
		cursor : pointer;
	}
	.tbale-data tr:hover{
		background-color: antiquewhite;
	}
	
	.page div{
		 margin-left: 18%
	}
</style>
<template>
	<div>
		<div class="select"></div>
		<div class="caozuo">
			<el-input
			  style="width: 200px;"
			  type="textarea"
			  autosize
			  placeholder="请输入ID"
			  v-model="input">
			</el-input>
			<el-button type="primary" plain style="padding: 9.5px 10px;margin-right: 3%;"
			 @click="sousou" >搜索</el-button>
			<el-input
				  style="width: 200px;"
				  type="textarea"
				  autosize
				  placeholder="请输入用户名"
				  v-model="inputs">
			</el-input>	
		<el-button type="primary" plain style="padding: 9.5px 10px;"
		 @click="findBy	">搜索</el-button>
		<el-button type="info" plain style="padding: 9.5px 10px; margin-left: 10%;"
		 @click="$router.go(0)">重置</el-button>
		<!-- <el-button type="success"  plain style="padding: 9.5px 10px;"
		 @click="$router.push('/bokeAddData')">新增</el-button> -->
		 <el-button type="success" @click="dialogFormVisibles = true"  plain
		 style="margin-left: 5px; padding:9.5px 10px;">新增</el-button>      
		 <el-dialog title="新增数据" :visible.sync="dialogFormVisibles">
		   <el-form>
		    <el-form-item label="用户名:" :label-width="formLabelWidth">
		    <el-input v-model="username"  placeholder="请输入用户名"></el-input>
		    </el-form-item>
		    <el-form-item label="密码:" :label-width="formLabelWidth">
		    <el-input v-model="password" placeholder="请输入密码">
		    </el-input>
		    </el-form-item>
		 	<el-form-item label="邮箱:" :label-width="formLabelWidth">
		 	<el-input v-model="emailbox" placeholder="请输入邮箱">
		 	</el-input>
		 	</el-form-item>
		   </el-form>
		   <div slot="footer" class="dialog-footer">
		     <el-button @click="dialogFormVisibles = false">取 消</el-button>
		     <el-button type="primary" @click="add" :plain="true">确 定</el-button>
		   </div>
		 </el-dialog>
	<!-- 	<button @click="$router.push('/bokeAddData')">新增</button> -->
	    <el-button type="danger"plain style="padding: 9.5px 10px;"
		 @click="pls">批量删除</el-button>
		
		</div>
		<hr/>
		<div class="table">
			<table id="table">
				<tr>
					<td>编号	</td>
					<td>用户名</td>
					<td>密码</td>
					<td id="td-emailbox">邮箱</td>
					<td>操作</td>
				</tr>	
			</table>
			<hr/>
			<table id="table" style="background-color: #fff;">
				
				<tr v-for="(i,key) in pagelist" :label="i.id" :key="key">
					<td>
						<!-- <ul>
							<li v-for="(data,index) of datalist" :key="datalist.id">
							<input type="checkbox" v-model="checkGroup" :value="data.name"/>{{data}}
							</li>
						</ul> -->
						<input type="checkbox" v-model="chengbox" :value="i.id">
						{{i.id}}
					</td>
					<td>
						{{i.username}}
					</td>
					<td>					
						{{i.password}}
					</td>
					<td>
						{{i.emailbox}}
					</td>
					
					<td id="table_caozuo" >
					      <el-button type="warning" @click="dialogFormVisible = true"  plain
						  style="margin-left: 5px; padding:9.5px 10px;">更新</el-button>      
					      <el-dialog title="修改" :visible.sync="dialogFormVisible">
					        <el-form>
							  <el-form-item label="ID:" :label-width="formLabelWidth">
							    <el-input v-model="id"  placeholder="请输入ID"></el-input>
							  </el-form-item>
					          <el-form-item label="用户名:" :label-width="formLabelWidth">
					            <el-input v-model="username"  placeholder="请输入用户名"></el-input>
					          </el-form-item>
					          <el-form-item label="密码:" :label-width="formLabelWidth">
					            <el-input v-model="password" placeholder="请输入密码">
					            </el-input>
					          </el-form-item>
							  <el-form-item label="邮箱:" :label-width="formLabelWidth">
							    <el-input v-model="emailbox" placeholder="请输入邮箱">
							    </el-input>
							  </el-form-item>
					        </el-form>
					        <div slot="footer" class="dialog-footer">
					          <el-button @click="dialogFormVisible = false">取 消</el-button>
					          <el-button type="primary" @click="update" :plain="true">确 定</el-button>
					        </div>
					      </el-dialog>
					
							
						<el-button type="danger"  plain  @click="deletes(i.id)"
						style="margin-left: 5px; padding:9.5px 10px;">删除</el-button>
					</td>
				</tr>	
			</table>
			
			<!-- <div class="Dataform">
				<ul id="ul1">
					<li>编号</li>
					<li>用户名</li>
					<li>密码</li>
					<li>邮箱</li>
					<li>操作</li>
				</ul>
				<ul v-for="(i,key) in ls" :label="i.id" :key="key" id="ul2">
					<li>{{i.id}}</li>
					<li>{{i.username}}</li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div> -->
		</div>
		     <div class="page">
			 <div>
		     <el-pagination
			 @current-change="pages"
		     background
		     layout="prev, pager, next"
		     :total="100">
		     </el-pagination>
			 </div>
			 </div>
			 </div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				input:'',
				inputs:'',
				ls:'',
			    page:1,
				pagelist:'',
				chengbox:[],
				id:'',
		        emailbox:'',
		        username:'',
		        password:'',
		        dialogFormVisible: false,
				dialogFormVisibles:false,
		        formLabelWidth: '120px'
			}
		},
		//事件
		methods:{
			//新增
			add(){
				axios.post("http://43.142.24.86:9999/add",{
					'username':this.username,
					'password':this.password,	
					'emailbox':this.emailbox,
				}).then(add=>{
					if(add.data==1){
						this.$message({
						         message: '添加成功',
						         type: 'success'
						       });
							this.$router.go(0)
					}
					if(this.username==''&&this.password==''){
						 this.$message.error('用户名或密码不能为空，请输入!');
					}else if(this.emailbox==''){
						 this.$message.error('邮箱不能为空，请输入!');
					}
				})
			},		
			//修改
			update(){
				axios.post("http://43.142.24.86:9999/updateById",{
					'id':this.id,
					'username':this.username,
					'password':this.password,	
					'emailbox':this.emailbox,
				}).then(update=>{
					if(update.data.data==1){
					 this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
							this.$router.go(0)
					}
					if(this.username==''&& this.password==''){
						 this.$message.error('用户名或密码不能为空，请输入!');
					}else if(this.id==''){
						this.$message.error('ID未输入，请输入ID!');
					}else if(this.emailbox==''){
						this.$message.error('邮箱不能为空，请输入!');
					}
				
					
				})
			},
			/* 分页查询 */
			pages(pagenum){
				this.page=pagenum
				console.log(pagenum)
				
			},
			
			/* 批量删除 */
			pls(){
				axios.post("http://43.142.24.86:9999/deleteByIds",{			
				   'ids':this.chengbox
				}).then(dis=>{
						this.$router.go(0)				
					})
				},
			/* 根据id搜索 */
			sousou(){
				if(this.input==''){
					 this.$message.error('请输入ID，这是一条错误消息');
				}
				if(this.input!=''){
					axios.post("http:/43.142.24.86:9999/user",{
						'id':this.input,
						}).then(by=>{
						  let arr=[]
						  arr.push(by.data)
						  this.pagelist=arr
						  console.log(by.data)
					  
					})
				}/* else{
					axios.post("http://localhost:9633/PageList").then(bys=>{
						  this.pagelist=bys.data
						  
					})
				} */	    
			},
			//根据名字进行模糊查询
			findBy(){
			if(this.inputs!=''){
				axios.get("http://43.142.24.86:9999/findLIstByName",{				
						params:{
							'username':this.inputs
						}
				}).then(findbyusername=>{				
					this.pagelist=findbyusername.data.data
					console.log(this.pagelist)
				})
			} 
			},
		    /* 根据id进行删除*/
			deletes(id){
		    this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning',
		          center: true
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '删除成功!',
					
		          });
				  axios.get("http://43.142.24.86:9999/delete",{
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
			/* 	axios.get("http://localhost:9633/delete",{
					params:{
						'id':id
					}
				}).then(dele=>{
					this.$router.go(0)
				}) */
				
			}
		},
		
		//刷新页面配置
		mounted() {
			/* 分页查询 */
			axios.get("http://43.142.24.86:9999/PageList",{
				params:{
					'id':this.page,	 
				}
			}).then(page=>{
				this.pagelist=page.data
			}),
			/* 查询全部 */
			axios.get("http://43.142.24.86:9999/selectList").then(ls=>{
				this.ls=ls.data
			})
		},
		
		//监视
		watch:{
			page(){
				axios.get("http://43.142.24.86:9999/PageList",{
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
	 
      #table tr td{
		  font-size:20px;
		  width:300px;
		  cursor : pointer;
	  }
	  #table tr:hover{
		  background-color: antiquewhite;
	  }
	  
	  .caozuo{
		  background-color:  #e9ebee;
	  }
	  .caozuo button{
		  margin-left: 8px;
	  }
   
	
	  .table{
		  float: left;
	  }
	  .page{
		  width: 100%;
		  float: left;
	  }
	  .page div{
		  margin-left: 18%
	/* 	 */
	  }
	  .Dataform ul li{
		  list-style-type: none;
		  width: 20%;
	  }
	  .Dataform #ul1 li{
		  float: left;
	  }
	  .Dataform #ul2 li{
		  
	  }
</style>
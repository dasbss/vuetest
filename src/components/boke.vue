<template>
	<div id="farter"> 
		<div id="main">
			<div class="leftbox">
				<div class="leftheared">
					<span class="span1">全部播客</span>
					<span class="span2">共{{count}}篇</span>
				</div>
				<hr/>
				<div class="bokeinfo">
					<table class="leftboxtable">
						<tr v-for="(i,key) in selectlist" :key="key">
							<th id="th1"><img :src="i.boketx"></th>
					<!-- 		<th id="th2">
							 <td id="td-name">
									{{i.bokename}}
							 </td>
							 <td id="td-info">
									{{i.bokeinfo}}
							 </td>
							</th> -->
							<th id="th2">
								<li id="li-name">
									{{i.bokename}}
								</li>
								<li id="li-info">
									{{i.bokeinfo}}
								</li>
						
								
								<li id="li-tubiao">
										<span id="spanboked">
									<i class="fa fa-thumbs-o-up"
									@click="bokeds(i.id,i.boked)">{{i.boked}}</i>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-s-custom">
									{{i.username}} : {{i.boketime}}
									</i>
									</span>	
									<span>
									<button @click="xiangqing(i.id)">详情</button>
									<button>举报</button>
									</span>									
								</li>
										
								
							</th>
							
						</tr>
					
						 <span id="pagedatacount">当前页面有3条数据</span>	
					</table>
					<div class="leftbotton">
						<el-pagination
						  @current-change="pages"
						  background
						  layout="prev, pager, next"
						  :total="100">
						</el-pagination>
						</div>
				</div>
			<!-- 	<div class="leftbotton">
					<el-pagination
					  @current-change="pages"
					  background
					  layout="prev, pager, next"
					  :total="100">
					</el-pagination>
					</div> -->
				<!-- <span>
				    <button @click="page=1" id="pagebutton">1</button>
				  </span>
				  <span>
					<button @click="page=2" id="pagebutton">2</button>
				  </span>
				  <span>
					<button @click="page=3" id="pagebutton">3</button>
				  </span> -->
			
			</div>
			<div class="rightbox">
				<div class="rightfirstbox">
					<div class="rightfirstbox-heared">
						<h3>分类</h3>
					</div>
					<div class="rightfirstbox-main">
						<ul>
							<li @click="$router.push('/boke')"
							 v-for="(i,key) in selectleftlist" :key="key">
							&nbsp;&nbsp;&nbsp;
							<img class="img" :src="i.listtx">
							   {{i.listname}}
							</li>
						
						</ul>
					</div>
				</div>
				<div class="rightlastbox" style="color: black;">
					<h4 style="text-align: center;">最新评论</h4>
					<ul v-for="(i,key) in messages" :key="key">
					<li>
					 &nbsp; &nbsp;<i class="fa fa-user"></i>{{i.username}} : {{i.minfo}}
					</li>
					</ul>
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
  
	        activeIndex: '1',
	        activeIndex2: '1',
			
			selectlist:0,
			selectall:'',
			messages:'',
			page:1,
			count:'',
			dianzhanscount:'',
			selectleftlist:'',
			bokenum:0
	      }
	    },
		//计算属性
		/* computed:{
			msg(){
				return this.page*3
			}
		}, */
	    methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      },
		  pages(pagenum){
			  console.log(pagenum)
			  this.page=pagenum
			 
		  },
		  xiangqing(id){
			  this.$router.push('/test/	'+id)
		  },
		  bokeds(id,boked){ 
		     axios.get("http://43.142.24.86:9999/updateBokedAndBokedcountById",{
			 params:{
				 'id':id,
				 'boked':boked+1,
				 'bokedcount':this.bokenum
				 }
			 }).then(update=>{
				 console.log(update.data)
				 console.log(this.selectlist[id-1].bokedcount)
				 if(update.data==1&&this.selectlist[id-1].bokedcount!=0){
					 alert("点赞成功!!!")
					 this.$router.go(0)
					 this.selectlist[id-1].bokedcount==0
				 }else if(this.selectlist[id-1].bokedcount==0){
					 alert("您已经点赞过了。")
				 }	
			 })		  
		  }		
	    },
	/* 	mounted(){
			axios.get("http://localhost:9633/SelectAllById")
			.then(wc=>{
				this.selectlist=wc.data
				console.log(wc.data)
			})		
		}, */
		mounted(){
			axios.get("http://43.142.24.86:9999/PageSelectAlls",{
				params:{
					'id':this.page,	 
				}
			}).then(page=>{
				this.selectlist=page.data
			}),
			
			
			axios.get("http://43.142.24.86:9999/count")
			.then(count=>{
				this.count=count.data
			}),
			
			axios.get("http://43.142.24.86:9999/selectleftlist")
			.then(left=>{
				this.selectleftlist=left.data
			}),
			
		/* 	axios.get("http://localhost:9999/SelectList")
			.then(selectall=>{
				this.selectall=selectall.data
			}), */
			
			axios.get("http://43.142.24.86:9999/selectAllBokemessages")
			.then(messages=>{
				this.messages=messages.data
			})
			
			
			
		},
		watch:{
			page(){
				axios.get("http://43.142.24.86:9999/PageSelectAlls",{
					params:{
						'id':this.page,
					}
				})
				.then(page=>{
					this.selectlist=page.data
					console.log(page.data)
				})
			}
		}
		
	  }
	
</script>

<style scoped>
	/* 全局 */
	#farter{
		width: 1920px;
		height: 1080px;
		background-image: url('../assets/img/5f390fd2db2f811de91d15754764d2f2.jpeg');
	}
	/* 主体 */
	#main div{
		color: #b0aaaa;
		float: left;
		background-color: rgba(255, 255, 255, 0.5);
		/* background-color: rgba(255, 255, 255, 0.25); */
	}
	/* 主体左侧 */
	.leftbox{
		margin-top: 100px;
		margin-left: 317px;
		width: 45%;
		height:895px;
	}
	.leftbox .leftheared{
		width: 100%;
		height: 7%;
	/* 	border-radius: 45px; */
	}
	.leftbox .span1{
		color: black;
		font-size: 25px;
		line-height: 60px;
		margin-left: 25px;
	}
	.leftbox .span2{
		color: black;
		font-size: 25px;
		float: right;
		line-height: 60px;
		margin-right: 25px;
	}
	.leftboxtable tr #th2{
		width:650px;
		height:250px;
		border-bottom: #b0aaaa solid 2px;
		
	} 
	.leftboxtable tr{
		border-bottom: #FFFFFF solid 1px;
	}
	.leftboxtable tr #th1{
		width: 250px;
		height:250px;
	}
	.leftboxtable tr th img{
		float: left;
	}
	.leftboxtable #th2 li{
		list-style: none;
	}
	.leftboxtable #th2 #li-name{
		color: black;
		font-size: 23px;
		margin-bottom: 40px;
	}
	.leftboxtable #th2 #li-info{
		color: black;
		margin-bottom: 50px;
		font-size: 18px;
		text-indent: 2em;	
	}
	.leftboxtable #th2 .el-icon-s-custom{
		margin-left: 10px;
		font-size: 18px;
	}
	.leftboxtable #th2  #li-tubiao #spanboked{
		margin-right: 60px;
		
	}
	.leftboxtable #th2  #li-tubiao span button{
		margin-left: 10px;
		padding:  7px 12px;
	}
	.fa-thumbs-o-up{
		font-size: 24px;
		cursor : pointer;
	}
	.el-icon-star-off{
		font-size: 24px;
	}
	.el-icon-star-off:hover{
		color: yellow;
		opacity: 200px;
	}
	#pagedatacount{
		color:midnightblue;
		font-size: 19px;
	}
	/* 左侧底部 */
	.leftbotton{
		height: 40px;
		margin-left: 250px;
	}

	#pagebutton{
		width: 50px;
		height: 35px;
		margin-left: 10px;
	    background-color: #ffeaf0;
		border: none;
		/* border-radius: 5px; */
		font-size: 16px;
		/* background-color:rgba(255, 234, 240, 0.1) */
	}
	#pagebutton:hover{
		background-color:#d3eaff;
		border: none;
	}
	/* .leftboxtable tr th td{
		float: left;
		
	}
	.leftboxtable tr #th2 #td-name{
		font-size: 23px;
		
	} */
	/* .leftboxtable tr td{
		font-size: 18px;
		text-indent: 2em;
	}
	 */	
	/* 右侧上 */
	.rightbox{
		margin-left: 20px;
		margin-top: 98px;
		width: 18%;
		height: 360px;
	/* 	border: #FFFFFF solid 1px; */
		border-radius: 20px;
	}
	.rightfirstbox{
		width: 100%;
		height: 360px;
		border-radius: 15px;
		
		
	}
	.rightlastbox{
		width: 100%;
		height: 520px;
		margin-top: 30px;
		border-radius: 10px;
		
	}
	.rightlastbox li{
		list-style-type: none; 
		margin-top: 15px;
		font-size: 20px;
	}
	.rightfirstbox .rightfirstbox-heared{
		width: 100%;
		height: 70px;	
		border-bottom: black solid 1px;
		border-radius: 12px;
		margin: 0 auto;
	}
	.rightfirstbox-heared h3{
		color: black;
		margin-top: 15px;
		text-indent: 2em;
	}
	.rightfirstbox-main li{
		width: 340px;
		color: black;
		list-style-type: none;
		border-bottom: black solid 1px;
		margin-top: 5.5px;
		height:40px;
	}
	.rightfirstbox-main li .img{
		width:40px ;
		height: 40px;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 10px;
	}
	

	
    @media (max-width:1850px){
		.leftbox{
			margin-top: 100px;
			margin-left: 250px;
			width: 45%;
			height:900px;
			/* border-radius: 20px; */
		}
		
	}
	@media (max-width:1700px){
		.leftbox{
			margin-left: 210px;
		}
	}
	@media (max-width:1600px){
		.leftbox{
			margin-left: 150px;
		}
	}
	@media (max-width:1500px){
		.leftbox{
			margin-left: 100px;
		}
	}
	@media (max-width:1400px){
		.leftbox{
			margin-left: 180px;
			width: 700px;
		}
		.rightbox{
			width: 250px;
			border-radius: 10px;
		}
		.rightfirstbox-main li{
			width: 250px;
		}
	}
	@media (max-width:1300px){
		.leftbox{
			margin-left: 120px;
			width: 600px;
		}
		.rightbox{
			width: 210px;
			border-radius: 10px;
		}
		.rightfirstbox-main li{
			width: 210px;
		}
		.leftboxtable tr #th2{
			width:00px;
			height:250px;
			border-bottom: #b0aaaa solid 2px;	
		} 
		.bokeinfo{
			width: 300px;
		}
		.leftboxtable #th2 #li-name{
			width: 350px;
		}
	}

	
	
	
	
</style>

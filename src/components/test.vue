<template>
	<div id="xiangqing">
		<div style="height: 100px;"></div>
		<div class="bokeinfo" style="margin-left: 10%;  width: 80%;
		height: 700px;margin-right: 10%; border: 1px black solid;">
			<div style="float: left;">
			<table class="leftboxtable" style="margin-left: 5%; width: 1000px;
			margin-right: 5%; border: 1px black solid;">
				<tr v-for="(i,key) in selectByIdList" :key="key">
					<th id="th1"><img :src="i.boketx"></th>
					<th id="th2">
						<td>
							{{i.bokename}}
						</td><br>
						<td>
							{{i.bokeinfo}}
						</td><br>									
						<td style="border-top: 1px black solid;">
							{{i.bokedetails}}
						</td>
					</th>			
				</tr>		
			
			</table>
			</div>		
		    <div style="float: left; width: 20%; height: 700px; border: 1px black solid; margin-left: 6%;">
				你号
			</div>
		</div>
   </div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
			  selectByIdList:'',
			}
		},
		methods:{
			
		},
		mounted(){
			
			axios.get("http://43.142.24.86:9999/selectDataById",{
				params:{
					'id':this.$route.params.id
				}
			}).then(sl=>{
				this.selectByIdList=sl.data	
			})
		}
	}
	
</script>

<style scoped>

		@media (max-width:1700px){
			.leftboxtable{
				width: 100%;
			}	  
		} 
		
</style>
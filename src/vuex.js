import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default vuex.Store({
	state:{
		loginusername:''
	},
	mutations: {
		 loginusername(state,username){
	      state.loginusername=username
    }	
},
	actions:{
		
	},
	getters:{
		
	}
	
	 
})

import Vue from 'vue'
import Example from './components/example.vue'
import BabylonScene from './components/BabylonScene.vue'

const app = new Vue({
	el: "#app",
	components:{
		Example,BabylonScene
	},
	data: {
		message: 'Hello World'
	}
})
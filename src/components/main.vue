<template>
	<div class="block">
		<block-posts :list='list' @VueDetails="VueDetails"></block-posts>
	</div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex';
import blockPosts from './post.vue'

export default {
	data(){
		return {
			list:[],
		}
	},
	components:{
		'block-posts': blockPosts
	},
	computed:{
        ...mapGetters([
			'token'
        ])
    },
	methods:{
		getPost(){
			if(!this.token) return
			axios.get('/api/common/tasks',{
				headers: {
					"authorization": "Bearer " + this.token
				}
			})
			.then(response =>{
				this.list = response.data.data 
			})
		},
		VueDetails(id){
			alert(id)
		}
	},
	mounted(){
		this.getPost()
	},
	name:'home-page'
}
</script>

<style scoped>
	.block{
		text-align: center;
		font-size: 50px;
		margin-top: 60px;
		text-transform: uppercase;
		font-family: Arial, Helvetica, sans-serif
	}
</style>

<template>
	<div class="block">
        <div class="block__wrap">
            <div  class="block__form">
                <input placeholder="email" v-model="user" class="block__inp" type="text">
                <input placeholder="password" v-model="password" class="block__inp" type="text">  
                <button @click='login' class="block__btn">Войти</button>  
            </div>      
        </div>   
    </div>
</template>

<script>
export default {
    name:'login-page',
    data(){
        return{
            user: '',
            password: ''
        }
    },
    methods:{
        login(){
            let data = {
                email: this.user,
                password: this.password
            }
            this.$store.dispatch('authorization', data)
            .then(() => {
                this.$router.push({name: 'home-page'})
            })
        }
    }
}
</script>

<style scoped>
    
    .block__wrap{
        padding-top: 50px;
    }
    .block__form{
        max-width: 600px;
        width: 85vw;
        height: 400px;
        background: #575757;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 6px solid #424242;
        border-radius: 8px;
    }
    .block__inp{
        background: #939394;
        border: none;
        outline: none;
        border-radius: 8px;
        color: #222;
        padding-left: 25px;
        width: 70%;
        margin-bottom: 30px;
        height: 40px;
        max-width: 70%;
        font-size: 22px;
    }
    .block__inp::placeholder{
        color: #222;
    }
    .block__btn{
        text-transform: uppercase;
        padding: 10px 30px;
        font-size: 20px;
        border: none;
        background: #305a7a;
        border-radius: 8px;
        border-bottom: 4px solid  #102b3f; 
        transition: .5s ease;
        outline: none;
    }
    .block__btn:hover{
        background: #4988b7;
    }
</style>

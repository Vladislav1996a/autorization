<template>
	<header>
        <div class="header__wrap">
            <div class="logo">
                <img src="../assets/img/sam.png" alt="">
            </div>    
            <nav>
                <router-link
                    class="nav__item"
                    :to="{name: 'home-page'}"
                >
                Home
                </router-link>
                <router-link
                    class="nav__item"
                    v-if="!user"
                    :to="{name: 'login-page'}"
                >
                Login
                </router-link>
                 <router-link
                    class="nav__item"
                    v-if="user"
                    :to="{name: 'home-page'}"
                >
                {{user.email}}
                </router-link> 
                <div
                class="nav__item"
                v-if="user"
                @click="logOut"
                >
                Выйти
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed:{
        ...mapGetters([
            'user'
        ])
    },
    methods:{
         logOut(){
            this.$store.dispatch('logOut')
            .then(() => {
                this.$router.push({name: 'login-page'})
            })
        }
    }
}
</script>

<style scoped>
    header{
        height: 11vh;
        width: 100%;
        background: #5682a3;
    }
    .header__wrap{
        display: flex;
        justify-content: space-between;
        max-width: 1440px;
        margin: 0 auto;
        align-items: center;
        padding: 0 20px;
    }
    nav{
        display: flex;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
        align-items: center;
        height: 100%;
    }
    .nav__item{
        cursor: pointer;
        transition: .5s ease;
        color: #fff;
        display: inline-block;
        margin: 0 40px;
    }
    .nav__item:hover{
        color: #999;
    }
    .logo img{
        height: 11vh;
    }
</style>

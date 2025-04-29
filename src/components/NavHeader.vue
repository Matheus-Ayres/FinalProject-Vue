<script setup>
import { useAuthStore } from '@/stores/auth.js'
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import cartIcon1 from '@/assets/icons/cart.png'
import cartIcon2 from '@/assets/icons/cart2.png'
import { getUser } from '../services/http';


const user = useAuthStore()
const cart1 = ref(cartIcon1)
const cart2 = ref(cartIcon2)
const backendUrl= "http://35.196.79.227:8000"
const userI = ref({})

async function getUserInfos(){
    try{
        const result = await getUser()
        userI.value = result.data
        
    }catch(error){
        console.log(error)
    }
}

onMounted(() =>{
    getUserInfos()
})

</script>

<template>
    <nav class="header">
        <div class="pages">
            <RouterLink to="/" class="techplace">
                TECHPLACE
            </RouterLink>
        </div>
        <diV v-if="!user.isAuthenticated" class="loginPosition" >
            <RouterLink to="/Login" class="loginStyle">
                <p>
                    LOGIN
                </p>
            </RouterLink>
            <RouterLink class="registerStyle" to="Register">
                <p >
                    REGISTER
                </p>
            </RouterLink>
        </diV>

        <div v-else-if="user.isAuthenticated && user.user.role == 'ADMIN'" class="loginPosition">
            <RouterLink to="/AdminArea/Categories" class="loginStyle">
                <p>
                    Admin Area
                </p>
            </RouterLink>
            <RouterLink class="loginStyle" to="/ModeratorArea">
                <p>
                    Moderator Area
                </p>    
            </RouterLink>
            <RouterLink class="loginStyle" to="/RegisterModerator">
                <p>
                    Register Moderator
                </p>    
            </RouterLink>
            <RouterLink to="/Profile">
                <img class="profileImage" :src="backendUrl + userI.image_path"/> 
            </RouterLink>
        </div>
        
        <div v-else-if="user.isAuthenticated && user.user.role == 'MODERATOR'" class="loginPosition">
            <RouterLink class="none" to="/OrderPage">
                <p class="loginStyle">Orders</p>
                <img class="order" src="@/assets/icons/order.png">
            </RouterLink>
            <RouterLink class="none" to="/CartPage" >
                <p class="loginStyle"> Cart</p>
                <div class="cart-wrapper">
                    <img class="cart cart-default" :src="cart1" alt="Cart icon">
                    <img class="cart cart-hover" :src="cart2" alt="Cart hover icon">
                </div>
            </RouterLink>
            <RouterLink class="loginStyle" to="/ModeratorArea">
                <p>
                    Moderator Area
                </p>    
            </RouterLink>
            <RouterLink to="/Profile">
                <div class="imgArea">
                    <img class="profileImage" :src="backendUrl + userI.image_path"/>  
                </div>    
            </RouterLink>
        </div>

        <div v-else class="loginPosition">
            <RouterLink class="none" to="/OrderPage">
                <p class="loginStyle">Orders</p>
                <img class="order" src="@/assets/icons/order.png">
            </RouterLink>
            <RouterLink class="none" to="/CartPage" >
                <p class="loginStyle"> Cart</p>
                <div class="cart-wrapper">
                    <img class="cart cart-default" :src="cart1" alt="Cart icon">
                    <img class="cart cart-hover" :src="cart2" alt="Cart hover icon">
                </div>
            </RouterLink>

            <RouterLink to="/Profile">
                <div class="imgArea">
                    <img class="profileImage" :src="backendUrl + userI.image_path"/>  
                </div>    
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>
    .none{
        text-decoration: none;
    }

    .order{
        width: 65%;
    }

    .imgArea{
        width: 70px;
        overflow: hidden;
    }

    .profileImage {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
}

    .cart-wrapper {
    position: relative;
    width: 50px;
    height: 50px;
    }

    .cart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 0.3s ease;
    }

    .cart-hover {
    opacity: 0;
    }

    .cart-wrapper:hover .cart-hover {
    opacity: 1;
    }

    .cart-wrapper:hover .cart-default {
    opacity: 0;
    }



.techplace{
color: white;
font-family: titles;
font-size: 2rem;
text-decoration: none;
margin-right: 80px;
}

.pages{
    display: flex;
    align-items: center;
    
}



.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--purpleDark);
    max-height: 10vh;
    margin: 20px 60px;
    position: relative;
    z-index: 1;
}

.loginPosition{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 20px;
    font-size: 1.3rem;
}

.loginStyle{
    color: white;
    font-family: "openSans";
    text-decoration: none;
    transition: 0.4s;
}

.loginStyle:visited {
        color: white
	}

.loginStyle:hover{
    transform: scale(1.1);
}


.registerStyle{
    font-family: "openSans";
    background-color: var(--lightPurple);
    color: var(--purple);
    font-weight: bold;
    border-radius: 20px;
    padding: 5px;
    transition: 0.5s;
    text-decoration: none;
}

.registerStyle:hover{
    background-color: var(--purple);
    color: var(--lightPurple);
    transform: scale(1.1);
}

</style>
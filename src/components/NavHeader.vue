<script setup>
import { useAuthStore } from '@/stores/auth.js'

const authUser = useAuthStore()


</script>

<template>
    <nav class="header">
        <div class="pages">
            <p class="techplace">
                TECHPLACE
            </p>
            <RouterLink to="/" class="navPagesTitles">
                <p>
                    Catalog
                </p>       
            </RouterLink>
        </div>
        <diV v-if="!authUser.isAuthenticated" class="loginPosition" >
            <RouterLink to="/Login" class="loginStyle">
                <p>
                    LOGIN
                </p>
            </RouterLink>
            <RouterLink to="Register" class="registerStyle">
                <p >
                    REGISTER
                </p>
            </RouterLink>
        </diV>
        
        <div v-else class="loginPosition">
            <RouterLink @click="authUser.logout()" class="registerStyle" to="Login">
                <p>
                    Logout
                </p>    
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>

.techplace{
color: white;
font-family: titles;
font-size: 2rem;

margin-right: 80px;
}

.pages{
    display: flex;
    align-items: center;
    
}

.navPagesTitles{
    color: white;
    font-family: "openSans";
    font-size: 1.2rem;
    text-decoration: none;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--purpleDark);
    max-height: 10vh;
    margin: 20px 60px;
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
    transition: 0.5s;
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
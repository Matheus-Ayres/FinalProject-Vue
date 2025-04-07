<script setup>
import { useAuthStore } from '@/stores/auth.js'
import { RouterLink } from 'vue-router';


const user = useAuthStore()

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
            <RouterLink to="Register" class="registerStyle">
                <p >
                    REGISTER
                </p>
            </RouterLink>
        </diV>

        <div v-else-if="user.isAuthenticated && user.user.role == 'ADMIN'" class="loginPosition">
            <RouterLink to="/AdminArea" class="registerStyle">
                <p>
                    Admin Area
                </p>
            </RouterLink>
            <RouterLink class="registerStyle" to="/RegisterModerator">
                <p>
                    Register Moderator
                </p>    
            </RouterLink>
            <RouterLink class="registerStyle" to="/Profile">
                <p>
                    Profile
                </p>    
            </RouterLink>
        </div>
        
        <div v-else-if="user.isAuthenticated && user.user.role == 'MODERATOR'" class="loginPosition">
            <RouterLink class="registerStyle" to="/ModeratorArea">
                <p>
                    Moderator Area
                </p>    
            </RouterLink>
            <RouterLink class="registerStyle" to="/Profile">
                <p>
                    Profile
                </p>    
            </RouterLink>
        </div>

        <div v-else class="loginPosition">
            <RouterLink class="registerStyle" to="/Profile">
                <p>
                    Profile
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
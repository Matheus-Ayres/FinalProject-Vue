<script setup>
import { ref } from 'vue';

const cursor = ref(false)

function CursorInUser(){
    cursor.value = true
}

function CursorOutUser(){
    cursor.value = false
}

</script>

<template>
    <nav  @mouseleave="CursorOutUser" class="header">
        <RouterLink to="/" class="Techplace">
            Techplace
        </RouterLink>
        <div>
            <input type="text" placeholder="Search" class="search">
        </div>
        
        <diV v-if="cursor"  class="loginPosition">
            <RouterLink to="/Login" style="text-decoration: none">
                <p class="loginStyle">
                    Login
                </p>
            </RouterLink>
            <span class="loginStyle">
                Sign Up
            </span>
        </diV>

        <div @click="CursorInUser" class="userIconPosition">
            <img src="../assets/icons/userIcon.png" class="userIcon">
            
        </div>
    </nav>
</template>

<style scoped>

    .Techplace{
        color: white;
        font-family: titles;
        text-shadow: 3px 2px 0 black;
        font-size: 2rem;
        text-decoration: none;
        padding: 8px;
    }

    .Techplace:hover{
        background-color: var(--purp2);
        border-radius: 15px;
        transition: 0.2s;
    }

.header{
display: flex;
align-items: center;
background-color: var(--purple);
max-height: 10vh;
border-bottom: var(--purp2) solid 2px;
padding: 20px;
}

.search{
width: 200px;
font-size: 1rem;
background-image: url('/src/assets/icons/lupa.png');
margin-left: 40px;
background-size: 20px;
background-repeat: no-repeat;
background-position: 10px;
padding: 5px 5px 5px 40px;
transition: 0.4s ease-in-out;
border: var(--purp2) solid 2px;
border-radius: 45px;
}

.search:focus{
width: 500px;
}

.userIcon{
background-color: white;
width: 100%;
height: 100%;
border-radius: 100%;
}

.userIconPosition{
display: flex;
align-self: end;
margin-left: auto;
width: 50px;
height: 50px;
}

.loginPosition{
margin-left: 780px;
display: flex;
flex-direction: column;
gap: 8px;
position: relative;
animation-name: MoveToTheLeft;
animation-duration: 0.25s;
}

.loginStyle{
font-family: titles;
color: white;
font-size: 1.22rem;
transition: 0.2s;
padding: 0 6px 0 6px;
}

.loginStyle:hover{
background-color: var(--purp2);
border-radius: 10px;
transform: scale(1.1);
cursor: pointer;
}

@keyframes MoveToTheLeft{
from {
translate: 20px 0;
}

to {
translate: 0 0;
}
}

.userIcon:hover{
background-color: var(--purp2);
cursor: pointer;
}
</style>
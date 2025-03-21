<script setup>
import { ref } from 'vue';

const eye = ref("/src/assets/icons/eye.png")
const openEye = ref("/src/assets/icons/eye.png")
const closeEye = ref("/src/assets/icons/closeEye.png")

const visible = ref ("password")

function seePassword(){
    if(eye.value == openEye.value){
        eye.value = closeEye.value
        visible.value = "text"
    }else{
        eye.value = openEye.value
        visible.value = "password"
    }

}

</script>

<template>
<div class="body">
        <main>
            
                <RouterLink class="Techplace" to="/">
                        Techplace
                </RouterLink>
            
            <div class="pg">
                <img src="/src/assets/login.svg" class="loginIMG">
                <div class="loginCard">
                    <h1 class="loginCardTitle">
                        Login
                    </h1>
                    <div class="inputPosition">
                            <input type="email" placeholder="Email" class="inputEmail">
                            <input :type="visible" placeholder="Password" class="inputPassword">
                        <img @click="seePassword" :src="eye" class="eyes">
                    </div>
                    <div class="buttonPosition">
                        <button class="loginButton" type="submit">
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
    .body{
        background-color: black;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .Techplace{
        color: white;
        font-family: titles;
        text-shadow: 3px 2px 0 black;
        font-size: 2rem;
        text-decoration: none;
        margin-left: 50px;
        padding: 2px 5px 5px 5px;
        transition: 0.2s ease-in-out;
    }

    .Techplace:hover{
        background-color: var(--purp2);
        border-radius: 15px;
        transition: 0.2s;
        transform: scale(1.05);
    }

    .inputPosition{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    .inputEmail{
        background-color: #ffffff00;
        color: white;
        font-family: "roboto";
        width: 90%;
        padding: 10px 0 10px 10px;
        border: white solid 2px;
        border-radius: 10px;
        font-size: 1.2rem;
        margin-bottom: 30px;
        transition: 0.3s ease-out;
    }

    .inputEmail:focus{
        transform: scale(1.04);
    }

    .inputPassword:focus{
        transform: scale(1.04);
    }

    .inputPassword{
        background-color: #ffffff00;
        color: white;
        font-family: "roboto";
        width: 90%;
        padding: 10px 0 10px 10px;
        border: white solid 2px;
        border-radius: 10px;
        font-size: 1.2rem;
        margin-bottom: 10px;
        transition: 0.3s ease-out;
    }

    .inputs::placeholder{
        color: rgba(255, 255, 255, 0.329);
        font-family: "roboto";
    }



</style>
<script setup>
import NavHeader from '@/components/NavHeader.vue';
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
<NavHeader/>    
<div class="body">
        <main>
            <div class="pg">
                <img src="/src/assets/Register.svg" class="registerIMG">
                <div class="registerCard">
                    <h1 class="registerCardTitle">
                        Register
                    </h1>
                    <div class="inputPosition">
                            <input type="email" placeholder="Email" class="inputEmail">
                            <input :type="visible" placeholder="Create Password" class="inputPassword">
                            <input :type="visible" placeholder="Confirm Password" class="inputPassword">
                        <img @click="seePassword" :src="eye" class="eyes">
                    </div>
                    <div class="buttonPosition">
                        <button class="registerButton" type="submit">
                            REGISTER
                        </button>
                    </div>
                    <div class="createAccount">
                        <p>
                            Already have an account?
                        </p>
                        <RouterLink to="Login">
                            <span class="register">
                                LOGIN
                            </span>
                        </RouterLink>
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

.inputEmail:focus, .inputPassword:focus {
    outline: none; 
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

.registerIMG{
max-width: 50vw;
opacity: 1;
animation-name: fadeIn;
animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: 0.5s;
}

@keyframes fadeIn{
0% {
opacity: 0;
}
100% {
opacity: 1;
}
}



.pg{
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 50px;
}

.registerCardTitle{
color: white;
font-family: "Roboto";
margin-top: 100px;
font-size: 3rem;
}

.registerCard{
margin: 5% 10%;
background-color: #ffffff07;
padding: 10px 40px 50px 40px;
border-radius: 20px;
border: white solid 2px;
animation-name: fadeIn;
animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: 1s;
transition: 0.3s ease-out;
}



.eyes{
background-color: white;
width: 30px;
padding: 5px;
border-radius: 20px;
}

.eyes:hover{
cursor: pointer;
}

.buttonPosition{
text-align: center;
margin-top: 30px;
}

.registerButton{
font-family: "Roboto";
font-weight: bold;
color: white;
padding: 10px 150px;
font-size: 1.5rem;
background-image: linear-gradient(to right,#628EFF, #8740CD, #580475);
border: none;
border-radius: 10px;
cursor: pointer;  
transition: 0.2s ease-in-out;
}

.registerButton:hover{
border: white 1px solid;
transform: scale(1.05);
}

.createAccount{
    text-align: center;
    margin-top: 25px;
    font-family: "roboto";
    color: white;
}

.register{
    text-decoration: underline;
    color:white
}

.register:visited{
    color: white;
}
</style>
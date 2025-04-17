<script setup>
import NavHeader from '@/components/NavHeader.vue';
import { ref } from 'vue';
import { registerModerator } from '@/services/http';
import { useAuthStore } from '@/stores/auth.js'
import router from '@/router';

const authUser = useAuthStore() 

const eye = ref("/src/assets/icons/eye.png")
const openEye = ref("/src/assets/icons/eye.png")
const closeEye = ref("/src/assets/icons/closeEye.png")
const visible = ref ("password")
const name = ref('')
const email = ref('')
const createpassword = ref('')
const confirmpassword = ref('')
const equalPassword = ref(false)
const password = ref('')



function seePassword(){
    if(eye.value == openEye.value){
        eye.value = closeEye.value
        visible.value = "text"
    }else{
        eye.value = openEye.value
        visible.value = "password"
    }

}

async function submit() {
    try{
        if(createpassword.value != confirmpassword.value){
            equalPassword.value = true
        }
        else{
                password.value = confirmpassword.value
                const result = await registerModerator(
                    {
                    email: email.value,
                    password: password.value,
                    name: name.value,
                    role: "MODERATOR"
                    }
                )
                if(result.status == 201){
                    alert('Deu boa')
                    router.push('/')
                }   
                
        }
    }catch(error){
        console.log('register deu ruim')
        console.log(error)
    }
}

function resetInvalid(){
 equalPassword.value = false
}

</script>

<template>
<NavHeader/>    
<div class="body">
        <main>
            <div class="pg">
                <img src="/src/assets/registerModerator.svg" class="registerIMG">
                <div class="registerCard">
                    <h1 class="registerCardTitle">
                        Register new moderator
                    </h1>
                    <form @submit.prevent="submit">
                        <div class="inputPosition">
                                <input required v-model="name" type="text" placeholder="UserName" class="inputEmail">
                                <input required v-model="email" type="email" placeholder="Email@example.com" class="inputEmail">
                                <input required @click="resetInvalid" v-model="createpassword" :type="visible" placeholder="Create Password" class="inputPassword">
                                <input required @click="resetInvalid" v-model="confirmpassword" :type="visible" placeholder="Confirm Password" class="inputPassword">
                            <img @click="seePassword" :src="eye" class="eyes">
                        </div>
                        <div v-if="equalPassword" class="ivalidPasswords">
                            Password must be equal!
                        </div>
                        <div class="buttonPosition">
                            <button class="registerButton" type="submit">
                                REGISTER
                            </button>
                        </div>
                    </form>
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
font-size: 2rem;
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

.ivalidPasswords{
    color: red;
    font-family: "roboto", "openSans";
    text-align: center;
    font-size: 1.2rem;
    animation: treme 0.1s;
}

@keyframes treme {
  0% {margin-left: 0;}
  25% {margin-left: 5px;}
  50% {margin-left: 0;}
  75% {margin-left: -5px;}
  100% {margin-left: 0;}
}
</style>
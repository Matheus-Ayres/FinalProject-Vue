<script setup>
import EditPFP from '@/components/EditPFP.vue';
import NavHeader from '@/components/NavHeader.vue';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const user = useAuthStore()
const inputs = ref(false)
const userPFP = ref('/src/assets/icons/testpfp.jpeg')
const editPfpForm = ref(false)


function logout(){
    user.logout()
    router.push('/Login')
}

function editInfos(){
    inputs.value = true
}

function changePFP(){
    editPfpForm.value = true
}

</script>

<template>
    <NavHeader/>

    

    <div class="profileTop">
        
        <div class="userInfos">
            <div>
                <div class="Image" @click="changePFP">
                    <div v-if="!editPfpForm"> 
                        <img class="profileImage" :src="userPFP"/>
                        <div class="overlay"></div>
                    </div>
                    <EditPFP v-else/>
                </div>
                <p @click="logout" class="logout">Logout</p>
            </div>
            <div class="userDesc">
                <div v-if="user.user.role == 'ADMIN' || user.user.role == 'MODERATOR'" class="userNameArea">
                    <p class="usernameStyle">{{ user.user.name }}</p>
                    <img src="/src/assets/icons/verify.png" class="verify">
                </div>

                <div v-else class="userNameArea">
                    <p class="usernameStyle">{{ user.user.name }}</p>
                </div>

                <input v-if="!editInfos">

                <p>
                    {{ user.user.email }}
                </p>

                <!-- <p>Role: {{ user.user.role }}</p> -->
                <img src="/src/assets/icons/pen.svg" class="edit">
            </div>
        </div>
        
    </div>
    
    

</template>

<style scoped>
.edit{
    width: 40px;
}

.edit:hover{
    cursor: pointer;
}

.userNameArea{
    display: flex;
    align-items: center;
    gap: 10px;
}

.verify{
    width: 10%;
}

p{
    font-family: "openSans";
    color: white;
    font-size: 1.2rem;
}

.profileTop {
    display: flex;
    margin: 50px;
}

.userInfos {
    display: flex;
    gap: 40px;
}

.profileImage {
    width: 100%;
    border-radius: 20px;
}

.Image {
    position: relative;
    border: var(--lightPurple) solid 2px;
    border-radius: 20px;
    width: 14vw;
    height: 26vh;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0);
    opacity: 0; 
    transition: opacity 0.3s ease;
    border-radius: 20px;
}

.Image:hover .overlay {
    opacity: 0.7;
    background-image: url(/src/assets/icons/pen.svg);
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
}

.userDesc{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.usernameStyle {
    font-family: "openSans";
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
}

.logout{
    color: var(--purp2);
    margin-top: 10px;
}

.logout:hover{
    color: red;
    cursor: pointer;
}
</style>

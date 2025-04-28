<script setup>
import NavHeader from '@/components/NavHeader.vue';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';
import EditUserInfos from '../components/UserComponents.vue/EditUserInfos.vue';
import { getAddresses, getUser } from '../services/http';
import EditPfP from '../components/UserComponents.vue/EditPfP.vue';
import CreateAddresses from '../components/AddressesComponents/CreateAddresses.vue';
import EditAddress from '../components/AddressesComponents/EditAddress.vue';

const auth = useAuthStore()
const editpfp = ref(false)
const user = ref({})
const backendUrl= "http://35.196.79.227:8000"
const addresses = ref({})

function logout(){
    auth.logout()
    router.push('/Login')
}

async function getUserInfos(){
    try{
        const result = await getUser()
        user.value = result.data
        console.log("User info:", user.value);
    }catch(error){
        console.log(error)
    }
}

async function getUserAddresses(){
    try{
        const result = await getAddresses()
        addresses.value = result
        console.log(result)

        console.log("User Addresses:", addresses.value);
    }catch(error){
        console.log(error)
    }
}

function changePFP(){
    if(editpfp.value == false){
        editpfp.value = true
    }
}

function closeModal(){
    if(editpfp.value == true){
        editpfp.value = false
    }
}


onMounted(() =>{
    getUserInfos()
    getUserAddresses()
})


</script>

<template>
    <NavHeader/>
    <div class="profileTop">

        <div class="userInfos">
                <div>
                    <div class="Image" @click="changePFP">
                        <div v-if="user.image_path != '/uploads/defaults/no_profile_image.png'">
                            <img class="profileImage" :src="backendUrl + user.image_path"/>
                            <div class="overlay"></div>
                        </div>
                        <div v-else >
                            <img class="profileImage" src="/src/assets/icons/user.jpg"/>
                            <div class="overlay"></div>
                        </div>

                    </div>
                    <EditPfP v-if="editpfp" @close="closeModal"/>
                    <EditUserInfos/>
                    <p @click="logout" class="logout">Logout</p>
                </div>
                <div class="userDesc">
                    <div v-if="user.role == 'ADMIN' || user.role == 'MODERATOR'" class="userNameArea">
                            <p class="usernameStyle">{{ user.name }}</p>
                            <img src="/src/assets/icons/verify.png" class="verify">
                            <p>{{ user.role }}</p>
                    </div>

                    <div v-else class="userNameArea">
                        <p class="usernameStyle">{{ user.name }}</p>
                    </div>
                    <p>
                        {{ user.email }}
                    </p>
                    <div>
                        <p style="font-weight: bold;">Your Addresses:</p>
                        <div v-if="addresses && addresses.length < 3 " class="adresses">
                            <div  v-for="address in addresses" :key="address.id" >
                                <p class="address">
                                    {{ address.number }}, {{ address.street }}
                                </p>
                                <div style="display: flex; gap: 10px;">
                                    <p  class="address">
                                        {{ address.city }}, {{ address.state }}, {{ address.zip }}
                                    </p>
                                    <EditAddress :addressId="address.id"/>
                                </div>
                            </div>
                            <CreateAddresses/>
                        </div>
                        <div v-else class="adresses">
                            <div  v-for="address in addresses" :key="address.id" >
                                <p class="address">
                                    {{ address.number }}, {{ address.street }}
                                </p>
                                <div style="display: flex; gap: 10px;">
                                    <p  class="address">
                                        {{ address.city }}, {{ address.state }}, {{ address.zip }}
                                    </p>
                                    <EditAddress :addressId="address.id"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>



</template>

<style scoped>
.adresses{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.address{
    text-decoration: underline white;
}

.edit:hover{
    cursor: pointer;
    color: var(--lightGray);
}


.ordenar{
    display: flex;
    flex-direction: column;
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
    height: 24vh;
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
    margin-top: 10px;
}

.logout:hover{
    color: red;
    cursor: pointer;
}
</style>

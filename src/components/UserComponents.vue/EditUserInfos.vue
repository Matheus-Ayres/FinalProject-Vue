<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { changeUserInfos, deleteUser, getUser } from '../../services/http'
import router from '../../router'


const auth = useAuthStore()
const modal = ref(false)
const user = ref({})
const name = ref('')
const email = ref(user.email)
const modalDelete = ref(false)
const verify = ref('')

async function editName(){
    try{
        await changeUserInfos({
            name: name.value
        })
        
    }catch(error){
        console.log(error)
    }
    alert("Username changed")
}

async function editEmail(){
    try{
        await changeUserInfos({
            email: email.value
        })
        alert("Email changed:")
    }catch(error){
        console.log(error)
    }
}

async function deleteAccount(){
    try{
        // 
        if(verify.value == 'DELETE'){
            await deleteUser()
            alert("Account Deleted")
            auth.logout()
            router.push('/Register')
        }else{
            alert("You must type 'DELETE'")
        }
    }catch(error){
        console.log(error)
    }
}


function openModal(){
    if(modal.value == false){
        modal.value = true
    }
}

function closeModal(){
    if (modal.value == true){
        modal.value = false
    }
    window.location.reload()
}

function openModalDelete(){
    if(modalDelete.value == false){
        modalDelete.value = true
    }
}

function closeModalDelete(){
    if (modal.value == true){
        modal.value = false
    }
    if (modalDelete.value == true){
        modalDelete.value = false
    }
}

async function getUserInfos() {
    try{
        const result = await getUser()
        user.value = result.data
    }catch(error){
        console.log(error)
    }
}

onMounted(() =>{
    getUserInfos()
})



</script>

<template>
    <p  @click="openModal" class="edit"> Edit</p>
    <p @click="openModalDelete" class="delete">Delete account </p>

    <div v-if="modalDelete" class="modal-open">
        <div class="deleteModal">
            <div class="closePosition">
                <img @click="closeModalDelete" src="@/assets/icons/icons8-excluir.svg" class="close">
            </div>
            <form @submit.prevent="deleteAccount">
                <main class="confirm">
                    <label class="confirmDelete">Type 'DELETE' to confirm</label>
                    <input type="text" required v-model="verify" class="inputDelete">
                    <button class="submitDelete" type="submit">DELETE</button>
                </main>
            </form>
        </div>
    </div>




        <div v-if="modal" class="modal-open">
            <div class="modal">
                <div class="closePosition">
                    <img @click="closeModal" src="@/assets/icons/icons8-excluir.svg" class="close">
                </div>
                <main>
                    <section class="productInfos">
                            <form @submit.prevent="editName">
                                <div class="formProduct">
                                    <label>Current Username: {{ user.name }}</label>
                                    <input v-model="name" class="productNameInput" placeholder="New Name">
                                    <button class="submit">EDIT NAME</button>
                                </div>
                            </form>
                            
                            <form @submit.prevent="editEmail">
                                <div class="formProduct">
                                    <label >Current Email: {{ user.email }} </label>
                                    <div class="pricediv">
                                        <input v-model="email" class="productPriceInput" type="email" placeholder="Email">
                                    </div>
                                    <button class="submit">EDIT EMAIL</button>
                                </div>
                            </form>
                        </section>
                </main>
            </div>
        </div>
</template>

<style scoped>

.deleteModal{
        background-color: rgb(0, 0, 0);
        padding: 20px;
        border-radius: 10px;
        max-width: 80%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

.edit{
    width: 100%;
    font-family: "openSans";
    color: white;
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.edit:hover{
    cursor: pointer;
    color: var(--lightGray);
}

.delete{
    width: 100%;
    font-family: "openSans";
    color: white;
    font-size: 1.2rem;
}

.delete:hover{
    cursor: pointer;
    color: red;
}


    .confirm{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .inputDelete{
        align-self: center;
        outline: none;
        padding: 2px;
        font-size: 1.2rem;
        border-radius: 20px;
        text-align: center;
    }

    .confirmDelete{
        color: white;
    }

    .trash{
        width: 10%;
        cursor: pointer;
    }

    .modal-open{
        position: fixed;
        inset: 0;
        z-index: 99;
        background-color: rgb(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal{
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        max-width: 80%; 
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .closePosition{
        display: flex;
        justify-content: flex-end;
    }

    .close{
        width: 30px;
    }

    .close:hover{
        cursor: pointer;
    }

    .submit{
font-family: "Roboto", "openSans";
font-weight: bold;
color: white;
padding: 10px 50px;
font-size: 1.2rem;
background-image: linear-gradient(to right,#628EFF, #8740CD, #580475);
border: none;
border-radius: 10px;
cursor: pointer;  
transition: 0.2s ease-in-out;
max-width: 50%;

}

.submitDelete{
font-family: "Roboto", "openSans";
font-weight: bold;
color: white;
padding: 10px 50px;
font-size: 1.2rem;
background-image: linear-gradient(to right,#628EFF, #8740CD, #580475);
border: none;
border-radius: 10px;
cursor: pointer;  
transition: 0.2s ease-in-out;
max-width: 100%;

}


.productInfos{
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.opcionalArea{
    display: flex;
    gap: 10px;
}

.productNameInput{
    padding: 5px 10px;
    outline: none;
    border: 2px solid var(--purpleDark);
    border-radius: 5px;
    font-size: 1.2rem;
}

.productDescInput{
    padding: 5px 10px;
    outline: none;
    border: 2px solid var(--purpleDark);
    border-radius: 5px;
    font-size: 1.2rem;
    height: 100px;
    vertical-align: top;
    resize: none;
    font-family: "openSans";

}

.productStockInput{
    padding: 5px 10px;
    outline: none;
    border: 2px solid var(--purpleDark);
    border-radius: 5px;
    max-width: 20%;
    font-size: 1.2rem;
}

.productPriceInput{
    font-size: 1.2rem;
    border: none;
    outline: none;
    
}

.pricediv{
    padding: 5px 10px;
    outline: none;
    border: 2px solid var(--purpleDark);
    border-radius: 5px;
    max-width: 320px;
}

.usd{
    font-family: "openSans";
    font-weight: bold;
    color: black;
}

input, select{
    max-width: 320px;
}

span, label{
    color: var(--purpleDark);
    font-family: "openSans";
    font-weight: bold;
    font-size: 1.5rem;
}

main{
    display: flex;
    justify-content: flex-start;
}

select{
    padding: 5px 10px;
    border: none;
    background-color: var(--lightPurple);
    color: var(--purple);
    font-size: 1.2rem;
    border-radius: 5px;
    transition: 0.2s;
    outline: none;
}

select:hover{
    color: var(--lightPurple);
    background-color: var(--purple);
}

option{
    padding: 5px 10px;
    border: none;
    background-color: var(--lightPurple);
    color: var(--purple);
    font-size: 1.2rem;
    border-radius: 5px;
    transition: 0.2s;
    border: none;
}

option:hover{
    color: var(--lightPurple);
    background-color: var(--purple);
}

.formProduct{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
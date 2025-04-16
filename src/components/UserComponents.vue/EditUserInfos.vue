<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { changeUserInfos } from '../../services/http'

const user = useAuthStore()
const modal = ref(false)
const name = ref(user.user.name)
const email = ref(user.user.email)
const object = ref({})

function submit(){
    populateObject()
    closeModal()
    editInfo()
}

function populateObject() {
    if (name.value && name.value !== user.user.name) {
        object.value.name = name.value
    }
    if (email.value && email.value !== user.user.email) {
        object.value.email = email.value
    }
    return object.value
}

async function editInfo(){
    const token = user.token
    const changes = populateObject()
    console.log('Mudanças: ', token)
    try{
        const result = await changeUserInfos(changes, token)

        if(result.status === 200){
            user.saveUpdatedUser(result.data)
        }

        console.log(result.status)
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
}


</script>

<template>
    <p  @click="openModal" class="edit"> EDIT</p>
    <div v-if="modal" class="modal-open">
        <div class="modal">
            <div class="closePosition">
                <img @click="closeModal" src="@/assets/icons/icons8-excluir.svg" class="close">
            </div>
            <main>
                <form @submit.prevent="submit">
                    <section class="productInfos">
                        <div class="formProduct">
                            <label>Current Username: {{ user.user.name }}</label>
                            <input v-model="name" class="productNameInput" placeholder="New Name">
                        </div>

                        <div class="formProduct">
                            <label >Current Email: {{ user.user.email }} </label>
                            <div class="pricediv">
                                <input v-model="email" class="productPriceInput" type="email" placeholder="Email">
                            </div>
                        </div>
                    </section>


                    <button class="submit">EDIT INFOS</button>
                </form>
            </main>
        </div>
    </div>
</template>

<style scoped>

.edit{
    width: 40px;
    font-family: "openSans";
    color: white;
    font-size: 1.2rem;
}

.edit:hover{
    cursor: pointer;
    color: var(--lightGray);
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
        padding: 20px;
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
padding: 10px 100px;
font-size: 1.2rem;
background-image: linear-gradient(to right,#628EFF, #8740CD, #580475);
border: none;
border-radius: 10px;
cursor: pointer;  
transition: 0.2s ease-in-out;
margin: 50px 100px 0 ;
}

.submit:hover{
border: white 1px solid;

}

.productInfos{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
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
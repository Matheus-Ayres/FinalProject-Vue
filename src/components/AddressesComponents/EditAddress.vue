<script setup>
import { onMounted, ref } from 'vue'
import { createAddress, deleteAddressess, getAddressByID, updateAddress } from '../../services/http'

const modal = ref(false)
const modalDelete = ref(false)
const street = ref('')
const number = ref(null)
const zip = ref('')
const city = ref('')
const state = ref('')
const country = ref('')
const address = ref({})

const props = defineProps({
    addressId: Number
})


function submit(){
    editAddress()
    closeModal()
}

function openModal(){
    if(modal.value == false){
        modal.value = true
    }
    if(modalDelete.value == false){
        modalDelete.value = true
    }
}

function closeModal(){
    if (modal.value == true){
        modal.value = false
    }
    if (modalDelete.value == true){
        modalDelete.value = false
    }
}

async function editAddress() {
    try{
        await updateAddress(props.addressId, {
            street: street.value, 
            number: number.value, 
            zip: zip.value, 
            city: city.value,
            state: state.value,
            country: country.value, 
        })
    }catch(error){
        console.log(error)
    }
    window.location.reload()
}

async function getAddress() {
    try{
        const result = await getAddressByID(props.addressId)
        address.value = result

        street.value = result.street
        number.value = result.number
        zip.value = result.zip
        city.value = result.city
        state.value = result.state
        country.value = result.country

    }catch(error){
        console.log(error)
    }
}

function openModalDelete(){
    if(modalDelete.value == false){
        modalDelete.value = true
    }
}

function closeModalDelete(){
    if (modalDelete.value == true){
        modalDelete.value = false
    }
}

async function deleteAdress(){
    try{
        await deleteAddressess(props.addressId)
    }catch(error){
        console.log(error)
    }
    window.location.reload()
    closeModalDelete()
}

onMounted(()=>{
    getAddress()
})

</script>

<template>
    <div class="buttons">
        <p  @click="openModal" class="edit"> Edit </p>
        <p @click="openModalDelete" class="deleteButton">Delete</p>
    </div>

    <div v-if="modalDelete" class="modal-open">
        <div class="delete">
            <div class="closePosition">
                <img @click="closeModalDelete" src="@/assets/icons/icons8-excluir.svg" class="close">
            </div>
            <form @submit.prevent="deleteAdress">
                <main class="confirm">
                    <label class="confirmDelete">Type 'DELETE' to confirm</label>
                    <input type="text" required v-model="verify" class="inputDelete">
                    <button class="submit" type="submit">DELETE</button>
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
                <form @submit.prevent="submit">
                    <section class="productInfos">
                        <div class="formProduct">
                            <label>Street</label>
                            <input v-model="street" class="productNameInput" placeholder="Ex: Flower Field Ave.">
                        </div>
                        <div class="formProduct">
                            <label>Number</label>
                            <input v-model="number" class="productNameInput" placeholder="Ex: 24709">
                        </div>
                        <div class="formProduct">
                            <label>ZIP</label>
                            <input v-model="zip" class="productNameInput" placeholder="Ex: 91350">
                        </div>
                        <div class="formProduct">
                            <label>City</label>
                            <input v-model="city" class="productNameInput" placeholder="Ex: Santa Clarita">
                        </div>
                        <div class="formProduct">
                            <label>State</label>
                            <input v-model="state" class="productNameInput" placeholder="Ex: California">
                        </div>
                        <div class="formProduct">
                            <label>Country</label>
                            <input v-model="country" class="productNameInput" placeholder="Ex: United States of America">
                        </div>
                    </section>
                    <button class="submit">Save Changes</button>
                </form>
            </main>
        </div>
    </div>
</template>

<style scoped>
    .deleteButton{
    color: red;
    font-family: "openSans";
    font-weight: bold;
    transition: 0.3s ease;
}

.deleteButton:hover{
    text-decoration: underline;
    cursor: pointer;
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

    .buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
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

    .delete{
        background-color: rgb(0, 0, 0);
        padding: 20px;
        border-radius: 10px;
        max-width: 80%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }


    .edit{
        color: var(--lightBlue);
        font-family: "openSans";

    }

    .edit:hover{
        text-decoration: underline;
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
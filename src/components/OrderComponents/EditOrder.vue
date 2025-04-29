<script setup>
import { onMounted, ref } from 'vue';
import { changeOrderStatus, getClientOrders, getOrderById } from '../../services/http';

const props = defineProps({
    orderID: Number,
})

const status = ref('')
const modal = ref(false)
const order = ref({})
const clientOrder = ref({})

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

async function getOrder(){
    try{
        const result = await getOrderById(props.orderID)
        order.value = result
    }catch(error){
        console.log(error)
    }
}

async function clientOrders() {
    try {
        const result = await getClientOrders()
        clientOrder.value = result
    } catch (error) {
        console.log(error)
    }
}


async function changeStatus(){
    try{
        await changeOrderStatus(props.orderID, {
            status: status.value,
        })
    }catch(error){
        console.log(error)
    }
    window.location.reload()
}

function submit(){
    changeStatus()
    closeModal()
    
}

onMounted(() =>{
    getOrder()
    clientOrders()
})


</script>

<template>
    <div class="buttons">
        <p @click="openModal" class="edit">EDIT</p>
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
                            <span>Change order status</span>
                            <select v-model="status">
                                <option>PROCESSING</option>
                                <option>SHIPPED</option>
                                <option>COMPLETED</option>
                            </select>
                        </div>
                    </section>


                    <button class="submit">Change Status</button>
                </form>
            </main>
        </div>
    </div>
</template>

<style scoped>
select {
    padding: 5px 10px;
    border: none;
    background-color: var(--lightPurple);
    color: var(--purple);
    font-size: 1.2rem;
    border-radius: 5px;
    transition: 0.2s;
    outline: none;
}

select:hover {
    color: var(--lightPurple);
    background-color: var(--purple);
}

option {
    padding: 5px 10px;
    border: none;
    background-color: var(--lightPurple);
    color: var(--purple);
    font-size: 1.2rem;
    border-radius: 5px;
    transition: 0.2s;
}

option:hover {
    color: var(--lightPurple);
    background-color: var(--purple);
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
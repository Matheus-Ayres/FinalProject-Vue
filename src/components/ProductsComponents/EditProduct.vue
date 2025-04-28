<script setup>
import { onMounted, ref } from 'vue'
import { deleteProducts, getProduct, updatePoduct, updateStockPoduct } from '../../services/http'
import { useAuthStore } from '@/stores/auth.js'


const props = defineProps({
    prodId: Number,
    catId: Number
})

const user = useAuthStore
const product = ref({})
const modal = ref(false)
const modalDelete = ref(false)
const name = ref('')
const price = ref('')
const stock = ref('')
const description = ref('')
const verify = ref('')


async function getProductEdit() {
    try{
        const result = await getProduct(props.prodId)
        product.value = result

        name.value = result.name
        price.value = result.price
        stock.value = result.stock
        description.value = result.description

    }catch(error){
        console.log(error)
    }
}

async function editProduct() {
    try{
        await updatePoduct(props.prodId, {
            name: name.value,
            price: price.value,
            category_id: props.catId,
        })
    }catch(error){
        console.log(error)
    }
}

async function editStockProduct() {
    try{
        await updateStockPoduct(props.prodId, {
            stock: stock.value,
        })
    }catch(error){
        console.log(error)
    }
}

function submit(){
    editProduct()
    editStockProduct()
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

function openModalDelete(){
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

function closeModalDelete(){
    if (modalDelete.value == true){
        modalDelete.value = false
    }
}

async function deleteProduct(){
    console.log(user)

    try{
        if(verify.value == 'DELETE'){
            await deleteProducts(props.prodId)
            closeModalDelete()
        }else{
            alert("You must type 'DELETE'")
        }
        
    }catch(error){
        console.log(error)
    }
}

onMounted(() =>{
    getProductEdit()
})

</script>

<template>
    <div class="buttons">
        <button  @click="openModal" class="edit"> EDIT</button>
        <img @click="openModalDelete" src="../../assets/icons/lixo.svg" class="trash">
    </div>

    <div v-if="modalDelete" class="modal-open">
        <div class="delete">
            <div class="closePosition">
                <img @click="closeModalDelete" src="@/assets/icons/icons8-excluir.svg" class="close">
            </div>
            <form @submit.prevent="deleteProduct">
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
                            <label>Current Product Name: {{ product.name }}</label>
                            <input v-model="name" class="productNameInput" placeholder="New Name">
                        </div>

                        <div class="formProduct">
                            <label >Current Price: ${{ product.price }}</label>
                            <div class="pricediv">
                                <label class="usd"> US$ </label>
                                <input v-model="price" class="productPriceInput" type="number" step="0.01">
                            </div>
                        </div>

                        <div class="formProduct">
                            <label>Current Stock: {{ product.stock }}</label>
                            <input v-model="stock" class="productStockInput" type="number">
                        </div>
                    </section>


                    <button class="submit">UP PRODUCT</button>
                </form>
            </main>
        </div>
    </div>
</template>

<style scoped>
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
        padding: 5px 60px;
        border: var(--lightBlue) 1px solid;
        background: var(--lightBlue);
        color: black;
        font-weight: bold;
        border-radius: 20px;
        transition: 0.2s;
        margin-bottom: 20px;
    }

    .edit:hover{
        background-color: var(--blue1);
        border-color: var(--blue1);
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
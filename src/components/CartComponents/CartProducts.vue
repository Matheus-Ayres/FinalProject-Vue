<script setup>
import { onMounted, ref } from 'vue';
import { clearCartItems, deleteInCart, getCartItems, getProduct, getProducts, updateQnt } from '../../services/http';

const props = defineProps({
    prodID: Number,
    quantity: Number
})

const backendUrl= "http://35.196.79.227:8000"
const product = ref({})
const localQuantity = ref(props.quantity)
const emit = defineEmits(['updated'])

async function getInfosProduct(){
    try{
            const result = await getProduct(props.prodID)
            product.value = result
            
    }catch(error){
        console.log(error)
    }
}



async function increaseItem(){
    localQuantity.value ++
    try{
        await updateQnt({
            product_id: props.prodID,
            quantity: localQuantity.value
        })
        emit('updated')
    }catch(error){
        console.log(error)
    }
}

async function decreaseItem(){
    localQuantity.value--
    try {
        await updateQnt({
            product_id: props.prodID,
            quantity: localQuantity.value
        })
        emit('updated')
    } catch (error) {
        console.log(error)
    }
}

async function deleteProd(){
    try{
        await deleteInCart({
            product_id: props.prodID
        })
        emit('updated')
        
    }catch(error){
        console.log(error)
    }
}


onMounted( () => {
    getInfosProduct()
})

</script>

<template>
    <div class="product">
        
        <RouterLink :to="'/ProductPage/' + product.id" class="card">
            <div class="imgArea">
                <img :src="backendUrl + product.image_path" />
            </div>
        </RouterLink>
        <div class="productInfo">    
            <div class="top">
                <h1>{{ product.name }}</h1>
                <h1>${{ (product.price * localQuantity).toFixed(2) }}</h1>
            </div>
            <div class="edit">
                <div class="quantity">
                    <img src="@/assets/icons/lixo.svg" class="trash" @click="deleteProd" v-if="localQuantity <= 1">
                    <button class="inc-dec" @click="decreaseItem" v-else>-</button>
                    <h1>{{ localQuantity }}</h1>
                    <button class="inc-dec" @click="increaseItem" v-if="localQuantity <= product.stock">+</button>
                    <button class="inc-decFalse" v-else>+</button>
                </div>
                <span class="del" @click="deleteProd">Remove</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .del{
        font-family: "openSans";
        color: white;
        align-self: end;
        text-decoration: underline;
    }

    .edit{
        margin-top: auto;
        display: flex;
        gap: 20px;
        width: 50%;
    }

    .del:hover{
        color: red;
        cursor: pointer;
    }

    .trash{
        width: 25px;
        cursor: pointer;
    }

    .inc-dec:hover{
        color: var(--blue1);
        cursor: pointer;
    }

    .inc-dec{
        font-size: 2rem;
        background-color: black;
        border: none;
        color: var(--lightBlue);
    }

    .inc-decFalse:hover{
        color: var(--gray);
        cursor: pointer;
    }

    .inc-decFalse{
        font-size: 2rem;
        background-color: black;
        border: none;
        color: var(--lightGray);
    }

    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
    }

    .imgArea{
        position: relative;
        height: 180px;
        overflow: hidden; 
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ecececb0;
        border-radius: 20px;
    }

    .product{
        display: grid;
        grid-template-columns: 15% 85%;
        gap: 30px;

    }

    h1{
        font-family: "openSans";
        font-weight: bold;
        color: white;
        
    }

    .top{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .productInfo{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .quantity {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid white;
    padding: 5px;
    border-radius: 20px;
}

</style>
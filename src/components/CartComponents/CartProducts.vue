<script setup>
import { onMounted, ref } from 'vue';
import { getCartItems, getProduct, getProducts } from '../../services/http';

const props = defineProps({
    prodID: Number
})

const backendUrl= "http://35.196.79.227:8000"

const product = ref({})

async function getInfosProduct(){
    try{
            const result = await getProduct(props.prodID)
            product.value = result
            
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
        <div class="imgArea">
            <img :src="backendUrl + product.image_path" />
        </div>
        <div class="productInfo">    
            <div class="top">
                <h1>{{ product.name }}</h1>
                <h1>${{ product.price }}</h1>
            </div>
            <div class="quantity">
                <h1>a</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
    }

    .imgArea{
        position: relative;
        height: 200px;
        overflow: hidden; 
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ecececb0;
        border-radius: 20px;
    }

    .product{
        display: grid;
        grid-template-columns: 20% 75%;
        gap: 30px;

    }

    h1{
        font-family: "openSans";
        font-weight: bold;
        color: var(--lightBlue);
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
    margin-top: auto;
}

</style>
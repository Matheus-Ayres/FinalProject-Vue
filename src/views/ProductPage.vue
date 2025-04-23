<script setup>
import { useRoute } from 'vue-router';
import NavHeader from '../components/NavHeader.vue'
import { onMounted, ref } from 'vue';
import { getProduct } from '../services/http';

const backendUrl= "http://35.196.79.227:8000"

const route = useRoute()
const product = ref({})
const quantity = ref(1)

async function getProductSelected(idProd){
    try{
    const result = await getProduct(idProd)
    product.value = result
    console.log(product.value)
    }catch(error){
        console.log(error)
    }
}

onMounted(() =>{
    getProductSelected(route.params.id)
})

</script>

<template>
    <NavHeader/>
    <main>
        <div class="imgArea">
            <img :src="backendUrl + product.image_path" />
        </div>
        <div class="productInfo">
            <h1>{{ product.name }}</h1>
            <p>{{ product.description }}</p>
        </div>
        <div class="buyInfos">
            <div class="middleCard">
                <span>${{ product.price }}</span>
                <p>Deliver to adress</p>
                <div v-if="product.stock > 0">
                    <div class="quantity">
                        <p class="inStock">In Stock</p>
                        <span>Quantity:  </span>
                        <div class="counter">
                            <span>{{ quantity }}</span>
                        </div>
                    </div>
                </div>
                
                <div v-else>
                    <p class="outStock">Out Stock</p>
                </div>
            </div>
            <div class="finishCard">
                <button class="buy">Buy Now</button>
                <button class="cart">Add to Cart </button>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .quantity{
        display: flex;
        flex-direction: column;
    }

    .counter{
        border-radius: 20px;
        border: solid 2px var(--lightBlue);
    }

    .middleCard{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .buy{
    padding: 5px 60px;
    border: var(--lightBlue) 1px solid;
    background: var(--lightBlue);
    color: black;
    font-weight: bold;
    border-radius: 20px;
    transition: 0.2s;
    font-size: 1.5rem;
}

    .buy:hover{
        background-color: var(--blue1);
        border-color: var(--blue1);
        cursor: pointer;
    }

.cart{
    padding: 5px 60px;
    border: var(--lightBlue) 1px solid;
    background: none;
    color: var(--lightBlue);
    font-weight: bold;
    border-radius: 20px;
    transition: 0.2s;
    font-size: 1.2rem;
}

.cart:hover{
    border: var(--lightBlue) 1px solid;
    background: var(--lightBlue);
    color: black;
    cursor: pointer;
}

    .finishCard{
        display: flex;
        flex-direction: column;
        margin-top: 40%;
        gap: 20px;
    }

    .buyInfos{
        background-color: black;
        margin-right: 20px;
        padding: 20px;
        font-size: 1.2rem;
        border-radius: 20px;
    }

    .inStock{
        color: green;
        font-weight: bold;
    }

    .outStock{
        color: red;
        font-weight: bold;
    }

    span{
        color: var(--blue1);
        font-family: "openSans";
        font-weight: bold;
        font-size: 1.5rem;
    }

    .imgArea{
        position: relative;
        height: 450px;
        overflow: hidden; 
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #85858515;
        border-radius: 20px;
    }

    .productInfo{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    h1, p{
        font-family: "openSans";
        color: white;
    }

    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
    }

    main{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap:50px;
    }
</style>
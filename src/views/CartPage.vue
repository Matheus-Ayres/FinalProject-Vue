<script setup>
import { onMounted, ref } from 'vue';
import NavHeader from '../components/NavHeader.vue';
import { getCart, getCartItems } from '../services/http';
import CartProducts from '../components/CartComponents/CartProducts.vue';

const cart = ref({})

async function userItems (){
    try{
        const result = await getCartItems()
        cart.value = result
    }catch(error){
        console.log(error)
    }
}

onMounted(() => {
    userItems()
})
</script>

<template>
    <NavHeader/>
    <div class="cart" v-if="cart">
        <div v-for="item in cart.items" :key="item.id" class="products">
            <CartProducts :prodID="item.product_id" :quantity="item.quantity"/>
        </div>
    </div>
    <div v-else>
        <p>Your Cart is Empty</p>
    </div>
</template>

<style scoped>
    .cart{
        background-color: black;
        margin: 60px;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }

    .products{
        border-top: white solid 1px;
        border-bottom: white solid 1px;
        padding: 20px;
    }
</style>
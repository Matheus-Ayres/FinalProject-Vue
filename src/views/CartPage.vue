<script setup>
import { onMounted, ref } from 'vue';
import NavHeader from '../components/NavHeader.vue';
import { clearCartItems, getCart, getCartItems } from '../services/http';
import CartProducts from '../components/CartComponents/CartProducts.vue';
import CartEmpty from '../components/CartComponents/CartEmpty.vue';

const cart = ref({})

async function userItems (){
    try{
        const result = await getCartItems()
        cart.value = result
        console.log(cart.value)
    }catch(error){
        console.log(error)
    }
}

async function clearCart() {
    try{
        await clearCartItems()
        userItems()
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
    <div class="cart" v-if="cart.total_amount">
        <div class="top">
            <button @click="clearCart">Clear all</button>
        </div>
        <div v-for="item in cart.items" :key="item.id" class="products">
            <CartProducts :prodID="item.product_id" :quantity="item.quantity"  @updated="userItems"/>
        </div>
        <div class="end">
            <img src="@/assets/icons/shopbasket.png">
            <p class="sub">Subtotal ({{ cart.items.length }} items): ${{ cart.total_amount }}</p>
        </div>
    </div>
    <div v-else>
        <CartEmpty/>
    </div>
</template>

<style scoped>
    img{
        width: 50px;
    }

    .end{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        margin-top: 10px;
    }

    .sub{
        font-family: "openSans";
        color: white;
        font-size: 2rem;
    }

    .top{
        display: flex;
        justify-content: end;
        padding-bottom: 10px;
    }

    .cart{
        background-color: black;
        margin: 20px 60px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
    }

    .products{
        border-top: var(--blue1) solid 1px;
        border-bottom: var(--blue1) solid 1px;
        padding: 20px;
    }

    button{
        color: white;
        background: none;
        border: none;
        width: 10%;
        display: flex;
        font-size: 1.2rem;
        justify-content: center;
        border: red solid 2px;
        padding: 10px 0;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.3s ease;
        font-weight: bold;
    }

    button:hover{
        background-color: red;
    }
</style>
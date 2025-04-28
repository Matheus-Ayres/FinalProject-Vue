<script setup>
import { onMounted, ref } from 'vue';
import NavHeader from '../components/NavHeader.vue';
import { getOrders } from '../services/http';
import OrderCards from '../components/OrderComponents/OrderCards.vue';

const orders = ref({})
const backendUrl = "http://35.196.79.227:8000"

async function myOrders() {
    try {
        const result = await getOrders()
        orders.value = result
        console.log(orders.value)
    } catch (error) {
        console.log(error)
    }
}


onMounted(() => {
    myOrders()
})
</script>

<template>
    <NavHeader />
    <main>
        <h1>My orders</h1>
        <div v-for="order in orders" :key="order.id" class="orders">
            <OrderCards :products="order.products"/>
        </div>
    </main>
</template>


<style scoped>
.orders {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:  10px;
}

main {
    margin: 60px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

h1,
p {
    color: white;
    font-family: "openSans";
}
</style>
<script setup>
import { onMounted, ref } from 'vue';
import { getOrders } from '@/services/http';

const orders = ref({});
const backendUrl = "http://35.196.79.227:8000";

defineProps({
    products: Object
});

async function myOrders() {
    try {
        const result = await getOrders();
        orders.value = result;
        console.log(orders.value);
    } catch (error) {
        console.log(error);
    }
}



onMounted(() => {
    myOrders();
});
</script>

<template>
    <div class="card">
        <h2>Pedido</h2>
        <div class="products">
            <div class="product" v-for="product in products" :key="product.name">
                
                <p>{{ product.name }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 0 10px 10px 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

h2 {
    color: white;
    font-family: "openSans";
    margin-bottom: 10px;
}

.products {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.product {
    background-color: #2b2b2b;
    padding: 10px;
    border-radius: 6px;
    flex: 1 1 calc(50% - 10px);
    min-width: 100px;
}

.product p {
    color: white;
    font-family: "openSans";
}
</style>
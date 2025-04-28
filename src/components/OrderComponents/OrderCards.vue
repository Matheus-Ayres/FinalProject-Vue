<script setup>
import { onMounted, ref } from 'vue';
import { getOrders } from '@/services/http';

const orders = ref({})
const backendUrl = "http://35.196.79.227:8000"

defineProps({
    products: Object
})



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
    
    <div v-for="product in products" :key="product.name">
        <div class="card">
        <p>Product: {{ product.name }}</p>
            </div>
        </div>

</template>


<style scoped>
h1, p{
    color: white;
    font-family: "openSans";
}

.card{
    background-color: black;
    padding: 10px;
    border-radius: ;
}
</style>
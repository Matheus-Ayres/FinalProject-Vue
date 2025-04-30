<script setup>
    import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth.js'
import { getClientOrders, getOrders } from '@/services/http';
import OrderCards from '@/components/OrderComponents/OrderCards.vue';
import EditOrder from '@/components/OrderComponents/EditOrder.vue';
import CancelOrder from '@/components/OrderComponents/CancelOrder.vue';

const orders = ref([])
const clientOrder = ref({})
const backendUrl = "http://35.196.79.227:8000"
const user = useAuthStore()


async function clientOrders() {
    try {
        const result = await getClientOrders()
        clientOrder.value = result
        
    } catch (error) {
        console.log(error)
    }
}




onMounted(() => {
    clientOrders()
})
</script>

<template>
    <main>
        <h1>Clients Orders</h1>
        <div class="orders">
            <div v-for="order in clientOrder" :key="order.id" class="cards">
                <div class="status">
                    <span :class="{
                        pending: order.status == 'PENDING',
                        processing: order.status == 'PROCESSING',
                        shipped: order.status == 'SHIPPED',
                        completed: order.status == 'COMPLETED',
                        canceled: order.status == 'CANCELED'
                    }">
                        {{ order.status }}
                    </span>
                    <EditOrder :orderID="order.id"/>
                    
                </div>
                <OrderCards :products="order.products" />
            </div>
        </div>
    </main>
</template>

<style scoped>
.status {
    display: flex;
    gap: 10px;
}

.cards {
    display: flex;
    flex-direction: column;
    
}


.pending {
    background-color: #B8860B;
    padding: 10px;
    border-radius: 10px 10px 0 0;

    width: 50%;
    font-family: "openSans";
    color: white;
}

.processing {
    background-color: #005f73;
    padding: 10px;
    border-radius: 10px 10px 0 0;

    width: 50%;
    font-family: "openSans";
    color: white;
}

.shipped {
    background-color: #4B0082;
    padding: 10px;
    border-radius: 10px 10px 0 0;

    width: 50%;
    font-family: "openSans";
    color: white;
}

.completed {
    background-color: #006400;
    padding: 10px;
    border-radius: 10px 10px 0 0;

    width: 50%;
    font-family: "openSans";
    color: white;
}

.canceled {
    background-color: #8B0000;
    padding: 10px;
    border-radius: 10px 10px 0 0;

    width: 50%;
    font-family: "openSans";
    color: white;
}


.orders {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
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
    margin-bottom: 20px;
}
</style>
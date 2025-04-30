<script setup>
import { cancelOrder } from '../../services/http';

const props = defineProps({
    orderID: Number,
})

async function cancel(){
    try {
        await cancelOrder(props.orderID)
    } catch (error) {
        console.log(error)
    }

    window.location.reload()
}

</script>

<template>
    <button @click="cancel">Cancel order</button>
</template>

<style scoped>
    button{
        background: none;
        color: red;
        font-family: "openSans";
        font-size: 0.8rem;
        font-weight: bold;
        border: none;
        padding: 2px;
        border-radius: 20px;
    }

    button:hover{
        background-color: red;
        color: white;
        font-family: "openSans";
        font-size: 0.8rem;
        font-weight: bold;
        border: none;
        padding: 2px;
        cursor: pointer;
    }
</style>
<script setup>
import { ref } from 'vue';

import CreateProduct from './CreateProduct.vue';

const modal = ref(false)

function openModal(){
    if (modal.value == false){
        modal.value = true
    }
}

function closeModal(){
    if (modal.value == true){
        modal.value = false
    }
}

</script>

<template>
    <div >
        <h1 @click="openModal" class="registerProduct">
            New product
        </h1>
    </div>
    <CreateProduct @close="closeModal" v-if="modal"/>
    
</template>

<style scoped>
    .registerProduct{
    font-family: "openSans";
    transition: 0.5s;
    color: var(--textSec);
    background-color: var(--lightPurple);
    margin: 10px 60px;
    width: 10%;
    padding: 10px;
    border-radius: 10px;
    color: var(--purple);
}

    .registerProduct:hover{
        color: var(--lightPurple);
        background-color: var(--purple);
        cursor: pointer;
    }
</style>
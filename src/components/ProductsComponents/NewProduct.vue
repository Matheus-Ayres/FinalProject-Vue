<script setup>
import { onMounted, ref } from 'vue';
import {  getCategories } from '@/services/http';

const modal = ref(false)

function openModal(){
    if (modal.value == false){
        modal.value = true
    }
}

const categories = ref({})
const categoryChoosed = ref()

async function myCategories(){
    const result = await getCategories();
    categories.value = result
    console.log(categories.value)
}

onMounted(() => {
    myCategories()
})

</script>

<template>
    <div >
        <h1 @click="openModal" class="registerProduct">
            New product
        </h1>
    </div>

    <div v-if="modal" class="modal-open">
        <div class="modal">
            <div>
                <span>Select the category</span>
                <select v-model="categoryChoosed">
                    <option  v-for="cat in categories" :key="cat.id">
                        {{ cat.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<style scoped>
span{
    color: black;
    font-family: "openSans";
    font-weight: bold;
}

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
    }

    .modal-open{
        position: fixed;
        inset: 0;
        background-color: rgb(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .modal{
        background-color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 80%; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    }

</style>
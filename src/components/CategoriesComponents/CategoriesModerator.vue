<script setup>
import {  getCategories } from '@/services/http';
import { onMounted, ref } from 'vue';
import ProductCards from '../ProductsComponents/ProductCards.vue';
import { getAllProducts } from '../../services/http';
import AllProductCards from '../ProductsComponents/AllProductCards.vue';

const categories = ref({})
const idCat = ref(null)



async function myCategories(){
    try{
        const result = await getCategories();
        categories.value = result
        console.log(categories.value)
    }catch(error){
        console.log(error)
    }
}

function allProd(){
    idCat.value = null
    console.log(idCat.value)
}


onMounted(() => {
    myCategories()
})
</script>

<template>
    <main>
        <div class="catsPosition">
            <div @click="allProd" class="allCat">
                All categories
            </div>
            <div  v-for="cat in categories" :key="cat.id">
                <div> 
                        <button class="categoryName" @click="idCat = cat.id" >
                            {{ cat.name }}
                        </button>
                </div> 
            </div>
        </div>

        
        <ProductCards v-if="idCat != null" :key="idCat" :catId="idCat" /> 
        <AllProductCards v-else/>
    </main>
</template>

<style scoped>
    main{
        display: grid;
        grid-template-columns: 20% 80%;
    }

    button{
        color: var(--textSec);
        font-family: "openSans";
        font-size: 1.2rem;
        background: none;
        border: none;
        cursor: pointer;
    }

    .allCat{
        color: var(--textSec);
        font-family: "openSans";
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
    }



    .catsPosition{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>
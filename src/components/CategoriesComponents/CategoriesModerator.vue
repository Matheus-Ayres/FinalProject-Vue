<script setup>
import {  getCategories } from '@/services/http';
import { onMounted, ref } from 'vue';

const categories = ref({})


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
    <div class="catsPosition">
        <div class="allCat">
            All categories
        </div>
        <div  v-for="cat in categories" :key="cat.id">
            <div> 
                    <p class="categoryName">
                        {{ cat.name }}
                    </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    p{
        color: var(--textSec);
        font-family: "openSans";
        font-size: 1.2rem;
    }

    .allCat{
        color: var(--textSec);
        font-family: "openSans";
        font-size: 1.2rem;
        font-weight: bold;
    }

    .catsPosition{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>
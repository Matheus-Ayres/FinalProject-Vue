<script setup>
import {  getCategories } from '@/services/http';
import { onMounted, ref } from 'vue';

import EditCategory from './EditCategory.vue';

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
    <div class="categories">
        <div  v-for="cat in categories" :key="cat.id">
        
            <div class="catsField"> 
                    <p class="catText">
                        {{ cat.name }}
                    </p>
                    <EditCategory :catId="cat.id"/>       
            </div>
        </div>
    </div>
</template>

<style scoped>
p{
    font-family: "openSans";
    color: white;
    font-size: 1.5rem;
}

.categories{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}



.catText{
    color: var(--textSec);
    font-weight: bold;
}

.catsField{
    display: flex;
    gap: 10px;
    flex-direction: column;
    border-radius: 10px;
    background-color: black;
    align-items: center;
    padding: 10px;
    border: var(--lightBlue) 1px solid;
}
</style>
<script setup>
import { deleteCategorie, getCategories } from '@/services/http';
import { onMounted, ref } from 'vue';
import { updateCategories } from '../../services/http';
import EditCategory from './EditCategory.vue';

const categories = ref({})
const editField = ref(false)
const deleteVisible = ref(false)

async function myCategories(){
    const result = await getCategories();
    categories.value = result
    console.log(categories.value)
}

async function deleteCat(idCat) {
    try{
        await deleteCategorie(idCat)
    }
    catch(error){
        console.log(error)
    }
    categories.value = categories.value.filter(cat => cat.id !== idCat);
}

function hideDelete(){
    if(deleteVisible.value == false){
        deleteVisible.value = true
    }else{
        deleteVisible.value = false
    }
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
                    <EditCategory @hide="hideDelete" :catId="cat.id"/>
                    <button v-if="!deleteVisible" @click="deleteCat(cat.id)" class="delete">DELETE</button>
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

.delete{
    padding: 5px 50px;
    border: var(--lightBlue) 1px solid;
    background: none;
    color: var(--lightBlue);
    font-weight: bold;
    border-radius: 20px;
    transition: 0.2s;
}

.delete:hover{
    color: var(--textSec);
    border: red 1px solid;
    background-color: red;
    cursor: pointer;
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
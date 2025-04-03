<script setup>
import { deleteCategorie, getCategories } from '@/services/http';
import { onMounted, ref } from 'vue';

const categories = ref({})
const editField = ref(false)


async function myCategories(){
    const result = await getCategories();
    categories.value = result
    console.log(categories.value)
}

async function deleteCat(idCat) {
    try{
        await deleteCategorie(idCat)
    }
    catch{
        console.log("n deu")
    }
    categories.value = categories.value.filter(cat => cat.id !== idCat);

}
onMounted(() => {
    myCategories()
})
</script>

<template>
    <div  v-for="cat in categories" :key="cat.id">
            <div class="catsField">
                
                    <p class="editCats">
                        {{ cat.name }}
                    </p>
                    
                <button @click="deleteCat(cat.id)">Delete</button>
            </div>

            
        </div>
</template>

<style scoped>
p{
    font-family: "openSans";
    color: white;
    font-size: 1.2rem;
}


.editCats{
    display: flex;
    flex-direction: column;
}

.catsField{
    display: flex;
    gap: 10px;
}
</style>
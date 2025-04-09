<script setup>
import { onMounted, ref } from 'vue';
import { getProducts } from '../../services/http';


const props = defineProps({
    catId: Number,
})

const product = ref({})

async function getProduct(){
    try{
            const result = await getProducts(props.catId)
            console.log(result)
            product.value = result
            
    }catch(error){
        console.log(error)
    }
}

onMounted( () => {
    getProduct()
})


</script>

<template>
    <div v-for="infos in product" :key="infos.id">
        <p>
            {{ infos.name }}
            {{ infos.description }}
            {{ infos.price }}
        </p>
    </div>
</template>

<style scoped>
    p{
        color: white;
    }
</style>
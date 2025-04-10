<script setup>
import { onMounted, ref } from 'vue';
import { getProducts } from '../../services/http';

const backendUrl= "http://35.196.79.227:8000"


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
    <div class="catalog">

        <div v-for="infos in product" :key="infos.id">

            <div class="card">
                <img :src="backendUrl + infos.image_path" />
                <p>
                    {{ infos.name }}
                </p>
            </div>
        </div>

    </div>
</template>

<style scoped>
    p{
        color: white;
        font-family: "openSans";
        font-weight: bold;
    }

    .catalog{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .card{
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: black;
        border-radius: 20px;
        width: 300px;
    }

    img{
        width: 100%;
        align-self: center;
        border-radius: 20px;
    }
</style>
<script setup>
import { onMounted, ref } from 'vue';
import { getAllProducts, getProducts } from '../../services/http';
import { useAuthStore } from '@/stores/auth.js'
import { RouterLink, useRoute } from 'vue-router';
import EditProduct from './EditProduct.vue';

const backendUrl= "http://35.196.79.227:8000"
const modal = ref(false)
const user = useAuthStore()
const route = useRoute()

const props = defineProps({
    catId: Number,
})

const product = ref({})



async function getProduct(){
    try{
            const result = await getProducts(props.catId)
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
                    <EditProduct :catId="infos.category.id" :prodId="infos.id" v-if="user.isAuthenticated && (user.user.role == 'MODERATOR' || user.user.role == 'ADMIN')  && route.path == '/ModeratorArea'"/>
                    <RouterLink v-if="user.isAuthenticated" :to="'/ProductPage/' + infos.id" class="card">
                        <div class="imgArea">
                            <img :src="backendUrl + infos.image_path" />
                        </div>
                        <div class="productNameAndPrice">
                            <p>
                                {{ infos.name }}
                            </p>
                            <p class="productPrice">
                                US${{ infos.price }}
                            </p>
                        </div>
                    </RouterLink>
                    <RouterLink v-if="!user.isAuthenticated" to="/Login" class="card">
                        <div class="imgArea">
                            <img :src="backendUrl + infos.image_path" />
                        </div>
                        <div class="productNameAndPrice">
                            <p>
                                {{ infos.name }}
                            </p>
                            <p class="productPrice">
                                US${{ infos.price }}
                            </p>
                        </div>
                    </RouterLink>
                </div>
            </div>

            
</template>

<style scoped>



    .productPrice{
        color: var(--blue1);
        font-family: "openSans";
        font-weight: bold;
        font-size: 1.3rem;
    }


    .productNameAndPrice{
        color: white;
        font-family: "openSans";
        font-weight: bold;
        font-size: 1.3rem;
    }

    .catalog{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    .card{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 15px;
        background-color: black;
        border-radius: 20px;
        width: 250px;
        max-height: 350px;
        transition: transform 0.4s ease;
        text-decoration: none;
    }

    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
    }

    .imgArea{
        position: relative;
        height: 300px;
        overflow: hidden; 
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #85858515;
        border-radius: 20px;
    }

    .card:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
</style>
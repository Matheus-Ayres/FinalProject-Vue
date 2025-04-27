<script setup>
import {  getCategories, getCoupons } from '@/services/http';
import { onMounted, ref } from 'vue';
import EditCoupon from './EditCoupon.vue';



const coupon = ref({})


async function coupons(){
    const result = await getCoupons();
    coupon.value = result
    console.log(coupon.value)

}

onMounted(() => {
    coupons()
})
</script>

<template>
    <div class="categories">
        <div  v-for="c in coupon" :key="c.id">
        
            <div class="catsField"> 
                    <p class="catText">
                        Code: {{ c.code }}
                    </p>
                    <p>
                        Discount percentage: %{{ c.discount_percentage }}
                    </p>
                    <p>Coupon end: {{ c.end_date }}</p>
                    <EditCoupon :couponId="c.id"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
p{
    font-family: "openSans";
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.categories{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}



.catText{
    color: var(--textSec);
    
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
<script setup>
import { getAddresses, getCoupons, newOrder } from '@/services/http';
import { onMounted, ref } from 'vue';
import { getCartItems } from '../../services/http';

const addresses = ref({})
const addressChoosed = ref({})
const couponsList = ref([])
const couponCode = ref('')
const couponStatus = ref('') 
const couponID = ref(null)


async function getUserAddresses() {
    try {
        const result = await getAddresses()
        addresses.value = result
        console.log("User Addresses:", addresses.value);
    } catch (error) {
        console.log(error)
    }
}

async function fetchCoupons() {
    const result = await getCoupons();
    couponsList.value = result
    console.log(couponsList.value)
}

function applyCoupon() {
    const foundCoupon = couponsList.value.find(c => c.code === couponCode.value)

    if (foundCoupon) {
        couponStatus.value = 'Coupon Applied'
        couponID.value = foundCoupon.id
    } else {
        couponStatus.value = 'Invalid Coupon'
    }
}

async function placeOrder(){
    try{
        await newOrder({
            address_id: addressChoosed.value.id,
            coupon_id: couponID.value
        })
        window.location.reload()
    }catch(error){
        console.log(error)
    }
}


onMounted(() => {
    getUserAddresses()
    fetchCoupons()
    
})
</script>

<template>
    <h1 class="checkout">Checkout</h1>

    <form @submit.prevent="placeOrder" class="order">
        <div>
            <h1>Deliver to:</h1>
            <select required v-model="addressChoosed">
                <option v-for="address in addresses" :key="address.id" :value="address">
                    {{ address.number }}, {{ address.street }} - {{ address.city }}, {{ address.state }}, {{ address.zip }}
                </option>
            </select>
        </div>

        <div>
            <h1>Coupon</h1>
            <div class="couponArea">
                <input v-model="couponCode" placeholder="Coupon Code">
                <button type="button" class="apply" @click="applyCoupon">Apply</button>
                <span v-if="couponStatus" :class="{ success: couponStatus === 'Coupon Applied', error: couponStatus === 'Invalid Coupon' }">
                    {{ couponStatus }}
                </span>
            </div>
        </div>

        <button type="submit" class="placeOrder">Place Order</button>
    </form>
</template>

<style scoped>
.order {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.placeOrder {
    width: 25%;
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: "openSans";
    color: black;
    background-color: var(--lightBlue);
    transition: 0.3s ease;
    border: none;
}

.placeOrder:hover {
    background-color: var(--blue1);
}

input {
    outline: none;
    width: 50%;
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: "openSans";
}

.apply {
    outline: none;
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: "openSans";
    background-color: var(--purple);
    color: white;
    border: none;
    margin-left: 10px;
}

.apply:hover {
    background-color: var(--purpleDark);
    cursor: pointer;
}

h1, p {
    font-family: "openSans";
    color: white;
}

.checkout {
    text-align: center;
}

select {
    padding: 5px 10px;
    border: none;
    background-color: var(--lightPurple);
    color: var(--purple);
    font-size: 1.2rem;
    border-radius: 5px;
    transition: 0.2s;
    outline: none;
}

select:hover {
    color: var(--lightPurple);
    background-color: var(--purple);
}

option {
    padding: 5px 10px;
    border: none;
    background-color: var(--lightPurple);
    color: var(--purple);
    font-size: 1.2rem;
    border-radius: 5px;
    transition: 0.2s;
}

option:hover {
    color: var(--lightPurple);
    background-color: var(--purple);
}

.couponArea {
    display: flex;
    align-items: center;
    gap: 10px;
}

.success {
    color: limegreen;
    font-weight: bold;
}

.error {
    color: red;
    font-weight: bold;
}
</style>

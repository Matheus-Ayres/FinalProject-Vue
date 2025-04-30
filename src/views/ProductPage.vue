<script setup>
import { useRoute } from 'vue-router';
import NavHeader from '../components/NavHeader.vue'
import { onMounted, ref } from 'vue';
import { addItems, getCartItems, getProduct, updateQnt } from '../services/http';

const backendUrl = "http://35.196.79.227:8000"

const route = useRoute()
const product = ref({})
const quantity = ref(1)
const quantityOptions = ref([])
const showDropdown = ref(false)
const cart = ref({})

async function getProductSelected(idProd) {
    try {
        const result = await getProduct(idProd)
        product.value = result

        const options = []
        for (let i = 1; i <= result.stock; i++) {
            options.push(i)
        }
        quantityOptions.value = options
    } catch (error) {
        console.log(error)
    }
}

async function userItems (){
    try{
        const result = await getCartItems()
        cart.value = result
        console.log(cart.value)
    }catch(error){
        console.log(error)
    }
}

async function addItem(){
    try {
        let exist = false
        for (let i = 0; i < cart.value.items.length; i++) {
            const item = cart.value.items[i]
            console.log(cart.value.items)

            if (item.product_id === product.value.id) {
                await updateQnt({
                    product_id: product.value.id,
                    quantity: item.quantity + quantity.value
                })
                exist = true
                break
            }
        }

        if (!exist) {
            await addItems({
                product_id: product.value.id,
                quantity: quantity.value,
                unit_price: product.value.price
            })
        }

        alert("Item added to Cart")
    } catch(error) {
        console.log(error)
    }

}

function selectQuantity(q) {
    quantity.value = q
    showDropdown.value = false
}



onMounted(() => {
    getProductSelected(route.params.id)
    userItems()
})
</script>
<template>
    <NavHeader />
    <main>
        <div class="imgArea">
            <img :src="backendUrl + product.image_path" />
        </div>
        <div class="productInfo">
            <h1>{{ product.name }}</h1>
            <p>{{ product.description }}</p>
        </div>
        <div class="buyInfos">
            <div class="middleCard">
                <span>${{ product.price }}</span>
                <p>Deliver to address</p>
                <div v-if="product.stock > 0">
                    <div class="quantity">
                        <p class="inStock">In Stock</p>
                        <span>Select Quantity:</span>
                        <div class="custom-select" @click="showDropdown = !showDropdown">
                            <div class="selected">
                                {{ quantity }}
                                <span class="arrow" :class="{ open: showDropdown }">▼</span>
                            </div>

                            <ul v-show="showDropdown" class="dropdown">
                                <li v-for="q in quantityOptions" :key="q" @click.stop="selectQuantity(q)">
                                    {{ q }}
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div v-else>
                    <p class="outStock">Out Stock</p>
                </div>
            </div>
            <div class="finishCard">
                
                <button class="cart"  @click="addItem">Add to Cart</button>
            </div>
        </div>
    </main>
</template>


<style scoped>

.arrow {
  float: right;
  font-size: 1rem;
  margin-left: 10px;
  color: black;
}

.arrow.open {
  transform: rotate(180deg);
}

.quantity {
    display: flex;
    flex-direction: column;
}

.custom-select {
    position: relative;
    width: 100%;
    background-color: var(--lightBlue);
    border-radius: 20px 20px 0 0 ;
    cursor: pointer;
    user-select: none;
}

.custom-select:hover {
    position: relative;
    width: 100%;
    background-color: var(--blue1);
    border-radius: 20px 20px 0 0 ;
    cursor: pointer;
    user-select: none;
}

.selected {
    padding: 10px;
    color: black;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 120px;
    overflow-y: auto;
    background-color: white;
    border-top: none;
    border-radius: 0 0 10px 10px;
    z-index: 10;
}

.dropdown li {
    padding: 3px 0 10px 10px;
    cursor: pointer;
}

.dropdown li:hover {
    background-color: #eee;
}


.middleCard {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.buy {
    padding: 5px 60px;
    border: var(--lightBlue) 1px solid;
    background: var(--lightBlue);
    color: black;
    font-weight: bold;
    border-radius: 20px;
    transition: 0.2s;
    font-size: 1.5rem;
}

.buy:hover {
    background-color: var(--blue1);
    border-color: var(--blue1);
    cursor: pointer;
}

.cart {
    padding: 5px 60px;
    border: var(--lightBlue) 1px solid;
    background: none;
    color: var(--lightBlue);
    font-weight: bold;
    border-radius: 20px;
    transition: 0.2s;
    font-size: 1.2rem;
}

.cart:hover {
    border: var(--lightBlue) 1px solid;
    background: var(--lightBlue);
    color: black;
    cursor: pointer;
}

.finishCard {
    display: flex;
    flex-direction: column;
    margin-top: 40%;
    gap: 20px;
}

.buyInfos {
    background-color: black;
    margin-right: 20px;
    padding: 20px;
    font-size: 1.2rem;
    border-radius: 20px;
}

.inStock {
    color: green;
    font-weight: bold;
}

.outStock {
    color: red;
    font-weight: bold;
}

span {
    color: var(--blue1);
    font-family: "openSans";
    font-weight: bold;
    font-size: 1.5rem;
}

.imgArea {
    position: relative;
    height: 450px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #85858515;
    border-radius: 20px;
}

.productInfo {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

h1,
p {
    font-family: "openSans";
    color: white;
}

img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
}

main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
}
</style>

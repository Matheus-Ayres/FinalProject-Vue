<script setup>
import { ref, onMounted } from 'vue';
import { createProducts, getCategories } from '../../services/http';

const emit = defineEmits(['close'])
const categories = ref({})
const categoryChoosed = ref(null)
const name = ref('')
const price = ref()
const stock = ref()
const description = ref('')
const productImage = ref('')

console.log(categoryChoosed)

function close(){
    emit('close')
}

async function myCategories(){
    const result = await getCategories();
    categories.value = result
    console.log(categories.value)
}

function handleImage(event) {
    const file = event.target.files[0]
    productImage.value = file
}


async function createProduct() {
    
    try{
        const formData = new FormData();
            formData.append("name", name.value);
            formData.append("category_id", categoryChoosed.value);
            formData.append("price", price.value);
            formData.append("stock", stock.value);
            formData.append("description", description.value);

        if (productImage.value) {
            formData.append("image", productImage.value);
        }

        const result = await createProducts(formData);

        console.log(result.status)

        if (result.status === 201) {
            window.location.reload()
        }
        emit('close')

    }catch(error){
        console.log(error)
        console.log(categoryChoosed.value)
    }   
}

onMounted(() => {
    myCategories()
})

</script>

<template>
    <div  class="modal-open">
        <div class="modal">
            <div class="closePosition">
                <img @click="close" src="@/assets/icons/icons8-excluir.svg" class="close">
            </div>
            <main>
                <form @submit.prevent="createProduct">
                    <div class="formProduct">
                        <span>Select the category *</span>
                        <select required v-model="categoryChoosed">
                            <option class="option" :value="cat.id" v-for="cat in categories" :key="cat.id">
                                {{ cat.name }}
                            </option>
                        </select>
                    </div>
                    <section class="productInfos">

                        <div class="formProduct">
                            <label>Product Name *</label>
                            <input v-model="name" required class="productNameInput">
                        </div>

                        <div class="formProduct">
                            <label >Price *</label>
                            <div class="pricediv">
                                <label class="usd"> US$ </label>
                                <input v-model="price" class="productPriceInput" required placeholder="0.00" type="number" step="0.01">
                            </div>
                        </div>

                        <div class="formProduct">
                            <label>Stock *</label>
                            <input v-model="stock" required class="productStockInput" type="number" placeholder="0">
                        </div>

                        <div class="opcionalArea">
                            <div class="formProduct">
                                <label>Description</label>
                                <textarea v-model="description" class="productDescInput"></textarea>
                            </div>

                            <div class="formProduct">
                                <label>Product Image</label>
                                <input @change="handleImage" type="file" class="productDescInput">
                            </div>
                        </div>
                    </section>


                    <button class="submit">UP PRODUCT</button>
                </form>
            </main>
        </div>
    </div>
</template>

<style scoped>
    .modal-open{
        position: fixed;
        inset: 0;
        z-index: 99;
        background-color: rgb(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal{
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        max-width: 80%; 
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .closePosition{
        display: flex;
        justify-content: flex-end;
    }

    .close{
        width: 30px;
    }

    .close:hover{
        cursor: pointer;
    }

    .submit{
font-family: "Roboto", "openSans";
font-weight: bold;
color: white;
padding: 10px 100px;
font-size: 1.2rem;
background-image: linear-gradient(to right,#628EFF, #8740CD, #580475);
border: none;
border-radius: 10px;
cursor: pointer;  
transition: 0.2s ease-in-out;
margin: 50px 100px 0 ;
}

.submit:hover{
border: white 1px solid;
transform: scale(1.05);
}

.productInfos{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.opcionalArea{
    display: flex;
    gap: 10px;
}

.productNameInput{
    padding: 5px 10px;
    outline: none;
    border: 2px solid var(--purpleDark);
    border-radius: 5px;
    font-size: 1.2rem;
}

.productDescInput{
    padding: 5px 10px;
    outline: none;
    border: 2px solid var(--purpleDark);
    border-radius: 5px;
    font-size: 1.2rem;
    height: 100px;
    vertical-align: top;
    resize: none;
    font-family: "openSans";

}

.productStockInput{
    padding: 5px 10px;
    outline: none;
    border: 2px solid var(--purpleDark);
    border-radius: 5px;
    max-width: 20%;
    font-size: 1.2rem;
}

.productPriceInput{
    font-size: 1.2rem;
    border: none;
    outline: none;
    
}

.pricediv{
    padding: 5px 10px;
    outline: none;
    border: 2px solid var(--purpleDark);
    border-radius: 5px;
    max-width: 320px;
}

.usd{
    font-family: "openSans";
    font-weight: bold;
    color: black;
}

input, select{
    max-width: 320px;
}

span, label{
    color: var(--purpleDark);
    font-family: "openSans";
    font-weight: bold;
    font-size: 1.5rem;
}

main{
    display: flex;
    justify-content: flex-start;
}

select{
    padding: 5px 10px;
    border: none;
    background-color: var(--lightPurple);
    color: var(--purple);
    font-size: 1.2rem;
    border-radius: 5px;
    transition: 0.2s;
    outline: none;
}

select:hover{
    color: var(--lightPurple);
    background-color: var(--purple);
}

option{
    padding: 5px 10px;
    border: none;
    background-color: var(--lightPurple);
    color: var(--purple);
    font-size: 1.2rem;
    border-radius: 5px;
    transition: 0.2s;
    border: none;
}

option:hover{
    color: var(--lightPurple);
    background-color: var(--purple);
}

.formProduct{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
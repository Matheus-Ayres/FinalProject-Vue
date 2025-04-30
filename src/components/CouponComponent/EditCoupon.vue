<script setup>
import { onMounted, ref } from 'vue'
import { deleteCoupon, getCoupons, getCouponsByID, updateCoupon } from '../../services/http'

const modal = ref(false)
const code = ref('')
const discount = ref('')
const start = ref('')
const end = ref('')
const coupon = ref({})
const verify = ref('')
const modalDelete = ref(false)

const props = defineProps({
    couponId: Number
})

async function openModal(){
    if(modal.value == false){
        modal.value = true
    }
    await getCoupon()

}

function closeModal(){
    if (modal.value == true){
        modal.value = false
    }
}

function submit(){
    changeCoupon()
    closeModal()
}


async function changeCoupon(){
    try{
        await updateCoupon(props.couponId, {
            discount_percentage: discount.value,
            start_date: start.value,
            end_date: end.value,
        })

    }catch(error){
        console.log(error)
    }
    window.location.reload()
}


async function submitName(){
    try{
        await updateCoupon(props.couponId, {
            code: code.value,
        })
        closeModal()

    }catch(error){
        console.log(error)
    }
}


async function getCoupon() {
    try{
        const result = await getCouponsByID(props.couponId)
        coupon.value = result

        code.value = result.code;
        discount.value = result.discount_percentage;
        start.value = result.start_date;
        end.value = result.end_date;

    }catch(error){
        console.log(error)
    }
}

function openModalDelete(){
    if(modalDelete.value == false){
        modalDelete.value = true
    }
}

function closeModalDelete(){
    if (modalDelete.value == true){
    modalDelete.value = false
    }
}

async function delCoupon(){
    try{
        if(verify.value == 'DELETE'){
            await deleteCoupon(props.couponId)
            closeModalDelete()
        }else{
            alert("You must type 'DELETE'")
        }
        
    }catch(error){
        console.log(error)
    }
    window.location.reload()
}


</script>

<template>
    <div class="buttons">
        <p  @click="openModal" class="edit"> Edit </p>
        <p @click="openModalDelete" class="deleteButton">Delete</p> 
    </div> 

    <div v-if="modalDelete" class="modal-open">
        <div class="delete">
            <div class="closePosition">
                <img @click="closeModalDelete" src="@/assets/icons/icons8-excluir.svg" class="close">
            </div>
            <form @submit.prevent="delCoupon">
                <main class="confirm">
                    <label class="confirmDelete">Type 'DELETE' to confirm</label>
                    <input type="text" required v-model="verify" class="inputDelete">
                    <button class="submit" type="submit">DELETE</button>
                </main>
            </form>
        </div>
    </div>  





    <div v-if="modal" class="modal-open">
        <div class="modal">
            <div class="closePosition">
                <img @click="closeModal" src="@/assets/icons/icons8-excluir.svg" class="close">
            </div>
            <main>
                <form @submit.prevent="submit">
                    <section class="productInfos">
                    <form @submit.prevent="submitName">
                        <div class="formProduct">
                        <label>Code</label>
                        <input v-model="code" class="productNameInput" placeholder="Coupon Code">
                        <button class="submit">Update Coupon Code</button>
                    </div>
                    </form>
                    
                        <div class="formProduct">
                            <label>Discount (percentage)</label>
                            <div class="productNameInput">
                                %
                                <input v-model="discount" class="per"  placeholder="Ex: 20">
                            </div>
                        </div>
                        <div class="formProduct">
                            <label>End Date and Time</label>
                            <input v-model="end" type="datetime-local" class="dateInput">
                        </div>

                    </section>
                    <button class="submit">Update Coupon infos</button>
                </form>
            </main>
        </div>
    </div>
</template>

<style scoped>
.dateInput {
    padding: 5px 10px;
    border: 2px solid var(--purpleDark);
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: white;
    color: var(--purpleDark);
    max-width: 320px;
    outline: none;
}

.dateInput::-webkit-calendar-picker-indicator {
    filter: invert(25%) sepia(10%) saturate(500%) hue-rotate(230deg);
    cursor: pointer;
}



    .per{
        outline: none;
        border: none;
        font-size: 1.5rem;
    }


    .deleteButton{
    color: red;
    font-family: "openSans";
    font-weight: bold;
    transition: 0.3s ease;
}

.deleteButton:hover{
    text-decoration: underline;
    cursor: pointer;
}


    .confirm{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .inputDelete{
        align-self: center;
        outline: none;
        padding: 2px;
        font-size: 1.2rem;
        border-radius: 20px;
        text-align: center;
    }

    .confirmDelete{
        color: white;
    }

    .buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }

    .trash{
        width: 10%;
        cursor: pointer;
    }

    .modal-open{
        position: fixed;
        inset: 0;
        z-index: 99;
        background-color: rgb(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .delete{
        background-color: rgb(0, 0, 0);
        padding: 20px;
        border-radius: 10px;
        max-width: 80%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }


    .edit{
        color: var(--lightBlue);
        font-family: "openSans";

    }

    .edit:hover{
        text-decoration: underline;
        cursor: pointer;
    }
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
    max-width: 320px;
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
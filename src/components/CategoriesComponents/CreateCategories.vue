<script setup>
import { registerCategories } from '@/services/http';
import { ref } from 'vue';

const categorieName = ref('')

async function newCategorie(){
    try{
        const result = await registerCategories(
            {
                name: categorieName.value
            }
        )

        if(result.status == 201){
            categorieName.value = '';
            window.location.reload();

        }else{
            alert("ERROR")
            categorieName.value = '';
        }

    }catch(error){
        console.log(error)
        categorieName.value = '';
    }
}
</script>

<template>
    <main>
    <form @submit.prevent="newCategorie">
        <div class="newCategorie">
            <label>Create a new category:</label>
            <div>
                <input required type="text" v-model="categorieName">
                
            </div>
            <button type="submit">+</button>
        </div>
    </form>
    </main>
</template>

<style scoped>
p, label{
    font-family: "openSans";
    color: white;
    font-size: 1.2rem;
}

main{
    margin: 50px 60px;
}

input{
    background-color: var(--dark);
    border: var(--gray) solid 2px;
    border-radius: 5px;
    max-width: 100%;
    height: 4vh;
    outline: none;
    color: var(--textSec);
    font-size: 1.2rem;
}

button{
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: white;
    max-width: 10px;
    font-size: 2rem;
}

.newCategorie{
    display: flex;
    flex-direction: column;
    width: 20vw;
    gap: 10px;
}
</style>
<script setup>
import { ref } from 'vue';
import { deleteCategorie, updateCategories } from '../../services/http';

const props = defineProps({
    catId: Number,
    currentName: String
})


const newName = ref(props.currentName)
const editField = ref(false)
const deleteVisible = ref(false)



function openEditField(){
    if(editField.value == false){
        editField.value = true
    }else{
        editField.value = false
    }
}



function buttonClick(){
    openEditField()
    hideDelete()
}

async function updateCategorie(){
    try{
        await updateCategories(props.catId, {
            name: newName.value
        })
    }
    catch(error){
        console.log(error)
    }
    window.location.reload();
}

async function deleteCat() {
    try{
        await deleteCategorie(props.catId)
    }
    catch(error){
        console.log(error)
    }
    window.location.reload();
}

function hideDelete(){
    if(deleteVisible.value == false){
        deleteVisible.value = true
    }else{
        deleteVisible.value = false
    }
}



</script>

<template>
    <button  @click="buttonClick" class="edit">EDIT</button>
    <form v-if="editField == true" @submit.prevent="updateCategorie">
        <input type="text" v-model="newName">
        <button type="submit" class="confirm">Confirm</button> 
    </form>

    <button v-if="!deleteVisible" @click="deleteCat" class="delete">DELETE</button>
</template>

<style scoped>
    .edit{
    padding: 5px 60px;
    border: var(--lightBlue) 1px solid;
    background: none;
    color: var(--lightBlue);
    font-weight: bold;
    border-radius: 20px;
    transition: 0.2s;
}

.confirm{
    max-width: 50%;
    text-align: center;
    padding: 5px 10px;
    background: none;
    color: var(--lightBlue);
    font-weight: bold;
    border: var(--lightBlue) solid 1px;
    border-radius: 20px;
    transition: 0.2s;
}

.confirm:hover{
    color: black;
    background-color: var(--lightBlue);
    cursor: pointer;
}

.edit:hover{
    color: var(--textSec);
    border: orange 1px solid;
    background-color: orange;
    cursor: pointer;
}

input{
    border: var(--lightBlue) solid 1px;
    border-radius: 20px;
    outline: none;
    font-size: 1.2rem;
    text-align: center;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
}

.delete{
    padding: 5px 50px;
    border: var(--lightBlue) 1px solid;
    background: none;
    color: var(--lightBlue);
    font-weight: bold;
    border-radius: 20px;
    transition: 0.2s;
}

.delete:hover{
    color: var(--textSec);
    border: red 1px solid;
    background-color: red;
    cursor: pointer;
}
</style>
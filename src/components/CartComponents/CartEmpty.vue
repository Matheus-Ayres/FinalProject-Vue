<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="empty">
        <img src="@/assets/Empty.svg">
        <h1>
            Your Cart is Empty :( <br><br> Continue shopping on the 
            <RouterLink class="link" to="/">
                Catalog
            </RouterLink>
        </h1>
        
    </div>
</template>

<style scoped>
    .empty{
        background-color: black;
        margin: 50px;
        padding: 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        border-radius: 10px;
    }

    .link{
        color: white;
    }

    .link:hover{
        color: var(--blue1);
    }

    img{
        width: 90%;
    }

    h1{
        color: white;
        font-family: "openSans";
    }
</style>
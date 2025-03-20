<script setup>
import InputsComponent from '@/components/InputsComponent.vue';
import NavHeader from '@/components/NavHeader.vue';


</script>

<template>
<div class="body">
        <main>
            <nav>
                <p class="Techplace">
                    Techplace
                </p>
            </nav>
            <div class="pg">
                <img src="/src/assets/login.svg" class="loginIMG">
            
                <div class="loginCard">
                    <h1 class="loginCardTitle">
                        Login
                    </h1>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
    .body{
        background-color: black;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .loginCard{
        
    }
</style>
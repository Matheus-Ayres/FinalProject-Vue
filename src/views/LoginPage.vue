<script setup>
import NavHeader from '@/components/NavHeader.vue';


</script>

<template>
<div class="body">
    <NavHeader/>
        <main class="loginCard">
            <div>
                <p>
                    Login
                </p>
            </div>
        </main>
    </div>
</template>

<style scoped>
    .body{
        background: rgb(245,240,249);
        background: linear-gradient(166deg, white 0%, var(--purp2) 25%, rgba(27,21,12,1) 100%);   background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100vh;
    }
</style>
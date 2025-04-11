<script setup>

import NavHeader from '@/components/NavHeader.vue';
import Categories from '../components/CategoriesComponents/CategoriesModerator.vue';


</script>

<template>
    <NavHeader/>
    <div class="categoriesPosition">
        <h1>
            Category 
        </h1>
        <div>
            <Categories/>
        </div>
    </div>
</template>

<style scoped>
    .categoriesPosition{
        display: flex;
        flex-direction: column;
        margin: 50px 60px;
        gap: 20px; 
    }

    h1{
        color: var(--textSec);
        font-family: "openSans";
    }
</style>
<script setup>

import NavHeader from '@/components/NavHeader.vue';
import Categories from '../components/CategoriesComponents/CategoriesModerator.vue';


</script>

<template>
    <NavHeader/>
    <Categories class="categoriesPosition"/>
</template>

<style scoped>
    .categoriesPosition{
        display: flex;
        flex-direction: column;
        margin: 0px 60px;
        gap: 20px;
        
    }
</style>
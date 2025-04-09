<script setup>
import Categories from '../components/CategoriesComponents/CategoriesModerator.vue';
import NavHeader from '../components/NavHeader.vue';
import NewProduct from '../components/ProductsComponents/NewProduct.vue';


</script>

<template>
    <NavHeader/>
    <NewProduct/>
    <div class="categoriesPosition">
        <h1>
            Category 
        </h1>
        <div>
            <Categories />
        </div>
    </div>
</template>

<style scoped>
    .categoriesPosition{
        display: flex;
        gap: 20px;
        margin: 0 60px;
        flex-direction: column;
    }

    h1{
        color: var(--textSec);
        font-family: "openSans";
    }
</style>
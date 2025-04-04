<script setup>
import Categories from '@/components/CategoriesComponents/Categories.vue';
import CreateCategorie from '@/components/CategoriesComponents/CreateCategories.vue';
import NavHeader from '@/components/NavHeader.vue';


</script>

<template>
    <NavHeader/>
    <main>
        <div class="topArea"> 
            <CreateCategorie/> 
        </div>
        <div class="catPosition">
            <Categories/>
        </div>
    </main>
</template>

<style scoped>
.catPosition{
    margin: 0 60px;
}

.topArea{
    display: flex;
    align-items: center;
}
</style>
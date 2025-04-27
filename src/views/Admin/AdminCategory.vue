<script setup>
import Categories from '../../components/CategoriesComponents/CategoriesCardsAdmin.vue';
import CreateCategorie from '../../components/CategoriesComponents/CreateCategories.vue';
import NavHeader from '@/components/NavHeader.vue';


</script>

<template>

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
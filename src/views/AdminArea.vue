<script setup>
import Categories from '@/components/CategoriesComponents/Categories.vue';
import CreateCategorie from '@/components/CategoriesComponents/CreateCategories.vue';
import EditCategory from '@/components/CategoriesComponents/EditCategory.vue';
import NavHeader from '@/components/NavHeader.vue';


</script>

<template>
    <NavHeader/>
    <main>
        <div class="topArea"> 
            <CreateCategorie/>
            <EditCategory/>
        </div>
        <div class="catPosition">
            <Categories />
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
<script setup>

import NavHeader from '@/components/NavHeader.vue';
import AdminCategory from './Admin/AdminCategory.vue';


</script>

<template>
    <NavHeader/>
    <div class="nav">
        <RouterLink to="/AdminArea/Categories" class="router">
            <h1>
                Categories
            </h1>
        </RouterLink>
        <RouterLink to="/AdminArea/Coupons" class="router">
            <h1>
                Coupons
            </h1>
        </RouterLink>
    </div>
    <main>
        <AdminCategory/>
    </main>
</template>

<style scoped>
.catPosition{
    margin: 0 60px;
}

h1{
    margin-left: 60px;
}

.router{
    text-decoration: none;
    font-family: "openSans";
    color: white;
}

.nav{
    
    display: flex;
    gap: 20px;
}

.topArea{
    display: flex;
    align-items: center;
}
</style>
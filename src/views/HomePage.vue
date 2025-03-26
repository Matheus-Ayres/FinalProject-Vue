<script setup>
import CatalogHeader from '@/components/CatalogHeader.vue';
import NavHeader from '@/components/NavHeader.vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore()

</script>

<template>
    <NavHeader/>
    <CatalogHeader/>

    
</template>

<style scoped>

</style>
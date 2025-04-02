<script setup>
import CreateCategorie from '@/components/CreateCategorie.vue';
import NavHeader from '@/components/NavHeader.vue';
import { getCategories } from '@/services/http';
import { onMounted, ref } from 'vue';

const categories = ref({})


async function myCategories(){
    const result = await getCategories();
    categories.value = result
    console.log(categories.value)
}

onMounted(() => {
    myCategories()
})

</script>

<template>
    <NavHeader/>
    <CreateCategorie/>
    <div v-for="cat in categories" :key="cat.id">
        <p>
            {{  categories[0].name}}
        </p>
    </div>
</template>

<style scoped>
p{
    font-family: "openSans";
    color: white;
    font-size: 1.2rem;
}
</style>
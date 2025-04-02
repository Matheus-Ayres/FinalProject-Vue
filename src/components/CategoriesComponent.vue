<script setup>
defineProps({
    categorieName: String,
    categoriePath: String
})


</script>

<template>
    <div class="orderPages">
            <p>
                {{ categorieName }}
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

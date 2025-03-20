<script setup>

defineProps({
    LabelName: String,
})
</script>

<template>
    <div class="inputs">
        <label>
            {{ LabelName }}
        </label>
        <input type="text" >
    </div>
</template>

<style scoped>

</style>
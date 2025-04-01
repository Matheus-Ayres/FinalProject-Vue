<script setup>
</script>

<template>
    <main class="editWindow">
        <div class="file-wrapper">
            <input type="file" class="file" />
        </div>
    </main>
</template>

<style scoped>
.editWindow {
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.file-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.file {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0; 
    cursor: pointer;
}

.file-wrapper::after {
    content: "Select an archive";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    color: var(--purple);
    pointer-events: none;
    font-family: "openSans", "Roboto";
    font-weight: bold;
}
</style>

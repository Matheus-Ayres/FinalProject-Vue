<script setup>

</script>

<template>
    <main>
        <div class="newCategorie">
            <label>Edit category:</label>
            <select></select>
            
        </div>
    </main>
</template>

<style scoped>
select{
    background-color: var(--dark);
    border: var(--gray) solid 2px;
    border-radius: 5px;
    max-width: 100%;
    height: 4vh;
    outline: none;
    color: var(--textSec);
    font-size: 1.2rem;
    
}

p, label{
    font-family: "openSans";
    color: white;
    font-size: 1.2rem;
}

.newCategorie{
    display: flex;
    flex-direction: column;
    width: 20vw;
    gap: 10px;
}
</style>
<script setup>

</script>

<template>
    <nav>
        <RouterLink to="/" class="Marketplace">
            Techplace
        </RouterLink>
        <div>
            <input type="text" placeholder="Search" class="search">
        </div>
        <div>
            <img src="../assets/userIcon.png" class="userIcon">
        </div>
    </nav>
</template>

<style scoped>
    .Marketplace{
        color: white;
        font-family: titles;
        text-shadow: 3px 2px 0 black;
        font-size: 2rem;
        padding: 8px;
        text-decoration: none;
    }
    
    .Marketplace:hover{
        background-color: var(--purp2);
        border-radius: 15px;
        transition: 0.2s;
    }
</style>
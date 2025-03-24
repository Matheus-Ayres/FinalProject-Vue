<script setup>

</script>

<template>
        <div class="header">
            <div>
                <input type="text" placeholder="Search items, users" class="search">
            </div>
            <div>
                <p class="filter">
                    Sort By
                </p>
            </div>
        </div>
</template>

<style scoped>
    .header{
        margin-top: 60px;
        display: flex;
        align-items: center;
        gap: 20px;
    }


    .search{
        width: 60vw;
        font-size: 1rem;
        background-image: url('/src/assets/icons/lupa.png');
        margin-left: 40px;
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 10px;
        padding: 5px 5px 5px 40px;
        transition: 0.4s ease-in-out;
        border: var(--gray) solid 2px;
        border-radius: 20px;
        color: var(--textSec);
        background-color: var(--dark);
        height: 40px;
        font-family: "roboto";
    }

.search:focus{
outline: none;
}

.filter{
    color: white;
    font-family: "openSans";
    background-color: var(--gray);
    max-height: 40px;
    width: 10vw;
    padding: 10px 40px;
    border-radius: 20px ;
    font-size: 1.5rem;
}
</style>
<script setup>

</script>

<template>
    <div class="orderPages">
        <RouterLink to="/NFTsPage" class="navPagesTitles">
            <p>
                NFTs
            </p>       
        </RouterLink>
        <RouterLink to="/GameAssetsPage" class="navPagesTitles">
            <p>
                Game Assets
            </p>
        </RouterLink>
        <RouterLink to="/HQsPage" class="navPagesTitles">
            <p>
                HQs
            </p> 
        </RouterLink>
        <RouterLink to="/TCGCardsPage" class="navPagesTitles">
            <p>
                TCG Cards
            </p>       
        </RouterLink>
    </div>
</template>

<style scoped>
    .navPagesTitles {
        color: white;
        font-family: "openSans";
        font-size: 1.2rem;
        text-decoration: none;
        transition: 0.4s;
    }

    .orderPages {
        display: flex;
        gap: 30px;
    }

    .router-link-active {
        color: var(--lightGray);
        transform: scale(1.1);
    }

    .navPagesTitles:hover{
        color: var(--lightGray);
        transform: scale(1.1);
    }
</style>

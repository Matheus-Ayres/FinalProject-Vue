<script setup>
import NavHeader from '@/components/NavHeader.vue';
import { useAuthStore } from '@/stores/auth';

const user = useAuthStore()
</script>

<template>
    <NavHeader />
    <div class="profileTop">
        <div class="userInfos">
            <div class="Image">
                <img class="profileImage" src="/src/assets/icons/testpfp.jpeg" />
                <div class="overlay"></div> <!-- Este será o overlay vermelho -->
            </div>
            <p class="usernameStyle">{{ user.user.name }}</p>
        </div>
    </div>
</template>

<style scoped>
.profileTop {
    display: flex;
    margin: 50px;
}

.userInfos {
    display: flex;
    gap: 40px;
}

.profileImage {
    width: 12vw;
    border-radius: 20px;
}

.Image {
    position: relative; /* Necessário para o overlay ficar sobre a imagem */
    border: var(--lightPurple) solid 2px;
    border-radius: 20px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0);
    opacity: 0; 
    transition: opacity 0.3s ease;
    border-radius: 20px;
}

.Image:hover .overlay {
    opacity: 0.5;
}

.usernameStyle {
    font-family: "openSans";
    color: white;
    font-weight: bold;
}
</style>

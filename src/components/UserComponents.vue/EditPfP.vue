<script setup>

</script>

<template>
    <div class="modal-open">
        <div class="modal">
            <div class="closePosition">
                <img @click="closeModal" src="@/assets/icons/icons8-excluir.svg" class="close">
            </div>
            <main>
                <section class="productInfos">
                    <form @submit.prevent="changePFP">
                        <div class="formProduct">
                            <label for="profile-picture">Select Profile Picture:</label>
                            <div class="file-input-wrapper">
                                <input id="profile-picture" type="file" accept="image/*" class="file-input">
                                <label for="profile-picture" class="file-label">Choose a file</label>
                            </div>
                            <button class="submit">Change Picture</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    </div>
</template>

<style scoped>
label{
    font-family: "openSans";
    font-size: 1.2rem;
    font-weight: bold;
}


.formProduct{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.modal-open {
    position: fixed;
    inset: 0;
    z-index: 99;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 80%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.closePosition {
    display: flex;
    justify-content: flex-end;
}

.close {
    width: 30px;
}

.close:hover {
    cursor: pointer;
}

.file-input-wrapper {
    position: relative;
    width: 100%;
    height: 50px;
}

.file-input {
    display: none; /* Esconde o input original */
}

.file-label {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--purple);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    font-family: "openSans";
}

.file-label:hover {
    background-color: var(--purpleDark);
}

.submit {
    font-family: "Roboto", "openSans";
    font-weight: bold;
    color: white;
    padding: 10px 50px;
    font-size: 1.2rem;
    background-image: linear-gradient(to right, #628EFF, #8740CD, #580475);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    max-width: 100%;
}

.submit:hover {
    background-color: #3e2c8d;
}
</style>

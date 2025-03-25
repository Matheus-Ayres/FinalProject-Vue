import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const token = ref(null)
    const user = ref({})
    const isAuthenticated = ref(false)

    function logout(){
        token.value = null
        user.value = {}
        isAuthenticated.value = false
    }

    function saveUser(result){
        user.value = result.user
        isAuthenticated.value = true
        token.value = result.token
    }

    return {token, user, isAuthenticated, logout, saveUser}
}, 
    {persist: true}
) 
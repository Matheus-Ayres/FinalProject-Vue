import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const API = axios.create({
    baseURL: 'http://35.196.79.227:8000/'
})

// Interceptor para injetar o token automaticamente
API.interceptors.request.use((config) => {
    const authStore = useAuthStore()

    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`
    }

    return config
})

// ========== USER ==========
export async function login(payload){
    const response = await API.post('login', payload)
    return response
}

export async function register(payload) {
    const response = await API.post('register', payload)
    return response
}

export async function registerModerator(payload) {
    const response = await API.post('users/create-moderator', payload)
    return response
}

export async function getUser() {
    const response = await API.get('users/me')
    return response
}

export async function changeUserInfos(payload) {
    const response = await API.put('users/me', payload)
    return response
}

export async function deleteUser() {
    const response = await API.delete('users/me')
    return response
}

export async function updatePFP(formData) {
    const response = await API.put('users/image', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response
}

// ========== CATEGORIES ==========
export async function registerCategories(payload) {
    const response = await API.post('categories/', payload, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response
}

export async function getCategories() {
    const authStore = useAuthStore()
    const response = await API.get(`categories/user/${8}`)
    return response.data
}

export async function deleteCategorie(idCat) {
    const response = await API.delete(`categories/${idCat}`)
    return response.data
}

export async function updateCategories(idCat, payload) {
    const response = await API.put(`categories/${idCat}`, payload)
    return response.data
}

// ========== PRODUCTS ==========
export async function createProducts(formData) {
    const response = await API.post('products/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response
}

export async function getProducts(idCat) {
    const response = await API.get(`products/category/${idCat}`)
    return response.data
}

export async function getAllProducts() {
    const authStore = useAuthStore()
    const response = await API.get(`products/user/${8}`)
    return response.data
}

export async function getProduct(idProd) {
    const response = await API.get(`products/${idProd}`)
    return response.data
}

export async function updatePoduct(idProd, payload) {
    const response = await API.put(`products/${idProd}`, payload)
    return response.data
}

export async function updateStockPoduct(idProd, payload) {
    const response = await API.put(`products/${idProd}/stock`, payload)
    return response.data
}

export async function deleteProducts(idProd) {
    const response = await API.delete(`products/${idProd}`)
    return response.data
}

// ========== ADDRESSES ==========

export async function getAddresses() {
    const response = await API.get('addresses/')
    return response.data
}

export async function getAddressByID(idAddress) {
    const response = await API.get(`addresses/${idAddress}`)
    return response.data
}

export async function createAddress(payload) {
    const response = await API.post('addresses/', payload)
    return response.data
}

export async function updateAddress(idAddress, payload) {
    const response = await API.put(`addresses/${idAddress}`, payload)
    return response.data
}

export async function deleteAddressess(idAddress) {
    const response = await API.delete(`addresses/${idAddress}`)
    return response.data
}
import axios from 'axios'

const API = axios.create({
    baseURL: 'http://35.196.79.227:8000/'
})

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4Iiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzQ0MzQ1OTc0fQ.d1rTawg9MFrj6dBr1aVViZr4FzjNIc6ajKaUGlO0TSs'

export async function login(payload){
        const response = await API.post('login', payload)
        return response
}

export async function register(payload) {
        const response = await API.post('register', payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }) 
    return response
}

export async function registerModerator(payload) {
    const response = await API.post('users/create-moderator', payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }) 
return response
}

export async function registerCategories(payload) {
    const response = await API.post('categories/', payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'multipart/form-data',
            'Content-Type': 'multipart/form-data'
        },
    }) 
return response
}

export async function getCategories() {
    const response = await API.get(`categories/user/${8}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }) 
return response.data
}

export async function deleteCategorie(idCat) {
    const response = await API.delete(`categories/${idCat}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }) 
return response.data
}

export async function updateCategories(idCat, payload) {
    const response = await API.put(`categories/${idCat}`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }) 
return response.data
}

export async function createProducts(formData) {
    const response = await API.post('products/', formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'multipart/form-data',
        },
    }) 
return response
}

export async function getProducts(idCat) {
    const response = await API.get(`products/category/${idCat}`,{
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'multipart/form-data',
            'Content-Type': 'multipart/form-data'
        },
    }) 
return response.data
}
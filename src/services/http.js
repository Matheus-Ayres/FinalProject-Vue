import axios from 'axios'

const API = axios.create({
    baseURL: 'http://35.196.79.227:8000/'
})

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4Iiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzQzNDkyMzI4fQ.H_gFKz4fQdeOkCuqQxDmn_Q1DkPH4YusB_CuB6xNY_g'

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
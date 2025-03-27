import axios from 'axios'

axios.defaults.withCredentials = true

const API = axios.create({
    baseURL: 'http://34.138.111.33:8000/'
})

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4Iiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzQzMTIyMjA5fQ.xRBXTe5z5olezy1j_YJCF0CT8VY1BIeoye4Uy04LnUs'

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
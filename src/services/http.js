import axios from 'axios'

axios.defaults.withCredentials = true

const API = axios.create({
    baseURL: 'http://34.138.111.33:8000/'
})

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4Iiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzQzMDIzOTMxfQ.hY52RQ2AdBDtifMOpdUCYpUe0BH3M3NjYX1gH08sxn8'

export async function login(payload){
        const response = await API.post('login', payload)
        return response
}

export async function register(payload) {
    try{
        const response = await API.post('register', payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }) 
        return response.data
    }catch(error){
        console.log(error.response.data)
    }
}
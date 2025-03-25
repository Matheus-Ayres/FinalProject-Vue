import axios from 'axios'

axios.defaults.withCredentials = true

const API = axios.create({
    baseURL: 'http://34.138.111.33:8000/'
})

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4Iiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzQyOTM3MzgwfQ.LQf_bPvT1p_Iq9BupDYc7GOfzJJ-ZFPfI_uV46-o0nY'

export async function login(payload){
    try{
        const response = await API.post('login', payload)
        return response
    }catch(error){
        console.log(error.response.data)
    }
}

export async function register(payload) {
    try{
        const response = await API.post('register', payload , {
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
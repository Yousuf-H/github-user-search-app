import axios from 'axios'

const BASE_URL =  'https://api.github.com/users/' 

export const publicRequest = axios.create({
  baseURL: BASE_URL
})
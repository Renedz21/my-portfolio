import { QueryClient, QueryCache } from '@tanstack/react-query'
import axios from 'axios'

const query = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            //6 horas en staleTime
            staleTime: 1000 * 60 * 60 * 6,
            //1 dia en cacheTime
            cacheTime: 1000 * 60 * 60 * 24,
        }
    }
})

const api = axios.create({
    baseURL: 'https://my-portfolio-be.onrender.com/api',
    // baseURL: 'http://localhost:3000/api',
})

export { query, api }
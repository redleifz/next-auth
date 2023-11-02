import axios from 'axios'
import { getSession } from 'next-auth/react'

const baseURL = process.env.NEXT_PUBLIC_ENDPOINT_1 + 'api/'
const axiosService = axios.create({
  baseURL,
})

axiosService.interceptors.request.use(
  async (config) => {
    const session = await getSession()
    console.log(session)
   
    if (session) {
      config.headers['Authorization'] = `Bearer ${session.user.accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosService

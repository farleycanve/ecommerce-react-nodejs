import axios from 'axios'
import api from '../UrlConfig'

const axiosInstance = axios.create({
    baseUrl: api
})
export default axiosInstance;
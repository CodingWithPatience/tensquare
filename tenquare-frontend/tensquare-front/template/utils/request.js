import axios from 'axios'
import Auth from '@/utils/auth'
const service = axios.create({
    baseURL: 'http://192.168.254.128:9011/',
    timeout: 30000,
    headers: {'Access-Control-Aollow-Origin':'*', 'Authorization': "mytoken "+Auth.getUser().token}
})
export default service
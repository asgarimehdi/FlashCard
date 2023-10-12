
import axios from 'axios'
axios.defaults.withCredentials = true;
const api=axios.create({
    baseURL:"http://192.168.165.4"
})


export default api;
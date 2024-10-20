import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"https://amazon-api-deploy-0i1o.onrender.com"
})

export {axiosInstance}



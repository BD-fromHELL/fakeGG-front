import axios from "axios"

const client = axios.create({
    baseURL: 'http://ec2-54-180-145-192.ap-northeast-2.compute.amazonaws.com:9000',
})

client.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("X-AUTH-TOKEN");

        if (token) {
            config.headers["X-AUTH-TOKEN"] = token;
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    }
)

export default client
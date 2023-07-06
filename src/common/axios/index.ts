import axios from "axios"

const client = axios.create({
    baseURL: 'http://localhost:9000',
})

client.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("X-AUTH-TOKEN");

        // 토큰이 있으면 Authorization 헤더에 추가
        if (token) {
            config.headers!["X-AUTH-TOKEN"] = token;
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    }
)

export default client
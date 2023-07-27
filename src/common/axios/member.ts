import { AxiosResponse } from "axios"
import client from "."
import { Login, LoginResponse, SignUp } from "../type"


const MEMBER_API = {
    login(user: Login): Promise<AxiosResponse<LoginResponse, void>> {
        return client.post('/auth/login', user)
    },
    signup(user: SignUp) {
        return client.post('/accounts/signup', user)
    },
    kakaologin() {
        return client.get('oauth2/authorization/kakao')
    }
}

export default MEMBER_API;
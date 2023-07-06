import client from "."
import { Login, SignUp } from "../type"


const MEMBER_API = {
    login(user: Login) {
        return client.post('/login', user)
    },
    signup(user: SignUp) {
        return client.post('/signup', user)
    },
}

export default MEMBER_API;
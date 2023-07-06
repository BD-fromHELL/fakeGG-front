interface ISummoner {
    accountId: string
    profileIconId: number
    name: string
    id: string
    puuid: string
    summonerLevel: number
}

interface Login {
    email: string
    password: string
}

interface SignUp {
    username: string
    password: string
}

export {
    ISummoner,
    Login,
    SignUp
}
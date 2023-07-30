interface Login {
    email: string
    password: string
}

interface SignUp {
    email: string
    name: string
    password: string
    birth: string
}

interface LoginResponse {
    accessToken: string
    refreshToken: string
}

interface ISummoner {
    accountId: string
    profileIconId: number
    name: string
    id: string
    puuid: string
    summonerLevel: number
}
interface IMatch {
    gameType: string
    gameCreation: number
    gameDuration: number
    gameEndTimestamp: number
    isTeamWin: boolean
    hero: IParticipant
    teams: ITeam[]
    participantsA: IParticipant[]
    participantsB: IParticipant[]
}

interface IParticipant {
    championName: string
    championLevel: number
    summonerName: string
    rankTier: string
    summonerLevel: number
    summoner1: string
    summoner2: string
    rune1: number
    rune2: number
    kill: number
    death: number
    assist: number
    kda: number
    killParticipation: number
    damageDealt: number
    damageTaken: number
    detectorWardsPlaced: number
    wardsPlaced: number
    wardsKilled: number
    cs: number
    csPerMinute: number
    teamId: number
    item0: number
    item1: number
    item2: number
    item3: number
    item4: number
    item5: number
    item6: number
}

interface ITeam {
    teamId: number
    win: boolean
    towerKills: number
    inhibitorKills: number
    baronKills: number
    dragonKills: number
    totalKills: number
    totalGolds: number
}


interface Article {
    id: number
    title: string
    contents: string
    writer: Writer
    visited: number
    timestamp: number
    comments: Comment[]
}

interface PostArticle {
    writer: string
    title: string
    contents: string
}

interface Comment {
    writer: string
    contents: string
    parentComment: Comment
    childComments: Comment[]
    likes: number
    dislikes: number
}

interface PostComment {
    memberName: string
    contents: string
}

interface ArticleResponseDto {
    page: Article[]
    nowPage: number
    startPage: number
    endPage: number
}

interface Writer {
    memberEmail: string
    memberName: string
    memberPassword: string
    memberBirth: number
}

interface Entries {
    queueType: string
    tier: string
    rank: string
    summonerName: string
    leaguePoints: number
    wins: number
    losses: number
}

interface ISummonerInfo {
    profileIconId: number;
    summonerLevel: number
    queueType: string
    tier: string
    rank: string
    summonerName: string
    leaguePoints: number
    wins: number
    losses: number
    winRate: number
}

export {
    LoginResponse,
    ISummoner,
    IMatch,
    IParticipant,
    ITeam,
    Login,
    SignUp,
    Article,
    PostArticle,
    Comment,
    PostComment,
    ArticleResponseDto,
    Writer,
    Entries,
    ISummonerInfo
}
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

interface IMatch {
    gameType: string
    gameCreation: number
    gameDuration: number
    gameEndTimestamp: number
    isTeamWin: boolean
    hero: IParticipant
    teams: ITeam[]
    participants: IParticipant[]
}

interface IParticipant {
    championId: number
    championLevel: number
    summonerName: string
    rankTier: string
    summonerLevel: number
    summoner1Id: number
    summoner2Id: number
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
    ISummoner,
    IMatch,
    IParticipant,
    ITeam,
    Login,
    SignUp,
    Article,
    ArticleResponseDto,
    Writer,
    Entries,
    ISummonerInfo
}
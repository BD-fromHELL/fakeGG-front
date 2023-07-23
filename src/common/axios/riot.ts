import { AxiosResponse } from "axios";
import client from "./index";
import { IMatch, ISummonerInfo } from "../type";

const RIOT_API = {
    getMatchesByName(summonerName: string): Promise<AxiosResponse<IMatch[], void>> {
        return client.get(`riotApi/summoner/${summonerName}/matches}`);

    },
    getSummonerInfo(summonerName: string): Promise<AxiosResponse<ISummonerInfo, void>> {
        return client.get(`riotApi/summoner/${summonerName}/info`);
    }

}

export default RIOT_API;

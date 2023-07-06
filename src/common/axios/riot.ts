import { AxiosResponse } from "axios";
import client from "./index";
import { ISummoner } from "../type";

const RIOT_API = {
    getSummonerByName(summonerName: string): Promise<AxiosResponse<ISummoner, void>> {
        return client.get(`riotApi/summoner/${summonerName}`);
    }

}

export default RIOT_API;

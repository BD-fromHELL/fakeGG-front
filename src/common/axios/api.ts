import { AxiosResponse } from "axios";
import client from "./index";
import { ISummoner } from "../type";

const API = {
    getSummonerByName(summonerName: string): Promise<AxiosResponse<ISummoner, void>> {
        return client.get(`riotApi/summoner/${summonerName}`);
    }
}

export default API;

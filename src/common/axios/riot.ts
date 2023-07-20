import { AxiosResponse } from "axios";
import client from "./index";
import { IMatch } from "../type";

const RIOT_API = {
    getMatchesByName(summonerName: string): Promise<AxiosResponse<IMatch[], void>> {
        return client.get(`riotApi/summoner/${summonerName}/matches}`);

    }

}

export default RIOT_API;

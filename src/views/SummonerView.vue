<template>
    <div class="summoner-contanier">
        <section class="profile-box">
            <img v-if="summonerInfo"
                :src="`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/profileicon/${summonerInfo.profileIconId}.png`"
                alt="profile image">
            <div class="profile-info">
                <p class="profile-name">{{ summonerInfo?.summonerName }}</p>
                <div class="button-box">
                    <button class="button-refresh">전적 갱신</button>
                </div>
            </div>
        </section>
        <section class="content-box">
            <div class="content-left">
                <div class="rank-box">
                    <div class="header">{{ summonerInfo?.queueType }}</div>
                    <div class="content">
                        <div class="" style="position: relative;">
                            <img :src="`https://opgg-static.akamaized.net/images/medals_new/${summonerInfo?.rank}.png?image=q_auto,f_webp,w_144&amp;v=1687932539766`"
                                width="72" alt="medal">
                        </div>
                        <div class="info">
                            <div class="tier"> {{ summonerInfo?.tier }}</div>
                            <div class="lp">{{ summonerInfo?.leaguePoints }} LP</div>
                        </div>
                        <div class="win-lose-container">
                            <div class="win-lose">{{ summonerInfo?.wins }}승 {{ summonerInfo?.losses }}패</div>
                            <div class="ratio"> 승률 {{ summonerInfo?.winRate.toFixed(0) }} %</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right">
                <!-- <div class="stat-box">

                </div> -->
                <div class="match-box">
                    <div v-for="(match, index) in matches" :key="index">
                        <div :class="['match', { 'win': match.isTeamWin, 'lose': !match.isTeamWin }]">
                            <div class="match-info1">
                                <p class="match-type">
                                    협곡
                                </p>
                                <p class="match-result">
                                    {{ matchDay(match.gameEndTimestamp) }}
                                </p>
                                <p class="match-result">
                                    {{ match.isTeamWin ? '승리' : '패배' }}
                                </p>
                                <p class="match-time">
                                    {{ matchTime(match.gameDuration) }}
                                </p>
                            </div>
                            <div class="match-info2">
                                <div class="info-box">
                                    <div class="champion-box">
                                        <img class="champion"
                                            :src="`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${match?.hero?.championName}.png`"
                                            alt="chapion_icon">
                                    </div>
                                    <div class="spell-box">
                                        <img class="spell"
                                            :src="`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${match?.hero?.summoner1}`">
                                        <img class="spell"
                                            :src="`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${match?.hero?.summoner2}`">
                                    </div>
                                    <div class="rune-box">
                                        <img class="rune"
                                            :src="`https://ddragon.leagueoflegends.com/cdn/img/${match?.hero?.rune1}`">
                                        <img class="rune"
                                            :src="`https://ddragon.leagueoflegends.com/cdn/img/${match?.hero?.rune2}`">
                                    </div>
                                    <div class="kda-box">
                                        <p class="kda">
                                            <span class="k">{{ match?.hero?.kill }}</span>
                                            /
                                            <span class="d">{{ match?.hero?.death }}</span>
                                            /
                                            <span class="a">{{ match?.hero?.assist }}</span>
                                        </p>
                                        <p class="ratio">{{ match?.hero?.kda.toFixed(2) }} : 1 평점</p>
                                    </div>
                                </div>
                                <div>
                                    <ul class="items-box">
                                        <li class="items">
                                            <img :src="`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${match?.hero?.item0}.png`"
                                                onerror="this.style.display='none'">
                                        </li>
                                        <li class="items">
                                            <img :src="`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${match?.hero?.item1}.png`"
                                                onerror="this.style.display='none'">
                                        </li>
                                        <li class="items">
                                            <img :src="`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${match?.hero?.item2}.png`"
                                                onerror="this.style.display='none'">
                                        </li>
                                        <li class="items">
                                            <img :src="`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${match?.hero?.item3}.png`"
                                                onerror="this.style.display='none'">
                                        </li>
                                        <li class="items">
                                            <img :src="`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${match?.hero?.item4}.png`"
                                                onerror="this.style.display='none'">
                                        </li>
                                        <li class="items">
                                            <img :src="`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${match?.hero?.item5}.png`"
                                                onerror="this.style.display='none'">
                                        </li>
                                        <li class="items">
                                            <img :src="`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${match?.hero?.item6}.png`"
                                                onerror="this.style.display='none'">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="match-info3">
                                <div class="detail-record">제어 와드 {{ match?.hero?.detectorWardsPlaced }}</div>
                                <div class="detail-record">CS {{ match?.hero?.cs }} ({{ match?.hero?.csPerMinute.toFixed(1)
                                }})</div>
                            </div>
                            <div class="match-info4">
                                <div class="participants-box">
                                    <div v-for="(participant, index) in match.participantsA" :key="index">

                                        <div class="participants">
                                            <img class="small-champion"
                                                :src="`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${participant?.championName}.png`"
                                                alt="small-chapion_icon">
                                            {{ participant.summonerName }}
                                        </div>
                                    </div>
                                </div>
                                <div class="participants-box">
                                    <div v-for="(participant, index) in match.participantsB" :key="index">

                                        <div class="participants">
                                            <img class="small-champion"
                                                :src="`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${participant?.championName}.png`"
                                                alt="small-chapion_icon">
                                            {{ participant.summonerName }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import RIOT_API from '@/common/axios/riot';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { IMatch, ISummonerInfo } from '@/common/type/index'

const route = useRoute();
const summonerName = computed(() => route.params.summonerName);
const summonerInfo = ref<ISummonerInfo>();
const matches = ref<IMatch[]>([]);

const getSummonerInfo = async (summonerName: string) => {
    try {
        const { data } = await RIOT_API.getSummonerInfo(summonerName);
        summonerInfo.value = data;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const getMatches = async (summonerName: string) => {
    try {
        const { data } = await RIOT_API.getMatchesByName(summonerName);
        matches.value = data;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const matchDay = (gameEndTimestamp: number): string => {
    const currentTime = Date.now();
    const timeDiff = currentTime - gameEndTimestamp;

    if (timeDiff < 0) {
        return '';
    } else if (timeDiff < 60 * 60 * 1000) {
        const minutes = Math.floor(timeDiff / (60 * 1000));
        return `${minutes}분 전`;
    } else if (timeDiff < 24 * 60 * 60 * 1000) {
        const hours = Math.floor(timeDiff / (60 * 60 * 1000));
        return `${hours}시간 전`;
    } else {
        const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
        return `${days}일 전`;
    }
};

const matchTime = (gameDuration: number): string => {
    const minutes = Math.floor(gameDuration / 60);
    const seconds = gameDuration % 60;
    return `${minutes}분 ${seconds}초`;
}


onMounted(() => {
    console.log("mount!")
    if (typeof summonerName.value === 'string') {
        getMatches(summonerName.value)
        getSummonerInfo(summonerName.value)
        console.log("success~!~!")
    }

})
</script>

<style lang="scss" scoped>
// .summoner-contanier {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }
.profile-box {
    display: flex;
    padding: 1rem;
    background-color: #495057;
    margin-bottom: 1rem;
    width: 95%;

    img {
        width: 100px;
        height: 100px;
        vertical-align: middle;
        max-width: 100%;
        border-radius: 20px;
    }

    .profile-info {
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;
        justify-content: space-between;

        .profile-name {
            font-size: 1.75rem;
            font-weight: 700;
            color: #ffffff;
        }

        .button-box {
            .button-refresh {
                border: none;
                border-radius: 4px;
                padding: 0 10px;
                height: 40px;
                background-color: #f06595;
                color: #ffffff;
            }
        }
    }
}

.content-box {
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: 1rem;

    .content-left {
        width: 33%;

        .rank-box {
            border: none;
            border-radius: 4px;
            background-color: #495057;
            display: flex;
            flex-direction: column;

            .header {
                padding: 12px;
                color: #ffffff;
                border-bottom: 1px solid black;
                height: 18px;
            }

            .content {
                padding: 12px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                    background-color: #343a40;
                    border-radius: 36px;
                }

                .info {
                    .tier {
                        color: #ffffff;
                        font-size: 1.5rem;
                    }
                }

                .win-lose-container {
                    color: rgb(123, 122, 142);
                    font-size: 0.8rem;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
            }
        }
    }

    .content-right {
        width: 65%;

        .stat-box {
            width: 100%;
            height: 200px;
            background-color: #495057;
            border-radius: 4px;
            margin-bottom: 1rem;
        }

        .match-box {
            width: 100%;

            .match {
                box-sizing: border-box;
                width: 100%;
                height: 96px;
                border: none;
                border-radius: 4px;
                border-left: 12px solid #343a40;
                margin-bottom: 2px;
                background-color: #495057;
                color: #adb5bd;
                font-size: 0.8rem;
                padding: 0.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                line-height: 0.9rem;

                .match-info1 {
                    width: 20%;

                    .match-type {
                        font-weight: 700;
                    }

                    .match-day {
                        margin-bottom: 1rem;
                        color: #adb5bd;
                    }

                    .match-result {
                        font-weight: 600;
                        color: #adb5bd;
                    }

                    .match-time {
                        color: #adb5bd;
                    }
                }

                .match-info2 {
                    width: 32%;
                    display: flex;
                    flex-direction: column;

                    .info-box {
                        display: flex;

                        .champion-box {
                            margin-right: 1px;

                            .champion {
                                width: 44px;
                                height: 44px;
                                border-radius: 22px;
                            }
                        }

                        .spell-box {
                            margin-right: 1px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            .spell {
                                width: 22px;
                                height: 22px;
                                border-radius: 2px;
                            }
                        }

                        .rune-box {
                            margin-right: 1px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            .rune {
                                width: 22px;
                                height: 22px;
                                border-radius: 11px;
                            }
                        }

                        .kda-box {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;

                            .kda {
                                color: #ced4da;
                                font-size: 1.1rem;
                                font-weight: 500;

                                .k {
                                    color: #ffffff;
                                }

                                .d {
                                    color: #f03e3e;
                                }

                                .a {
                                    color: #ffffff;
                                }
                            }

                            .ratio {
                                color: #adb5bd;
                            }
                        }
                    }
                }

                .items-box {
                    display: flex;

                    .items {
                        width: 22px;
                        height: 22px;
                        background-color: #adb5bd;
                        border-radius: 2px;
                        margin: 2px;

                        img {
                            width: 22px;
                            height: 22px;
                        }
                    }
                }

                .match-info3 {
                    width: 18%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 2rem;

                    .detail-record {
                        color: #adb5bd;
                        font-size: 0.5rem;
                    }
                }

                .match-info4 {
                    width: 30%;
                    display: flex;

                    .participants-box {
                        width: 50%;

                        .participants {
                            .small-champion {
                                width: 11px;
                                height: 11px;
                                border-radius: 5px;

                            }

                            color: #adb5bd;
                            font-size: 0.8rem;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }

                }
            }

            .win {
                background-color: #135898;
                border-left: 12px solid #74c0fc;
                color: #74c0fc
            }

            .lose {
                background-color: #841d1dfe;
                border-left: 12px solid #fa5252;
                color: #fa5252;
            }
        }
    }
}
</style>
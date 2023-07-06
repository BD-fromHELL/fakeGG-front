<template>
    <div class="summoner-contanier">
        <section class="profile-box">
            <img src="https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon3463.jpg?image=q_auto,f_webp,w_auto&amp;v=1687932539766" alt="profile image">
            <div class="profile-info">
                <p class="profile-name">{{ summonerName }}</p>
                <div class="button-box">
                    <button class="button-refresh">전적 갱신</button>
                </div>
            </div>
        </section>
        <section class="content-box">
            <div class="content-left">
                <div class="rank-box">
                    <div class="header">솔로랭크</div>
                    <div class="content">
                        <div class="" style="position: relative;">
                            <img src="https://opgg-static.akamaized.net/images/medals_new/diamond.png?image=q_auto,f_webp,w_144&amp;v=1687932539766" width="72" alt="DIAMOND">
                        </div>
                        <div class="info">
                            <div class="tier">diamond 1</div>
                            <div class="lp">92 LP</div>
                        </div>
                        <div class="win-lose-container">
                            <div class="win-lose">544승 541패</div>
                            <div class="ratio">승률 50%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right">
                <div class="stat-box">

                </div>
                <div class="match-box">
                    <div class="match">
                        <div class="match-info1">
                            <p class="match-type">
                                솔랭
                            </p>
                            <p class="match-day">
                                2일전
                            </p>
                            <p class="match-result">
                                승리
                            </p>
                            <p class="match-time">
                                30분 00초
                            </p>
                        </div>
                        <div class="match-info2">
                            <div class="info-box">
                                <div class="champion-box">
                                    <img class="champion" src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ezreal.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&amp;v=1687932539766">
                                </div>
                                <div class="spell-box">
                                    <img class="spell" src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHeal.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    <img class="spell" src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHeal.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                </div>
                                <div class="run-box">
                                    <img class="run" src="https://opgg-static.akamaized.net/meta/images/lol/perk/8010.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">                       
                                    <img class="run" src="https://opgg-static.akamaized.net/meta/images/lol/perk/8010.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">                       
                                </div>
                                <div class="kda-box">
                                    <p class="kda">
                                        <span class="k">8</span>
                                        /
                                        <span class="d">1</span>
                                        /
                                        <span class="a">1</span>
                                    </p>
                                    <p class="ratio">9.0.0:1</p>
                                </div>
                            </div>
                            <div>
                                <ul class="items-box">
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">

                                    </li>
                                    <li class="items">

                                    </li>
                                    <li class="items">

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="match-participants">

                        </div>
                    </div>

                    <div class="match lose">
                        <div class="match-info1">
                            <p class="match-type">
                                솔랭
                            </p>
                            <p class="match-day">
                                2일전
                            </p>
                            <p class="match-result">
                                승리
                            </p>
                            <p class="match-time">
                                30분 00초
                            </p>
                        </div>
                        <div class="match-info2">
                            <div class="info-box">
                                <div class="champion-box">
                                    <img class="champion" src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ezreal.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&amp;v=1687932539766">
                                </div>
                                <div class="spell-box">
                                    <img class="spell" src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHeal.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    <img class="spell" src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHeal.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                </div>
                                <div class="run-box">
                                    <img class="run" src="https://opgg-static.akamaized.net/meta/images/lol/perk/8010.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">                       
                                    <img class="run" src="https://opgg-static.akamaized.net/meta/images/lol/perk/8010.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">                       
                                </div>
                                <div class="kda-box">
                                    <p class="kda">
                                        <span class="k">8</span>
                                        /
                                        <span class="d">1</span>
                                        /
                                        <span class="a">1</span>
                                    </p>
                                    <p class="ratio">9.0.0:1</p>
                                </div>
                            </div>
                            <div>
                                <ul class="items-box">
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">

                                    </li>
                                    <li class="items">

                                    </li>
                                    <li class="items">

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="match-participants">

                        </div>
                    </div>

                    <div class="match win">
                        <div class="match-info1">
                            <p class="match-type">
                                솔랭
                            </p>
                            <p class="match-day">
                                2일전
                            </p>
                            <p class="match-result">
                                승리
                            </p>
                            <p class="match-time">
                                30분 00초
                            </p>
                        </div>
                        <div class="match-info2">
                            <div class="info-box">
                                <div class="champion-box">
                                    <img class="champion" src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ezreal.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&amp;v=1687932539766">
                                </div>
                                <div class="spell-box">
                                    <img class="spell" src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHeal.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    <img class="spell" src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHeal.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                </div>
                                <div class="run-box">
                                    <img class="run" src="https://opgg-static.akamaized.net/meta/images/lol/perk/8010.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">                       
                                    <img class="run" src="https://opgg-static.akamaized.net/meta/images/lol/perk/8010.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">                       
                                </div>
                                <div class="kda-box">
                                    <p class="kda">
                                        <span class="k">8</span>
                                        /
                                        <span class="d">1</span>
                                        /
                                        <span class="a">1</span>
                                    </p>
                                    <p class="ratio">9.0.0:1</p>
                                </div>
                            </div>
                            <div>
                                <ul class="items-box">
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">
                                        <img src="https://opgg-static.akamaized.net/meta/images/lol/item/3078.png?image=q_auto,f_webp,w_44&amp;v=1687932539766">
                                    </li>
                                    <li class="items">

                                    </li>
                                    <li class="items">

                                    </li>
                                    <li class="items">

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="match-participants">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const summonerName = route.params.summonerName;

const summoner = ref({ 
})


onMounted(() => {
    console.log("mount!")
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
    padding: 1rem 0;
    background-color: #495057;
    margin-bottom: 1rem;
    width: 100%;
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
        .button-box{
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
    width: 1024px;
    .content-left{
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
                    .tier{
                        color: #ffffff;
                        font-size: 1.5rem;
                    }
                }
                .win-lose-container{
                    color: rgb(123, 122, 142);
                    font-size: 0.8rem;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
            }
        }
    }
    .content-right{
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
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    .info-box {
                        display: flex;
                        .champion-box{
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
                        .run-box {
                            margin-right: 1px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            .run {
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
                                    color: #ffffff
                                }
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
                .match-participants {
                    width: 30%;
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
                color :#fa5252;
            }
        }
    }
}
</style>
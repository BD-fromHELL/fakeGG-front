<template>
    <div class="login-card-layout">
        <div class="login-card">
            <div class="login-logo-container">
                <img class="login-logo" title="opgg" src="https://member.op.gg/img_opgglogo.1924961d.svg" alt="op.gg logo">
            </div>

            <div class="login-form">
                <h2>간편 로그인</h2>
                <button @click="kakao_login" class="kakao-login">
                    <img src="https://cdn.imweb.me/upload/S20210304872ba49a108a8/89a68d1e3674a.png" alt="kakao-logo">
                    Kakao로 로그인</button>
                <button class="facebook-login">
                    <img src="https://member.op.gg/icon_facebook_wh.6ab689d7.svg" class="facebook-button__img"
                        alt="facebook">
                    <span>Facebook으로 로그인</span>
                </button>
                <div class="login-or">OR</div>

                <h2 class="email-login-title">이메일 로그인</h2>
                <input class="input-box" v-model="emailInput" type="text" id="email-input" placeholder="이메일 주소">
                0
                <input class="input-box" v-model="passwordInput" type="text" id="email-input" placeholder="비밀번호">

                <div class="login-assist">
                    <div class="login-remember">
                        <input type="checkbox" id="checkbox" v-model="checked">
                        <div>로그인 상태 유지하기</div>
                    </div>
                </div>

                <button :disabled="!infoWritten" class="login-button" @click.prevent="signIn">로그인</button>

                <div class="go-signup-containter">
                    <div>FAKE.GG에 처음이세요?</div>
                    <router-link to="/signup" class="go-signup-button">회원가입하기</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import MEMBER_API from '@/common/axios/member';
import store from '@/store';
import { useRouter } from 'vue-router';
import { Login } from '@/common/type';

const emailInput = ref('');
const passwordInput = ref('');
const checked = ref(false);
const errorMsg = ref("");
const router = useRouter();

const infoWritten = computed(() => !!emailInput.value && !!passwordInput.value)

const kakao_login = () => {
    window.location.href = 'http://localhost:9000/oauth2/authorization/kakao'
}

const signIn = async () => {
    try {
        const loginInfo: Login = {
            email: emailInput.value,
            password: passwordInput.value
        }

        const { data } = await MEMBER_API.login(loginInfo);
        store.dispatch("saveToken", {
            token: data.accessToken,
            username: loginInfo.email,
        });
        alert("환영해요~");
        console.log(loginInfo)
        console.log(data.accessToken)
        console.log(data.refreshToken)
        router.push("/");
    } catch (error) {
        errorMsg.value = "이메일 또는 비밀번호가 일치하지 않습니다!..";
        console.log(error);
    }
};


</script>

<style lang="scss">
.login-card-layout {
    display: flex;
    justify-content: center;
}

.login-card {
    box-shadow: 0 2px 2px 2px rgb(0, 0, 0, .2);
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 800px;
    padding: 0 10% 0 10%;

}

.login-logo-container {
    display: flex;
    padding: 4rem 0;
    justify-content: center;

    .login-logo {
        width: 200px;
        height: auto;
    }
}

.login-form {
    display: flex;
    flex-direction: column;
    margin: 1rem;

    img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
    }

    .kakao-login {
        display: flex;
        height: 3.5rem;
        justify-content: center;
        align-items: center;
        margin-top: 0.75rem;
        background-color: #fee500;
        color: #000;
        border-radius: 3px;
        border: none;
        font-size: 1.2rem;

        cursor: pointer;

    }

    .facebook-login {
        display: flex;
        height: 3.5rem;
        justify-content: center;
        align-items: center;
        margin-top: 0.75rem;
        background-color: #3c5a99;
        border-radius: 3px;
        border: none;
        font-size: 1.2rem;
        color: #fff;
        cursor: pointer;
    }

    .login-or {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        width: 100%;
        color: #dee0e5;
        font-size: 0.75rem;
    }

    .login-or::before,
    .login-or::after {
        content: "";
        flex-grow: 1;
        background: #dee0e5;
        height: 1px;
        margin: 0 10px;
    }

    .email-login-title {
        margin-top: 2.625rem;
    }

    .input-box {
        margin-top: 27px;
        border: none;
        border-bottom: 1px solid black;
    }
}

.login-assist {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    .login-remember {
        display: flex;
    }
}

.login-button {
    height: 3.5rem;
    border-radius: 3px;
    border: none;
    font-size: 1.5rem;
    margin-top: 2rem;
    background-color: #f06595;

    cursor: pointer;

    &:disabled {
        cursor: default;
        background-color: #f065966b;
    }

}

.go-signup-containter {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    .go-signup-button {
        margin: 0 0 0 0.75rem;
    }

}
</style>
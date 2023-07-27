<template>
    <div class="signup-card-layout">
        <div class="signup-card">
            <div class="opgg-logo-wrapper">
                <img class="opgg-logo" src="https://member.op.gg/img_opgglogo.1924961d.svg" alt="opgg-logo">

            </div>


            <div class="signup-input-field">
                <h2>생년월일 입력</h2>
                <input class="signup-input" type="text" placeholder="생년월일" v-model="birthInput" @focus="focused = true"
                    @blur="focused = false">
            </div>
            <div class="signup-input-field">
                <h2>이름 입력</h2>
                <input class="signup-input" type="text" placeholder="이름" v-model="nameInput" @focus="focused = true"
                    @blur="focused = false">
            </div>
            <div class="signup-input-field">
                <h2>이메일 입력</h2>
                <input class="signup-input" type="text" placeholder="이메일" v-model="emailInput" @focus="focused = true"
                    @blur="focused = false">
            </div>
            <div class="signup-input-field">
                <h2>비밀번호 입력</h2>
                <input class="signup-input" type="text" placeholder="비밀번호" v-model="passwordInput" @focus="focused = true"
                    @blur="focused = false">
            </div>
            <button :disabled="!infoWritten" class="signup-button" type="submit" @click.prevent="signUp">회원가입</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import MEMBER_API from '@/common/axios/member';
import { SignUp } from '@/common/type';
import router from '@/router';
import { computed, ref } from 'vue';

const birthInput = ref('');
const emailInput = ref('');
const nameInput = ref('');
const passwordInput = ref('');
const focused = ref(false);

const infoWritten = computed(() => !!emailInput.value && !!passwordInput.value && !!birthInput.value && !!nameInput.value)

const signUp = async () => {
    try {
        const singUpInfo: SignUp = {
            birth: birthInput.value,
            email: emailInput.value,
            name: nameInput.value,
            password: passwordInput.value
        }

        const { data } = await MEMBER_API.signup(singUpInfo);

        alert("가입되었습니다~~");
        console.log(data);
        router.go(-1);
        router.push("/");

    } catch (error) {
        console.log(error)
        alert("가입실패ㅠㅇㅠ");
    }
}
</script>

<style scoped lang="scss">
.signup-card-layout {
    display: flex;
    justify-content: center;
}

.signup-card {
    box-shadow: 0 2px 2px 2px rgb(0, 0, 0, .2);
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 800px;
    padding: 0 10% 0 10%;
    font-size: 1rem;

}

.opgg-logo-wrapper {
    display: flex;
    justify-content: center;
    padding: 4rem 0 4rem 0;

    .opgg-logo {
        width: 20rem;
    }
}

.signup-input-field {
    font-size: 0.9rem;
    width: 80%;
    margin-bottom: 0.1rem;

    .signup-input {
        margin-top: 0.2rem;
        margin-bottom: 2rem;
        border: none;
        border-bottom: 1px #dddfe4 solid;
        width: 100%;
        height: 1.5rem;

        &::placeholder {
            transition: all 0.3s ease-in-out;
            font-size: 1rem;
        }

        &:focus::placeholder {
            font-size: 0.5px;
        }
    }
}


.signup-button {
    background-color: #f06595;
    border: none;
    width: 80%;
    height: 2.5rem;
    margin-bottom: 2rem;

    cursor: pointer;

    &:disabled {
        cursor: default;
        background-color: #f065966b;
    }
}
</style>

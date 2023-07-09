<template>
    <div class="signup-card-layout">
        <div class="signup-card">
            <div class="opgg-logo-wrapper">
                <img class="opgg-logo" src="https://member.op.gg/img_opgglogo.1924961d.svg" alt="opgg-logo">

            </div>


            <div class="signup-input-field">
                <h2>생년월일 입력</h2>
                <input class="signup-input" type="text" placeholder="생년월일" v-mask="''" v-model="birth"
                    @focus="focused = true" @blur="focused = false">
            </div>
            <div class="signup-input-field">
                <h2>이메일 입력</h2>
                <input class="signup-input" type="text" placeholder="이메일" v-mask="''" v-model="email"
                    @focus="focused = true" @blur="focused = false">
            </div>
            <div class="signup-input-field">
                <h2>비밀번호 입력</h2>
                <input class="signup-input" type="text" placeholder="비밀번호" v-mask="''" v-model="password"
                    @focus="focused = true" @blur="focused = false">
            </div>
            <button class="signup-button" type="submit">회원가입</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const birth = ref('');
const email = ref('');
const password = ref('');
const focused = ref(false);
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
    font-size: 1.5rem;

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
    width: 80%;
}

.signup-input {

    margin: 2rem 0 2rem 0;
    border: none;
    border-bottom: 1px #dddfe4 solid;
    width: 100%;

    &::placeholder {
        transition: all 0.3s ease-in-out;
        font-size: 16px;
    }

    &:focus::placeholder {
        font-size: 10px;
    }
}

.signup-button {
    background-color: #dddfe4;
    border: none;
    width: 80%;
    height: 2.5rem;
    margin-bottom: 2rem;
}
</style>

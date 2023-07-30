<template>
    <div class="write-article-layout">
        <div class="write-article-card">
            <div class="write-article-title">
                <div>제목</div>
                <input class="title-input" type="text" v-model="titleInput">
            </div>
            <div class="write-article-contents">
                <textarea class="contents-input" id="" cols="" rows="" v-model="contentsInput"></textarea>
            </div>
        </div>
        <div class="post-article-button-wrapper">
            <button @click="postArticle" class="post-article-button"> 작성 </button>

        </div>
    </div>
</template>

<script lang="ts" setup>
import ARTICLE_API from '@/common/axios/article';
import { PostArticle } from '@/common/type';
import { useRoute, useRouter } from "vue-router";
import { ref } from 'vue';
import store from '@/store';


const titleInput = ref('')
const contentsInput = ref('')
const router = useRouter()

const postArticle = async () => {
    try {
        const username = store.state.username;
        if (!username) {
            alert("로그인이 필요합니다!!")
            return;
        }
        const postArticleDto = ref<PostArticle>({
            writer: username,
            title: titleInput.value,
            contents: contentsInput.value
        }
        )
        const { data } = await ARTICLE_API.postArticle(postArticleDto.value)
        alert("리뷰 완료! > <");
        console.log(data)
        router.push("/");
    } catch (error) {
        console.log(error)
    }
}


</script>

<style lang="scss">
.write-article-card {
    display: flex;
    flex-direction: column;
    // width: 1000px;
    min-width: 500px;
    margin: 7rem;
    margin-bottom: 2rem;
    padding: 2rem 3rem 2rem 3rem;
    background-color: white;
    box-shadow: 0 2px 2px 2px rgb(0, 0, 0, .2);

    .write-article-title {
        display: flex;
        margin-bottom: 2rem;

        .title-input {
            margin-left: 1rem;
            width: 70%;
        }
    }

    .write-article-contents {
        margin-bottom: 2rem;

        .contents-input {
            width: 90%;
            height: 500px;
        }
    }
}

.post-article-button-wrapper {
    display: flex;
    justify-content: center;
}

.post-article-button {
    border-color: #f06595;
    background-color: #f065966b;
    height: 2rem;
    width: 5rem;
    margin-bottom: 2rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
    width: 4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    justify-content: center;
}
</style>
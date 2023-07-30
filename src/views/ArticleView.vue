<template>
    <div class="article-layout">
        <div v-if="articleData">
            <div class="article-banner">
                <div class="article-title">{{ articleData.title }}</div>
                <div class="article-sub"> 작성일: {{ articleData.timestamp }}
                    작성자: {{ articleData.writer.memberName }}
                    조회수: {{ articleData.visited }}
                </div>
            </div>
            <div class="contents-container">
                <div class="article-contents" v-html="articleData.contents"></div>
                <div class="article-comments">
                    <div class="write-comment-card">
                        <div class="write-comment">
                            <textarea class="contents-input" id="" cols="" rows="" v-model="commentInput"></textarea>
                        </div>
                    </div>
                    <div class="post-comment-button-wrapper">
                        <button @click="postComment" class="post-comment-button"> 댓글작성 </button>
                    </div>

                    <div v-for="(comment, index) in comments" :key="index">
                        <div class="comment-writer">{{ comment.writer }}</div>
                        <div class="comment-contents">{{ comment.contents }} </div>
                        <div> {{ comment.likes }} {{ comment.dislikes }}</div>
                        <div v-for="(cocoment, index) in comment.childComments" :key="index">
                            <div>{{ cocoment.writer }}</div>
                            <div>{{ cocoment.contents }}</div>
                            <div>{{ cocoment.likes }} {{ cocoment.dislikes }}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div v-else>
            Loading...

        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Article, Comment, PostComment } from '@/common/type/index'
import ARTICLE_API from '@/common/axios/article'
import store from '@/store';

const articleData = ref<Article>()
const comments = ref<Comment[]>();
const route = useRoute();
const articleId = ref<number>()
const commentInput = ref('')


const getArticle = async (articleId: number) => {
    const { data } = await ARTICLE_API.getArticleDetail(articleId);
    articleData.value = data;
    console.log(data)
}

const getComments = async (articleId: number) => {
    const { data } = await ARTICLE_API.getComments(articleId);
    comments.value = data;
    console.log(data)
}

const postComment = async () => {
    try {
        const username = store.state.username;
        if (!username) {
            alert("로그인이 필요합니다!!")
            return;
        }
        if (articleId.value === undefined) {
            return;
        }

        const postCommentDto = ref<PostComment>({
            memberName: username,
            contents: commentInput.value
        })
        const { data } = await ARTICLE_API.postComment(postCommentDto.value, articleId.value)
        console.log(data)


    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    if (typeof route.params.articleId === 'string') {
        articleId.value = parseInt(route.params.articleId, 10);
        getArticle(articleId.value);
        getComments(articleId.value);
    }
})


</script>


<style lang="scss">
.article-layout {
    display: flex;
    flex-direction: column;
    // width: 1000px;
    min-width: 500px;
    margin: 7rem;
    padding: 1.5rem;
    background-color: white;
    box-shadow: 0 2px 2px 2px rgb(0, 0, 0, .2);
}

.article-banner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    .article-title {
        font-size: 2rem;
    }

    .article-sub {
        font-size: 0.8rem;
    }
}

.contents-container {
    display: flex;
    flex-direction: column;

    .article-contents {
        margin-bottom: 1rem;
    }

    .article-comments {}
}
</style>

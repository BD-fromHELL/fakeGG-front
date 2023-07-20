<template>
    <div v-if="articleData">
        <h1>{{ articleData.title }}</h1>
        <p>{{ articleData.timestamp }} ago, {{ articleData.writer.memberName }}, Visits: {{ articleData.visited }},
            Comments: <!-- 댓글수는 어디서 가져오는지 명시해야 합니다 --></p>

        <div v-html="articleData.contents"></div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Article } from '@/common/type/index'
import ARTICLE_API from '@/common/axios/article'

const articleData = ref<Article>()

const getArticle = async (articleId: number) => {
    const { data } = await ARTICLE_API.getArticleDetail(articleId);
    articleData.value = data;
}

onMounted(() => {
    const route = useRoute();
    const articleId = Number(route.params.id);
    getArticle(articleId);
})


</script>


<style lang="scss"></style>

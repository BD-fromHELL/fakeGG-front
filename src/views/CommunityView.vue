<template>
    <div class="community-layout">

        <section class="top-banner">
            <div class="banner-header">
                <h2>전체</h2>
                <button @click="$router.push(`/community/writeArticle`)" class="write-article">글쓰기</button>
            </div>
            <div class="category-container">

                <button class="category-button">
                    <img src="https://talk.op.gg/images/icon-hot-on@2x.png" alt="popular-icon">
                    <p>인기</p>
                </button>

                <button class="category-button">
                    <img src="https://talk.op.gg/images/icon-new@2x.png" alt="recent-icon">
                    <p>최신</p>
                </button>
            </div>
        </section>
        <section class="article-list">
            <div v-for="(article, index) in articles" :key="index">
                <div class="article-item">
                    <div class="article-visited">
                        <img src="https://talk.op.gg/images/icon-vote-up.png" alt="up-icon">
                        <div>{{ article.visited }}</div>
                    </div>
                    <div class="article-container" @click="$router.push(`community/${article.id}`)">
                        <div class="article-name">{{ article.title }}</div>
                        <div class="article-info">
                            <div class="article-recent">{{ article.timestamp }}</div>
                            <div class="article-writer">{{ article.writer.memberName }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="article-page">
            <button class="article-page-button" v-for="(pageNumber, index) in pages" :key="index">{{ pageNumber }}</button>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Article } from '@/common/type/index'
import ARTICLE_API from '@/common/axios/article'

const articles = ref<Article[]>([])
const nowPage = ref<number>()
const pages = ref<number[]>([])

const loadArticles = async () => {
    try {
        const { data } = await ARTICLE_API.getArticles();
        articles.value = data.page;
        for (let i = data.startPage; i <= data.endPage; i++) {
            pages.value.push(i)
        }
        nowPage.value = data.nowPage;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

// const goPageIfLoggedIn = (foodId: number) => {
//       if (store.getters.isLoggedIn) {
//         router.push({
//           name: "write-review",
//           params: { foodId: Number(foodId) },
//         });
//       } else {
//         alert("로그인해주세요!");
//       }
//     };

onMounted(loadArticles);

</script>


<style lang="scss">
.community-layout {
    display: flex;
    flex-direction: column;
    // width: 1000px;
    min-width: 500px;
    margin: 7rem;
    padding: 1.5rem;
    background-color: white;
    box-shadow: 0 2px 2px 2px rgb(0, 0, 0, .2);
}

.banner-header {
    display: flex;
    justify-content: space-between;


    h2 {
        font-size: 2em;
        padding-bottom: 2rem;
    }

    .write-article {
        border: none;
        background-color: #f065966b;
        height: 2rem;
        font-weight: bold;
        color: rgb(40, 40, 40);
        width: 4rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }

}

.top-banner {
    padding-bottom: 2rem;
}

.category-container {
    display: flex;

    img {
        width: 2rem;
        padding-right: 0.2rem;
    }

    .category-button {
        margin-right: 1rem;
        border: none;
        display: flex;
        align-items: center;
        font-size: inherit;
        background-color: inherit;
    }
}


.article-list {
    margin-bottom: 3rem;
}

.article-item {
    display: flex;
    height: 2.75rem;
    padding: 1rem 0 1rem 0;
    border-bottom: 1px #7b858e solid;
}

.article-visited {
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 0.4rem;
    }
}


.article-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    .article-name {
        font-size: 1.5rem;
    }

    .article-info {
        display: flex;
        font-size: 0.8rem;

        .article-recent {
            margin-right: 1rem;
        }

    }

}


.article-page {
    display: flex;
    justify-content: center;

    .article-page-button {
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
}
</style>

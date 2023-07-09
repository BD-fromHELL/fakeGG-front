<template>
    <div class="community-layout">

        <div class="top-banner">
            <h2>전체</h2>
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
        </div>
        <div class="article-list">
            <div class="article-item">
                <div class="article-visited">
                    <img src="https://talk.op.gg/images/icon-vote-up.png" alt="up-icon">
                    <div>333</div>
                </div>
                <div class="article-container">
                    <div class="article-name">하하</div>
                    <div class="article-info">
                        <div class="article-recent">6시간전</div>
                        <div class="article-writer">나나</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>


<style lang="scss">
.community-layout {
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 7rem;
    padding: 1.5rem;
    background-color: white;
    box-shadow: 0 2px 2px 2px rgb(0, 0, 0, .2);
}

h2 {
    font-size: 2em;
    padding-bottom: 2rem;
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


.article-list {}

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
}

.article-info {
    display: flex;
}

.article-recent {
    margin-right: 1rem;
}

</style>

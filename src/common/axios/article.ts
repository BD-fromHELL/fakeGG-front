import { AxiosResponse } from "axios";
import client from "."
import { Article, ArticleResponseDto } from "../type";


const ARTICLE_API = {
    getArticles(): Promise<AxiosResponse<ArticleResponseDto, void>> {
        return client.get('/article/1');
    },

    getArticleDetail(articleId: number): Promise<AxiosResponse<Article, any>> {
        return client.get(`article/detail/${articleId}`);
    }
}

export default ARTICLE_API;
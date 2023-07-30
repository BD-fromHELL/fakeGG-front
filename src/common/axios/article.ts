import { AxiosResponse } from "axios";
import client from "."
import { Article, ArticleResponseDto, Comment, PostArticle, PostComment } from "../type";


const ARTICLE_API = {
    getArticles(): Promise<AxiosResponse<ArticleResponseDto, void>> {
        return client.get('/article/1');
    },

    getArticleDetail(articleId: number): Promise<AxiosResponse<Article, void>> {
        return client.get(`article/detail/${articleId}`);
    },
    postArticle(article: PostArticle) {
        return client.post('/article', article)
    },
    postComment(comment: PostComment, articleId: number) {
        return client.post(`/article/${articleId}/comment`, comment)
    },
    postCocoment(comment: PostComment, articleId: number, commentId: number) {
        return client.post(`/article/${articleId}/comment/${commentId}/comment`)
    },
    getComments(articleId: number): Promise<AxiosResponse<Comment[], void>> {
        return client.get(`/article/${articleId}/comment`)
    }

}

export default ARTICLE_API;
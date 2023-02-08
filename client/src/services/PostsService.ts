import { mainAPI } from './apis';

interface IPost {
  title: string;
  content: string;
  author: string;
}

export default class PostsService {
  static BASE_ROUTE = '/posts';

  static getPosts(signal?: AbortSignal) {
    return mainAPI.get(`${this.BASE_ROUTE}`, {
      signal,
    });
  }

  static getPost(id: string, signal?: AbortSignal) {
    return mainAPI.get(`${this.BASE_ROUTE}/${id}`, {
      signal,
    });
  }

  static createPost(data: IPost, signal?: AbortSignal) {
    return mainAPI.post(`${this.BASE_ROUTE}`, data, {
      signal,
    });
  }

  static updatePost(id: string, data: IPost, signal?: AbortSignal) {
    return mainAPI.put(`${this.BASE_ROUTE}/${id}`, data, {
      signal,
    });
  }

  static upvotePost(id: string, signal?: AbortSignal) {
    return mainAPI.patch(`${this.BASE_ROUTE}/${id}/upvote`, {}, {
      signal,
    });
  }

  static downvotePost(id: string, signal?: AbortSignal) {
    return mainAPI.patch(`${this.BASE_ROUTE}/${id}/downvote`, {}, {
      signal,
    });
  }

  static deletePost(id: string, signal?: AbortSignal) {
    return mainAPI.delete(`${this.BASE_ROUTE}/${id}`, {
      signal,
    });
  }
}

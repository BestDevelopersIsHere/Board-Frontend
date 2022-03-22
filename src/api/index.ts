import axios from 'axios';
import { IBoardForCreate, IBoardForUpdate } from '../page/Board/BoardTypes';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/post`,
  withCredentials: true,
});

export const getPostList = (keyword: string, page: number) =>
  instance.get(`?keyword=${keyword}&page=${page}&size=10`);

export const getPostDetail = (id: string) => instance.get(`/${id}`);

export const createPost = ({ title, content, writer }: IBoardForCreate) =>
  instance.post('/', { title, content, writer });

export const updatePost = ({ id, title, content }: IBoardForUpdate) => {
  return instance.put(`/${id}`, { title, content });
};

export const deletePost = (id: string) => {
  return instance.delete(`/${id}`);
};

import axios from "axios";
import { server_base_Url } from "./temp_tokenKey";
import { getToken } from "./token";
import { updatedCookies } from "@/store/serverAuthCookies";

const instance = axios.create({
  baseURL: server_base_Url,
  timeout: 25000,
});

instance.interceptors.request.use(
  async function (config) {
    try {
      config.headers["Content-Type"] = "application/json";
      config.headers.Accept = "application/json";
      const token = getToken() || updatedCookies();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("error ==> ", error.message);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const handleRequest = async (request) => {
  try {
    return await request();
  } catch (error) {
    console.error("error ==> ", error.message);
    return { data: { data: error.message || "Server Error", success: false } };
  }
};

export const login = async (data) => {
  return handleRequest(() => instance.post("auth/login", data));
};

export const signUp = async (data) => {
  return handleRequest(() => instance.post("auth/createAccount", data));
};

export const getDashboardCounts = async () => {
  return handleRequest(() => instance.get("users/counts"));
};

export const getActionsList = async () => {
  return handleRequest(() => instance.get(`users/myTodos`));
};

export const getDashboard = async () => {
  return handleRequest(() => instance.get("insights/counts"));
};

export const cardget = async () => {
  return handleRequest(() => instance.get("insights"));
};

export const likeHandler = async (id) => {
  return handleRequest(() => instance.post(`insights/${id}/like`));
};

export const bookmarksHandler = async (id) => {
  return handleRequest(() => instance.post(`insights/${id}/bookmarks`));
};

export const dislikeHandler = async (id) => {
  return handleRequest(() => instance.post(`insights/${id}/dislike`));
};

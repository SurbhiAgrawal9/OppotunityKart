import { message } from "antd";
import axios from "axios";
import { errorHandler } from "./errorHandler";

const axiosInstance = axios.create({
  baseURL: "https://careerhive-api.vercel.app/api/",
  // baseURL: "http://localhost:5000/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (endpoint, token = null) => {
  try {
    const response = await axiosInstance.get(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    message.success(response.data?.message);
    return response;
  } catch (error) {
    errorHandler(error);
    return [error, true];
  }
};

export const post = async (endpoint, data, token = null) => {
  try {
    const response = await axiosInstance.post(endpoint, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    message.success(response.data?.message);
    return [response, false];
  } catch (error) {
    errorHandler(error);
    return [error, true];
  }
};

export const put = async () => {};
export const deleteApi = async () => {};
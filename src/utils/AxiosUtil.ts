import axiosInstance from "axios";

const REACT_APP_API_BASE_URL = "http://localhost:3001";

export const axios = axiosInstance.create({
  baseURL: REACT_APP_API_BASE_URL,
});

export function handleResponse(response: any) {
  if (response.data) {
    return Promise.resolve(response.data);
  }

  return Promise.resolve(response);
}

export function handleError(error: any) {
  if (error.data) {
    return Promise.reject(error.data);
  }

  return Promise.reject(error);
}

export const fetchAll = (resource: any) =>
  axios.get(resource).then(handleResponse).catch(handleError);

import type { AxiosInstance } from 'axios';
import axios from 'axios'

const Api: AxiosInstance & { setToken?: (token: string) => void } =
  axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 100000000,
    responseType: 'json',
  });

Api.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    console.log('location', window.location);
    if (
      error.response &&
      error.response.status == 401 &&
      !window.location.pathname.startsWith('/')
    )
      window.location.href = '/auth/login?redirect=' + window.location.pathname;
    return Promise.reject(error);
  }
);

if (localStorage.getItem('access_token'))
  Api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
    'access_token'
  )}`;


Api.setToken = (token: string) => {
  localStorage.setItem('access_token', token);
  Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default Api;


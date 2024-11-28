import axios from 'axios';
import {BASE_URL} from '../constants';
import { getUserTokens, saveUserTokens } from '../utils/userTokens';
const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  async config => {
    const tokens = await getUserTokens();
    if (tokens) {
      config.headers.Authorization = `Bearer ${tokens.access_token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const tokens = await getUserTokens();
      if (!tokens) {
        console.log('No tokens found');
        return Promise.reject(
          new Error('Session expired. Please log in again.'),
        );
      }

      try {
        const res = await instance.post('/auth/refresh-token', {
          refreshToken: tokens.refresh_token,
        });

        if (res.status === 200) {
          const {access_token, refresh_token} = res.data;

          instance.defaults.headers.common.Authorization = `Bearer ${access_token}`;
          originalRequest.headers.Authorization = `Bearer ${refresh_token}`;

          await saveUserTokens({access_token, refresh_token});
          console.log('Token refreshed');

          return instance(originalRequest);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
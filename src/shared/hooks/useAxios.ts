/* eslint-disable no-console */
import axios, { AxiosResponse } from 'axios';
import { CONFIG } from 'shared/config/config';
import { IAxios } from 'shared/interfaces/utils/IAxios';
import { Alert } from 'shared/theme/elements';
import { ls } from 'shared/utils/ls';

export const useAxios = () => {
  const instance = axios.create({
    baseURL: CONFIG.API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (request) => {
      if (CONFIG.isDevelopment) {
        console.log(
          `%c ${request?.method} request for ${request.url}\n`,
          'color:white;background-color:#fa8c16;padding:5px;border-radius:5px;',
          request.data,
        );
        console.log({ params: request.params });
      }
      return request;
    },
    (error) => {
      if (CONFIG.isDevelopment) console.log(error);

      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      if (CONFIG.isDevelopment) {
        console.log(
          `%c response from ${response.config.url}\n`,
          'color:white;background-color:#1890ff;padding:5px;border-radius:5px;',
          response.data,
        );
      }

      return response;
    },
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          ls.remove('user');
          Alert.error('', 'Token expired!. Please Login Again.');
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }
      if (CONFIG.isDevelopment) console.log(error);
      return Promise.reject(error);
    },
  );

  const GET = async <R, P = unknown, B = unknown>(args: IAxios<P, B>): Promise<AxiosResponse<R>> => {
    console.log('args', args);

    try {
      return await instance({
        ...args,
        method: 'GET',
      });
    } catch (e) {
      throw e;
    }
  };

  const POST = async <R, P = unknown, B = unknown>(args: IAxios<P, B>): Promise<AxiosResponse<R>> => {
    try {
      return await instance({
        ...args,
        method: 'POST',
      });
    } catch (e) {
      throw e;
    }
  };

  const PUT = async <P, B>(args: IAxios<P, B>): Promise<AxiosResponse> => {
    try {
      return await instance({
        ...args,
        method: 'PUT',
      });
    } catch (e) {
      throw e;
    }
  };

  const DELETE = async <P, B>(args: IAxios<P, B>): Promise<AxiosResponse> => {
    try {
      return await instance({
        ...args,
        method: 'DELETE',
      });
    } catch (e) {
      throw e;
    }
  };

  return {
    instance,
    GET,
    POST,
    PUT,
    DELETE,
  };
};

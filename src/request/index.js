import axios from 'axios';
import { ElMessage } from 'element-plus';

import log from '~/log';
import { useUserStore } from '~/store';

const getErrorMessageByCode = (code) => {
  let message = null;
  if (code === 400) {
    message = '验证失败';
  } else if (code === 401) {
    message = '未授权';
  } else if (code === 403) {
    message = '禁止访问';
  } else if (code === 404) {
    message = '未找到';
  } else if (code === 415) {
    message = '不支持的媒体类型';
  } else if (code === 500) {
    message = '服务器错误';
  } else {
    message = '未定义';
  }
  return message;
};

const globalConfig = {
  baseURL: '/api/',
  timeout: 30000,
};

const request = axios.create(globalConfig);

request.interceptors.request.use(
  function (config) {
    log.debug(`request:[${config.method}][${config.baseURL}${config.url}]`);
    if (config.params ?? config.data) {
      log.debug(JSON.parse(JSON.stringify(config.params ?? config.data)));
    }
    const userStore = useUserStore();
    const { token } = userStore;
    if (token) {
      if (!Object.prototype.hasOwnProperty.call(config, 'headers')) {
        Object.assign(config, { headers: {} });
      }
      Object.assign(config.headers, { Authorization: `Bearer ${token}` });
    }
    return config;
  },
  function (error) {
    let message = null;
    if (error.request) {
      message = `没有响应：${error.message}`;
    } else {
      message = `发送出错：${error.message}`;
    }
    ElMessage.error(message);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  function (response) {
    const { config } = response;
    log.debug(`response:[${response.status}][${config.method}][${config.baseURL}${config.url}]`);
    if (response.data) {
      const result = response.data;
      const successCode = 200; // or may be zero
      if ('code' in result && result.code !== successCode) {
        const message = `code ${result.code} : ${result.message ?? getErrorMessageByCode(result.code)}`;
        ElMessage.error(message);
        throw new Error(message);
      }
    }
    return response;
  },
  function (error) {
    let message = null;
    if (error.response?.status) {
      message = `status ${error.response.status} : ${getErrorMessageByCode(error.response.status)}`;
    } else {
      message = error.message;
    }
    ElMessage.error(message);
    return Promise.reject(error);
  },
);

export default request;

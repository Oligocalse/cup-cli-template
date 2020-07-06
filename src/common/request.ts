import { extend } from 'umi-request';
import { Toast } from 'antd-mobile';
// import { Request } from 'umi';

type API_TYPE = 'development' | 'dev' | 'stable' | 'online';

// interface RESPONSE extends Response{
//   code: number;
//   message: string;
//   // data: Data;
// }

const token_type = localStorage.getItem('token_type') || '';
const token = localStorage.getItem('token') || '';

const API_ENV = {
  development: '',
  dev: 'https://cellapi.youzhuan.com',
  stable: 'http://www.youzhuan.com/activities',
  online: 'http://www.youzhuan.com/activities',
}[process.env.API_ENV as API_TYPE];

const request = extend({
  timeout: 5000,
  headers: {
    'Content-Type': ' application/json',
    Authorization: `${token_type} ${token}`,
  },
  params: {},
  errorHandler: function(error) {
    /* 异常处理 */
    Toast.fail('123');
    console.log(error);
  },
});

// 请求拦截
request.interceptors.request.use(
  (url, options) => {
    // console.log(options);
    return {
      url: `${API_ENV}${url}`,
      options: { ...options, interceptors: true },
    };
  },
  { global: true },
);

// 响应拦截
// response拦截器, 处理response
request.interceptors.response.use((response, options) => {
  const contentType = response.headers.get('Content-Type');
  // console.log(contentType)
  return response;
});

// 提前对响应做异常处理
request.interceptors.response.use(response => {
  const codeMaps = {
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
  // message.error(codeMaps[response.status]);
  return response;
});

// 克隆响应对象做解析处理
request.interceptors.response.use(async response => {
  const res = await response.clone().json();
  const { data = {} } = res;
  // if (data && data.NOT_LOGIN) {
  //   location.href = '登录url';
  // }
  if (data['token'] && data['token_type']) {
    localStorage.setItem('token', data['token']);
    localStorage.setItem('token_type', data['token_type']);
  }
  return response;
});

export default request;

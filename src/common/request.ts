import { extend } from "umi-request";
// import { Request } from 'umi';
const { API_ENV } = process.env;
console.log(process.env)
console.log(API_ENV);

const REQUEST_API = {
  development: '',
  dev: 'https://cellapi.youzhuan.com',
  stable: 'http://www.youzhuan.com/activities',
  online: 'http://www.youzhuan.com/activities'
}[API_ENV];

const request = extend({
  timeout: 5000,
  headers: {
    "Content-Type": "multipart/form-data",
    "Authorization": "AccessToken eyJ0IjogMCwgInMiOiAic211dHVnOXNqYTFvam5zZmJlZGR2dXU5dDYifQ==",
    "sessionid": '',
  },
  params: {
    // token: "this is token in url", // 所有请求默认带上 token 参数
  },
  errorHandler: function (error) {
    /* 异常处理 */
    console.log(error)
  }
});

// 请求拦截
request.interceptors.request.use((url, options) => {
  // console.log(options);
  return {
    url: `${REQUEST_API}${url}`,
    options: { ...options, interceptors: true },
  };
},
  { global: true }
);

// 响应拦截
request.interceptors.response.use(response => {
  // console.log(response);
  const codeMaps = {
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
  // message.error(codeMaps[response.status]);
  return response;
});

export default request;


// import { RequestConfig } from 'umi';
// import config from "@/config"
// import errorHandler from "@/util/errorHandle"

// export const request: RequestConfig = {
//   prefix: process.env.NODE_ENV === "production" ? config.baseurl : 'api/',
//   credentials: 'include',
//   errorHandler,
//   // 自定义端口规范
//   errorConfig: {
//     adaptor: res => {
//       return {
//         success: res.code == config.successCode,
//         data: res.data,
//         errorCode: res.code,
//         errorMessage: res.msg,
//       };
//     },
//   },
//   middlewares: [],
// };

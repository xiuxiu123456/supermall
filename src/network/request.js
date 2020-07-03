 /* jshint esversion: 6 */

import axios from 'axios';

axios.defaults.timeout = 10000;

export default axios;





// let http = axios.create({
//   baseURL: 'http://119.23.213.249',
//   timeout: 1000,
// });
// Vue.prototype.$axios=http;

// export function request(config) {
//   // console.log(config);
//   // axios.post("/login",{
//   //   username: 'sz777',
//   //   password: '1234'
//   // }).then((res) => {
//   //   console.log(res);
//   // })
//   //1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://119.23.213.249',
//     timeout: 5000
//   });

//   //2.axios的拦截器
//   //2.1、请求拦截的作用
//   // instance.interceptors.request.use(config => {
//   //   console.log("ssssss", config);
//   //   return config;
//   // }, err => {
//   //   console.log(err);
//   // });
//   //2.2、响应拦截
//   // instance.interceptors.request.use(res => {
//   //   return res.data;
//   // },err => {
//   //   console.log(err);
//   // });
//   //发送真正的网络请求
//   return instance(config);
// }

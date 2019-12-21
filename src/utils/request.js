import Vue from "vue";
import axios from "axios";
import {MessageBox} from "view-design"
function startLoading() {
    this.$Spin.show();
  }
  function endLoading() {
    this.$Spin.hide();
  }
  const service = axios.create({
    baseURL: "api/",
    timeout: 120000 // request timeout
  });
  // request interceptor
  service.interceptors.request.use(
    config => {
      config.headers["Content-Type"] = "application/json";
  
      if (!config.hideLoading) {
        startLoading();
      }
      return config;
    },
    error => {
      // Do something with request error
      console.log(error); // for debug
      Promise.reject(error);
    }
  );
  // response interceptor
service.interceptors.response.use(
    response => {
      const res = response.data;
      if (res && res.NOT_LOGIN_CODE === "true") {
        if (!response.config.hideLoading) {
          setTimeout(() => {
            endLoading();
          }, 500);
        }
      } else {
        if (!response.config.hideLoading) {
          setTimeout(() => {
            endLoading();
          }, 500);
        }
        if (res.code && res.code === 1) {
          return res.data;
        } else if (res.code === 0) {
          MessageBox({
            title: "Tips:",
            message: res.message,
            type: "error"
          });
        }
      }
    },
  
    error => {
      console.log("err" + error); // for debug
  
      setTimeout(() => {
        endLoading();
      }, 500);
      return Promise.reject(error);
    }
  );
  Vue.prototype.$http = axios;
export default service;
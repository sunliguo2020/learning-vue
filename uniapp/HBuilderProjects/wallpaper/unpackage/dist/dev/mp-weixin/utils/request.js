"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "https://tea.qingnian8.com/api/bizhi";
function request(config = {}) {
  return new Promise((resolve, reject) => {
    let {
      url,
      method = "GET",
      header = {},
      data = {}
      //转换为string类型
    } = config;
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      url = BASE_URL + url;
    }
    header["access-key"] = "66541388";
    console.log(header);
    common_vendor.index.request({
      url,
      data,
      method,
      header,
      //请求成功后的回调函数
      success: (res) => {
        console.log("请求成功返回的res", res);
        if (res.data.errCode == 0) {
          resolve(res.data);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false
          });
          reject(res.data.data);
        } else {
          common_vendor.index.showModal({
            title: res.data.errMsg,
            icon: "none"
          });
          rejct(res.data.data);
        }
      },
      //请求失败后的回调函数
      fail: (err) => {
        console.log("请求失败返回", err);
        common_vendor.index.showToast({
          title: "请求失败",
          showCancel: false,
          icon: "error"
        });
        reject(err);
      },
      //接口调用结束的回调函数
      complete: () => {
        console.log(url, "请求结束");
      }
    });
  });
}
exports.request = request;

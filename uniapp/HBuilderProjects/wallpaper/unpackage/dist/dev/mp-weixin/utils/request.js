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
    } = config;
    url = BASE_URL + url;
    header["access-key"] = "xxm_sunliguo";
    console.log(header);
    common_vendor.index.request({
      url,
      data,
      method,
      header,
      //成功后的回调
      success: (res) => {
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
      //失败后的回调
      fail: (err) => {
        common_vendor.index.showToast({
          title: "请求失败",
          showCancel: false,
          icon: "error"
        });
        reject(err);
      }
    });
  });
}
exports.request = request;

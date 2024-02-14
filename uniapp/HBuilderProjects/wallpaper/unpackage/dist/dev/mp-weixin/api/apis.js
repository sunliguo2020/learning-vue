"use strict";
const utils_request = require("../utils/request.js");
function apiGetBanner() {
  return utils_request.request({
    url: "/homeBanner",
    method: "GET"
  });
}
function apiGetNotice(data = {}) {
  return utils_request.request({
    url: "/wallNewsList",
    method: "GET",
    data
  });
}
function apiGetRandomList(data = {}) {
  return utils_request.request({
    url: "/randomWall",
    method: "GET",
    data
  });
}
function apiGetClassify(data = {}) {
  return utils_request.request({
    url: "/classify",
    method: "GET",
    data
  });
}
function apiGetClassList(data = {}) {
  return utils_request.request({
    url: "/wallList",
    method: "GET",
    data
  });
}
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetClassify = apiGetClassify;
exports.apiGetNotice = apiGetNotice;
exports.apiGetRandomList = apiGetRandomList;

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
function apiGetSetupScore(data = {}) {
  return utils_request.request({
    url: "/setupScore",
    method: "GET",
    data
  });
}
function apiGetUserInfo(data = {}) {
  return utils_request.request({
    url: "/userInfo",
    method: "GET",
    data
  });
}
function apiWriteDownload(data = {}) {
  return utils_request.request({
    url: "/downloadWall",
    method: "GET",
    data
  });
}
function apiGetHistoryList(data = {}) {
  return utils_request.request({
    url: "/userWallList",
    method: "GET",
    data
  });
}
function apiGetNoticeDetail(data = {}) {
  return utils_request.request({
    url: "/wallNewsDetail",
    method: "GET",
    data
  });
}
function apiSearchData(data = {}) {
  return utils_request.request({
    url: "/searchWall",
    method: "GET",
    data
  });
}
function apiTaoShow(data = {}) {
  return utils_request.request({
    url: "https://tea.qingnian8.com/tools/taoShow",
    method: "GET",
    data
  });
}
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetClassify = apiGetClassify;
exports.apiGetHistoryList = apiGetHistoryList;
exports.apiGetNotice = apiGetNotice;
exports.apiGetNoticeDetail = apiGetNoticeDetail;
exports.apiGetRandomList = apiGetRandomList;
exports.apiGetSetupScore = apiGetSetupScore;
exports.apiGetUserInfo = apiGetUserInfo;
exports.apiSearchData = apiSearchData;
exports.apiTaoShow = apiTaoShow;
exports.apiWriteDownload = apiWriteDownload;

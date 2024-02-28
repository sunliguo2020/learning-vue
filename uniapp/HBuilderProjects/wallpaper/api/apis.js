import {
	request
} from "@/utils/request.js"
export function apiGetBanner() {
	return request({
		url: "/homeBanner",
		method: 'GET'
	});
};

export function apiGetNotice(data = {}) {
	return request({
		url: "/wallNewsList",
		method: 'GET',
		data
	});
};

export function apiGetRandomList(data = {}) {
	return request({
		url: "/randomWall",
		method: 'GET',
		data
	});
};

export function apiGetClassify(data = {}) {
	return request({
		url: "/classify",
		method: 'GET',
		data
	});
};
apiGetClassList

//随机9张壁纸
export function apiGetClassList(data = {}) {
	return request({
		url: "/wallList",
		method: 'GET',
		data
	});
};

export function apiGetSetupScore(data = {}) {
	return request({
		url: "/setupScore",
		method: 'GET',
		data
	});
};

//获取用户信息
export function apiGetUserInfo(data = {}) {
	return request({
		url: "/userInfo",
		method: 'GET',
		data
	});
};


//下载壁纸
export function apiWriteDownload(data = {}) {
	return request({
		url: "/downloadWall",
		method: 'GET',
		data
	});
};


//我的评分、下载列表
export function apiGetHistoryList(data = {}) {
	return request({
		url: "/userWallList",
		method: 'GET',
		data
	});
};

//获取公告
export function apiGetNoticeDetail(data = {}) {
	return request({
		url: "/wallNewsDetail",
		method: 'GET',
		data
	});
};

//搜索
export function apiSearchData(data = {}) {
	return request({
		url: "/searchWall",
		method: 'GET',
		data
	});
};


//买家秀
export function apiTaoShow(data = {}) {
	return request({
		url: "https://tea.qingnian8.com/tools/taoShow",
		method: 'GET',
		data
	});
};
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
import config from "@/static/js/conf/config"
import {request} from "../../static/js/utils/request.js"

//显示首页商铺
export function getShopData(data){
	return request(config.baseApi+"/v1/business/shop","get",data)
}
"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const noData = common_vendor.ref(false);
    const classList = common_vendor.ref([]);
    const queryParms = {
      pageNum: 1,
      pageSize: 12
    };
    common_vendor.onLoad((e) => {
      let {
        id = null,
        name = null,
        type = null
      } = e;
      if (type) {
        queryParms.type = type;
      }
      if (id) {
        queryParms.classid = id;
      }
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    common_vendor.onReachBottom(() => {
      queryParms.pageNum++;
      if (noData.value) {
        return;
      }
      getClassList();
    });
    const getClassList = async () => {
      let res;
      if (queryParms.classid) {
        console.log("获取分类的信息");
        res = await api_apis.apiGetClassList(queryParms);
      }
      if (queryParms.type) {
        console.log("我的下载 我的评分");
        res = await api_apis.apiGetHistoryList(queryParms);
      }
      console.log(res);
      console.log("新获取的数据：", res.data);
      classList.value = [...classList.value, ...res.data];
      if (queryParms.pageSize > res.data.length) {
        noData.value = true;
      }
      console.log("准备将数据保存到缓存中：", classList.value);
      common_vendor.index.setStorageSync("storageClissList", classList.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !classList.value && !noData.value
      }, !classList.value && !noData.value ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: "/pages/preview/preview?id=" + item._id,
            c: item._id
          };
        }),
        d: classList.value || noData.value
      }, classList.value || noData.value ? {
        e: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/classlist/classlist.vue"]]);
wx.createPage(MiniProgramPage);

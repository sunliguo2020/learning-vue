"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    setTimeout(() => {
      common_vendor.index.setNavigationBarTitle({
        title: "动态白头"
      });
    }, 2e3);
    const showModal = function() {
      common_vendor.index.showModal({
        title: "是否删除",
        content: "删除后不能恢复！",
        // showCancel:false,
        cancelText: "no",
        cancelColor: "#999",
        confirmText: "Yes",
        confirmColor: "red",
        editable: true,
        success: (res) => {
          console.log(res);
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "删除成功"
            });
          }
        }
      });
    };
    function select() {
      common_vendor.index.showActionSheet({
        "title": "请选择",
        itemList: ["高中", "大专", "本科", "研究生"],
        complete: (res) => {
          console.log("complete:", res);
        },
        success: function(res) {
          console.log("success:", res);
          console.log("选中了第" + (res.tapIndex + 1) + "个按钮");
        },
        fail: function(res) {
          console.log("fail:", res);
          console.log(res.errMsg);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(select),
        b: common_vendor.o(showModal)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo3/pages/classify/classify.vue"]]);
wx.createPage(MiniProgramPage);

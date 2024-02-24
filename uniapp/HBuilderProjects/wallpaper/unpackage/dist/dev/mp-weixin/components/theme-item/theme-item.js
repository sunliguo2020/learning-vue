"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "theme-item",
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default() {
        return {
          picurl: "../../common/images/more.jpg",
          name: "默认名称",
          updateTime: Date.now()
        };
      }
    }
  },
  setup(__props) {
    common_vendor.computed(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? common_vendor.e({
        b: __props.item.picurl,
        c: common_vendor.t(__props.item.name),
        d: common_vendor.unref(utils_common.compareTimestamp)(__props.item.updateTime)
      }, common_vendor.unref(utils_common.compareTimestamp)(__props.item.updateTime) ? {
        e: common_vendor.t(common_vendor.unref(utils_common.compareTimestamp)(__props.item.updateTime))
      } : {}, {
        f: "/pages/classlist/classlist?id=" + __props.item._id + "&name=" + __props.item.name
      }) : {}, {
        g: __props.isMore
      }, __props.isMore ? {
        h: common_assets._imports_0,
        i: common_vendor.p({
          type: "more-filled",
          size: "34",
          color: "#fff"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4eafbca"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/components/theme-item/theme-item.vue"]]);
wx.createComponent(Component);

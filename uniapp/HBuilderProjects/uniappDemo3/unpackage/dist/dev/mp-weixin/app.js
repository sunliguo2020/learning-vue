"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/user/user.js";
  "./pages/classify/classify.js";
  "./pages/demo/demo.js";
  "./pages/demo2/demo2.js";
  "./pages/demo3/demo3.js";
  "./pages/demo4/demo4.js";
  "./pages/demo5/demo5.js";
  "./pages/requestDemo/requestDemo.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    common_vendor.index.setTabBarBadge({
      index: 1,
      text: "22"
    });
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo3/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

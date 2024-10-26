"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "RoundedInput",
  props: {
    placeholder: {
      type: String,
      default: "请输入内容..."
    }
  },
  setup(__props) {
    const inputValue = common_vendor.ref("");
    const clearInput = () => {
      console.log("Delete button clicked");
      inputValue.value = "";
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.placeholder,
        b: inputValue.value,
        c: common_vendor.o(($event) => inputValue.value = $event.detail.value),
        d: inputValue.value
      }, inputValue.value ? {
        e: common_assets._imports_0,
        f: common_vendor.o(clearInput)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0d70737b"]]);
wx.createComponent(Component);

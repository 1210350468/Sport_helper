"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
const logo = "/static/Squad1.png";
const _sfc_main = {
  __name: "Register",
  setup(__props) {
    const form = common_vendor.ref({
      account: "",
      password: "",
      confirmPassword: ""
    });
    const submitRegister = () => {
      if (!form.value.account || !form.value.password || !form.value.confirmPassword) {
        common_vendor.index.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
        return;
      }
      if (form.value.password !== form.value.confirmPassword) {
        common_vendor.index.showToast({
          title: "两次密码输入不一致",
          icon: "none"
        });
        return;
      }
      console.log("提交注册表单", form.value);
      common_vendor.index.navigateTo({ url: "/pages/FirstLogin/FirstLogin" });
    };
    return (_ctx, _cache) => {
      return {
        a: logo,
        b: common_vendor.o(($event) => form.value.account = $event),
        c: common_vendor.p({
          placeholder: "请输入账号",
          clearable: true,
          modelValue: form.value.account
        }),
        d: common_vendor.o(($event) => form.value.password = $event),
        e: common_vendor.p({
          type: "password",
          placeholder: "请输入密码",
          clearable: true,
          modelValue: form.value.password
        }),
        f: common_vendor.o(($event) => form.value.confirmPassword = $event),
        g: common_vendor.p({
          type: "password",
          placeholder: "请再次输入密码",
          clearable: true,
          modelValue: form.value.confirmPassword
        }),
        h: common_vendor.o(submitRegister)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6b0433d4"]]);
wx.createPage(MiniProgramPage);

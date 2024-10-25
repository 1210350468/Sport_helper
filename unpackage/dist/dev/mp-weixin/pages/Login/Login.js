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
  __name: "Login",
  setup(__props) {
    const isPressed = common_vendor.ref(false);
    const onButtonPress = () => {
      isPressed.value = true;
    };
    const onButtonRelease = () => {
      isPressed.value = false;
    };
    const form = common_vendor.ref({
      account: "",
      password: ""
    });
    const submitLogin = () => {
      if (!form.value.account || !form.value.password) {
        common_vendor.index.showToast({
          title: "请输入账号和密码",
          icon: "none"
        });
        return;
      }
      console.log("提交登录表单", form.value);
    };
    const goRegister = () => {
      console.log("前往注册页面");
      common_vendor.index.navigateTo({ url: "/pages/Register/Register" });
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
          placeholder: "请输入密码",
          type: "password",
          clearable: true,
          modelValue: form.value.password
        }),
        f: common_vendor.n({
          active: isPressed.value
        }),
        g: common_vendor.o(onButtonPress),
        h: common_vendor.o(onButtonRelease),
        i: common_vendor.o(submitLogin),
        j: common_vendor.o(goRegister)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-461d1d79"]]);
wx.createPage(MiniProgramPage);

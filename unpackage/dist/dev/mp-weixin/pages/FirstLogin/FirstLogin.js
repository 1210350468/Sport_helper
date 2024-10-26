"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_fui_input2 = common_vendor.resolveComponent("fui-input");
  _easycom_fui_input2();
}
const _easycom_fui_input = () => "../../node-modules/firstui-uni/firstui/fui-input/fui-input.js";
if (!Math) {
  _easycom_fui_input();
}
const logo = "/static/Squad1.png";
const _sfc_main = {
  __name: "FirstLogin",
  setup(__props) {
    const step = common_vendor.ref(1);
    const form = common_vendor.ref({
      height: "",
      weight: "",
      gender: "",
      age: "",
      goals: [],
      sportTypes: []
    });
    const goalOptions = [
      { value: "weight_loss", name: "减肥" },
      { value: "muscle_gain", name: "增肌" },
      { value: "endurance", name: "耐力" },
      { value: "flexibility", name: "柔韧性" },
      { value: "general_fitness", name: "综合健身" }
    ];
    const sportTypeOptions = [
      { value: "running", text: "跑步" },
      { value: "swimming", text: "游泳" },
      { value: "weightlifting", text: "举重" },
      { value: "yoga", text: "瑜伽" },
      { value: "basketball", text: "篮球" }
    ];
    const checkboxChange = (e) => {
      const values = e.detail.value;
      goalOptions.forEach((item) => {
        item.checked = values.includes(item.value);
      });
      form.goals = values;
    };
    const checkboxChange1 = (e) => {
      const values = e.detail.value;
      sportTypeOptions.forEach((item) => {
        item.checked = values.includes(item.value);
      });
      form.sportTypes = values;
    };
    const nextStep = () => {
      if (step.value < 4) {
        step.value++;
      }
    };
    const submitForm = () => {
      console.log("表单提交", form.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: logo,
        b: step.value === 1
      }, step.value === 1 ? {
        c: common_vendor.o(($event) => form.value.height = $event),
        d: common_vendor.p({
          placeholder: "请输入身高",
          borderTop: true,
          padding: ["20rpx", "32rpx"],
          isFillet: true,
          clearable: true,
          modelValue: form.value.height
        }),
        e: common_vendor.o(($event) => form.value.weight = $event),
        f: common_vendor.p({
          placeholder: "请输入体重",
          borderTop: true,
          padding: ["20rpx", "32rpx"],
          isFillet: true,
          clearable: true,
          modelValue: form.value.weight
        }),
        g: common_vendor.o(nextStep),
        h: common_vendor.o(nextStep),
        i: common_vendor.o(submitForm)
      } : {}, {
        j: step.value === 2
      }, step.value === 2 ? {
        k: common_vendor.o(($event) => form.value.gender = $event),
        l: common_vendor.p({
          placeholder: "请输入性别",
          borderTop: true,
          padding: ["20rpx", "32rpx"],
          isFillet: true,
          clearable: true,
          modelValue: form.value.gender
        }),
        m: common_vendor.o(($event) => form.value.age = $event),
        n: common_vendor.p({
          placeholder: "请输入年龄",
          borderTop: true,
          padding: ["20rpx", "32rpx"],
          isFillet: true,
          clearable: true,
          modelValue: form.value.age
        }),
        o: common_vendor.o(nextStep),
        p: common_vendor.o(nextStep),
        q: common_vendor.o(submitForm)
      } : {}, {
        r: step.value === 3
      }, step.value === 3 ? {
        s: common_vendor.f(goalOptions, (item, k0, i0) => {
          return {
            a: item.value,
            b: item.checked,
            c: common_vendor.t(item.name),
            d: item.value
          };
        }),
        t: common_vendor.o(checkboxChange),
        v: common_vendor.o(nextStep),
        w: common_vendor.o(nextStep),
        x: common_vendor.o(submitForm)
      } : {}, {
        y: step.value === 4
      }, step.value === 4 ? {
        z: common_vendor.f(sportTypeOptions, (item, k0, i0) => {
          return {
            a: item.value,
            b: item.checked,
            c: common_vendor.t(item.text),
            d: item.value
          };
        }),
        A: common_vendor.o(checkboxChange1),
        B: common_vendor.o(submitForm),
        C: common_vendor.o(submitForm),
        D: common_vendor.o(submitForm)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e8fa868b"]]);
wx.createPage(MiniProgramPage);

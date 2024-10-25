"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  (_easycom_uni_easyinput2 + _easycom_uni_data_checkbox2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_data_checkbox)();
}
const logo = "/static/Squad1.png";
const _sfc_main = {
  __name: "FirstLogin",
  setup(__props) {
    const step = common_vendor.ref(1);
    const goalOptions = [
      { text: "减脂", value: "lose_weight" },
      { text: "增肌", value: "gain_muscle" },
      { text: "健康", value: "health" }
    ];
    const sportTypeOptions = [
      { text: "跑步", value: "running" },
      { text: "游泳", value: "swimming" },
      { text: "举重", value: "weightlifting" },
      { text: "瑜伽", value: "yoga" },
      { text: "篮球", value: "basketball" }
    ];
    const form = common_vendor.ref({
      height: "",
      weight: "",
      gender: "",
      age: "",
      goals: [],
      // 运动目标
      sportTypes: []
      // 运动类型
    });
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
          clearable: true,
          modelValue: form.value.height
        }),
        e: common_vendor.o(($event) => form.value.weight = $event),
        f: common_vendor.p({
          placeholder: "请输入体重",
          clearable: true,
          modelValue: form.value.weight
        }),
        g: common_vendor.o(nextStep),
        h: common_vendor.o(nextStep)
      } : {}, {
        i: step.value === 2
      }, step.value === 2 ? {
        j: common_vendor.o(($event) => form.value.gender = $event),
        k: common_vendor.p({
          placeholder: "请输入性别",
          clearable: true,
          modelValue: form.value.gender
        }),
        l: common_vendor.o(($event) => form.value.age = $event),
        m: common_vendor.p({
          placeholder: "请输入年龄",
          clearable: true,
          modelValue: form.value.age
        }),
        n: common_vendor.o(nextStep),
        o: common_vendor.o(nextStep)
      } : {}, {
        p: step.value === 3
      }, step.value === 3 ? {
        q: common_vendor.o(($event) => form.value.goals = $event),
        r: common_vendor.p({
          localdata: goalOptions,
          mode: "tag",
          multiple: true,
          max: 3,
          modelValue: form.value.goals
        }),
        s: common_vendor.o(nextStep),
        t: common_vendor.o(nextStep)
      } : {}, {
        v: step.value === 4
      }, step.value === 4 ? {
        w: common_vendor.o(($event) => form.value.sportTypes = $event),
        x: common_vendor.p({
          localdata: sportTypeOptions,
          mode: "tag",
          multiple: true,
          max: 5,
          modelValue: form.value.sportTypes
        }),
        y: common_vendor.o(submitForm),
        z: common_vendor.o(submitForm)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e8fa868b"]]);
wx.createPage(MiniProgramPage);

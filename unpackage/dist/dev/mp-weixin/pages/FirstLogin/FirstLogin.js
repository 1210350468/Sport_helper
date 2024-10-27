"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_fui_checkbox2 = common_vendor.resolveComponent("fui-checkbox");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_label2 = common_vendor.resolveComponent("fui-label");
  const _easycom_fui_checkbox_group2 = common_vendor.resolveComponent("fui-checkbox-group");
  (_easycom_uni_easyinput2 + _easycom_fui_checkbox2 + _easycom_fui_list_cell2 + _easycom_fui_label2 + _easycom_fui_checkbox_group2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_fui_checkbox = () => "../../node-modules/firstui-uni/firstui/fui-checkbox/fui-checkbox.js";
const _easycom_fui_list_cell = () => "../../node-modules/firstui-uni/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_label = () => "../../node-modules/firstui-uni/firstui/fui-label/fui-label.js";
const _easycom_fui_checkbox_group = () => "../../node-modules/firstui-uni/firstui/fui-checkbox-group/fui-checkbox-group.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_fui_checkbox + _easycom_fui_list_cell + _easycom_fui_label + _easycom_fui_checkbox_group)();
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
      { value: "weight_loss", name: "减肥", checked: false },
      { value: "muscle_gain", name: "增肌", checked: false },
      { value: "endurance", name: "耐力", checked: false },
      { value: "flexibility", name: "柔韧性", checked: false },
      { value: "general_fitness", name: "综合健身", checked: false }
    ];
    const sportTypeOptions = [
      { value: "running", text: "跑步", checked: false },
      { value: "swimming", text: "游泳", checked: false },
      { value: "weightlifting", text: "举重", checked: false },
      { value: "yoga", text: "瑜伽", checked: false },
      { value: "basketball", text: "篮球", checked: false }
    ];
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
        h: common_vendor.o(nextStep),
        i: common_vendor.o(submitForm)
      } : {}, {
        j: step.value === 2
      }, step.value === 2 ? {
        k: common_vendor.o(($event) => form.value.gender = $event),
        l: common_vendor.p({
          placeholder: "请输入性别",
          clearable: true,
          modelValue: form.value.gender
        }),
        m: common_vendor.o(($event) => form.value.age = $event),
        n: common_vendor.p({
          placeholder: "请输入年龄",
          clearable: true,
          modelValue: form.value.age
        }),
        o: common_vendor.o(nextStep),
        p: common_vendor.o(nextStep),
        q: common_vendor.o(submitForm)
      } : {}, {
        r: step.value === 3
      }, step.value === 3 ? {
        s: common_vendor.f(goalOptions, (item, index, i0) => {
          return {
            a: "e8fa868b-7-" + i0 + "," + ("e8fa868b-6-" + i0),
            b: common_vendor.p({
              checked: item.checked,
              value: item.value,
              color: "#777CFF",
              borderColor: "#B2B2B2",
              borderRadius: "8rpx"
            }),
            c: common_vendor.t(item.name),
            d: "e8fa868b-6-" + i0 + "," + ("e8fa868b-5-" + i0),
            e: index,
            f: "e8fa868b-5-" + i0 + ",e8fa868b-4"
          };
        }),
        t: common_vendor.o(($event) => form.value.goals = $event),
        v: common_vendor.p({
          modelValue: form.value.goals
        }),
        w: common_vendor.o(nextStep),
        x: common_vendor.o(nextStep),
        y: common_vendor.o(submitForm)
      } : {}, {
        z: step.value === 4
      }, step.value === 4 ? {
        A: common_vendor.f(sportTypeOptions, (item, index, i0) => {
          return {
            a: "e8fa868b-11-" + i0 + "," + ("e8fa868b-10-" + i0),
            b: common_vendor.p({
              checked: item.checked,
              value: item.value,
              color: "#777CFF",
              borderColor: "#B2B2B2",
              borderRadius: "8rpx"
            }),
            c: common_vendor.t(item.text),
            d: "e8fa868b-10-" + i0 + "," + ("e8fa868b-9-" + i0),
            e: index,
            f: "e8fa868b-9-" + i0 + ",e8fa868b-8"
          };
        }),
        B: common_vendor.o(($event) => form.value.sportTypes = $event),
        C: common_vendor.p({
          modelValue: form.value.sportTypes
        }),
        D: common_vendor.o(submitForm),
        E: common_vendor.o(submitForm),
        F: common_vendor.o(submitForm)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e8fa868b"]]);
wx.createPage(MiniProgramPage);

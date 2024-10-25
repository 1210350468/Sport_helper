<template>
  <view class="container">
    <!-- 上半部分: 浅灰背景 -->
    <view class="upper-section">
      <image :src="logo" class="logo"></image>
      <text class="welcome-title">欢迎来到</text>
      <text class="app-name">Squad</text>
    </view>

    <!-- Step 1: 输入身高与体重 -->
    <view class="lower-section" v-if="step === 1">
      <text class="instructions">输入身高与体重，获取更准确的热量消耗</text>
      <p><br /></p>
      <text class="subtext">个人的身高体重不同，热量消耗也会有所不同。</text>

      <uni-easyinput
        v-model="form.height"
        placeholder="请输入身高"
        class="input-field"
        clearable
      ></uni-easyinput>
      <view class="spacing"></view>
      <uni-easyinput
        v-model="form.weight"
        placeholder="请输入体重"
        class="input-field"
        clearable
      ></uni-easyinput>
      <view class="spacing"></view>
      <view class="button-group">
        <button class="button secret" @click="nextStep">保密</button>
        <button class="button confirm" @click="nextStep">确定</button>
      </view>
    </view>

    <!-- Step 2: 输入性别与年龄 -->
    <view class="lower-section" v-if="step === 2">
      <text class="instructions">输入性别与年龄</text>
      <p><br /></p>
      <text class="subtext">完善个人信息，更科学地获取运动指导。</text>

      <uni-easyinput
        v-model="form.gender"
        placeholder="请输入性别"
        class="input-field"
        clearable
      ></uni-easyinput>
      <view class="spacing"></view>
      <uni-easyinput
        v-model="form.age"
        placeholder="请输入年龄"
        class="input-field"
        clearable
      ></uni-easyinput>
      <view class="spacing"></view>
      <view class="button-group">
        <button class="button secret" @click="nextStep">保密</button>

        <button class="button confirm" @click="nextStep">确定</button>
      </view>
    </view>

    <!-- Step 3: 选择运动目标 -->
    <view class="lower-section" v-if="step === 3">
      <text class="instructions">您的运动目标是？</text>
      <p><br /></p>
      <text class="subtext">了解运动目标，我们能更好地为您推送运动计划。</text>

      <uni-data-checkbox
        v-model="form.goals"
        :localdata="goalOptions"
        mode="tag"
        multiple
        :max="3"
        class="checkbox-group"
      />
      <view class="spacing"></view>
      <view class="button-group">
        <button class="button secret" @click="nextStep">保密</button>
        <button class="button confirm" @click="nextStep">确定</button>
      </view>
    </view>

    <!-- Step 4: 选择运动类型 -->
    <view class="lower-section" v-if="step === 4">
      <text class="instructions">您喜欢的运动类型是？</text>
      <p><br /></p>
      <text class="subtext">了解运动类型，我们能更好地为您推送运动计划。</text>
      <uni-data-checkbox
        v-model="form.sportTypes"
        :localdata="sportTypeOptions"
        mode="tag"
        multiple
        :max="5"
        class="checkbox-group"
      />
      <view class="spacing"></view>
      <view class="button-group">
        <button class="button secret" @click="submitForm">保密</button>
        <button class="button confirm" @click="submitForm">确定</button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const logo = "/static/Squad1.png"; // Logo 图片路径
const step = ref(1); // 当前步骤

// 运动目标选项
const goalOptions = [
  { text: "减脂", value: "lose_weight" },
  { text: "增肌", value: "gain_muscle" },
  { text: "健康", value: "health" },
];

// 运动类型选项
const sportTypeOptions = [
  { text: "跑步", value: "running" },
  { text: "游泳", value: "swimming" },
  { text: "举重", value: "weightlifting" },
  { text: "瑜伽", value: "yoga" },
  { text: "篮球", value: "basketball" },
];

// 表单数据
const form = ref({
  height: "",
  weight: "",
  gender: "",
  age: "",
  goals: [], // 运动目标
  sportTypes: [], // 运动类型
});

const nextStep = () => {
  if (step.value < 4) {
    step.value++;
  }
};

const submitForm = () => {
  console.log("表单提交", form.value);
  // 这里处理表单提交逻辑
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 上半部分: 浅灰背景 */
.upper-section {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: flex-start; /* 内容靠上对齐 */
}

.logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.welcome-title {
  font-size: 18px;
  margin-top: 10px;
}

.app-name {
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
}

/* 下半部分: 白色背景 */
.lower-section {
  background-color: white;
  flex: 1;
  padding: 20px;
}

.instructions {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtext {
  font-size: 12px;
  color: #999;
  margin-bottom: 20px;
}

/* 输入框样式 */
.input-field {
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 30px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  width: 100%;
}

/* 按钮样式 */
.button-group {
  display: flex;
  justify-content: space-between;
}

.button {
  flex: 1;
  margin: 5px;
  background-color: #333;
  color: white;
  border-radius: 25px;
  font-size: 14px;
  text-align: center;
}

.confirm {
  background-color: black;
}

.secret {
  background-color: gray;
}

.spacing {
  height: 20px;
}

.checkbox-group {
  margin-bottom: 20px;
}
.spacing {
  height: 20px;
}
</style>

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
      <view class="spacing"></view>
      <!-- <uni-easyinput
        v-model="form.height"
        placeholder="请输入身高"
        class="input-field"
        clearable
      ></uni-easyinput> -->
      <fui-input
        class="shadow-input"
        placeholder="请输入身高"
        borderTop
        :padding="['20rpx', '32rpx']"
        v-model="form.height"
        :isFillet="true"
        clearable
      ></fui-input>
      <view class="spacing"></view>
      <!-- <uni-easyinput
        v-model="form.weight"
        placeholder="请输入体重"
        class="input-field"
        clearable
      ></uni-easyinput> -->
      <fui-input
        placeholder="请输入体重"
        borderTop
        :padding="['20rpx', '32rpx']"
        v-model="form.weight"
        :isFillet="true"
        clearable
      ></fui-input>
      <view class="spacing"></view>
      <view class="button-group">
        <button class="button secret" @click="nextStep">保密</button>
        <button class="button confirm" @click="nextStep">确定</button>
        <view class="spacing"></view>
        <view class="skip-container">
          <button plain="true" class="skip-button" @click="submitForm">
            我有十分丰富的运动经验，可以直接使用→
          </button>
        </view>
      </view>
    </view>

    <!-- Step 2: 输入性别与年龄 -->
    <view class="lower-section" v-if="step === 2">
      <text class="instructions">输入性别与年龄</text>
      <p><br /></p>
      <text class="subtext">完善个人信息，更科学地获取运动指导。</text>
      <view class="spacing"></view>
      <!-- <uni-easyinput
        v-model="form.gender"
        placeholder="请输入性别"
        class="input-field"
        clearable
      ></uni-easyinput> -->
      <fui-input
        placeholder="请输入性别"
        borderTop
        :padding="['20rpx', '32rpx']"
        v-model="form.gender"
        :isFillet="true"
        clearable
      ></fui-input>
      <view class="spacing"></view>
      <!-- <uni-easyinput
        v-model="form.age"
        placeholder="请输入年龄"
        class="input-field"
        clearable
      ></uni-easyinput> -->
      <fui-input
        placeholder="请输入年龄"
        borderTop
        :padding="['20rpx', '32rpx']"
        v-model="form.age"
        :isFillet="true"
        clearable
      ></fui-input>
      <view class="spacing"></view>
      <view class="button-group">
        <button class="button secret" @click="nextStep">保密</button>
        <button class="button confirm" @click="nextStep">确定</button>
        <view class="spacing"></view>
        <view class="skip-container">
          <button plain="true" class="skip-button" @click="submitForm">
            我有十分丰富的运动经验，可以直接使用→
          </button>
        </view>
      </view>
    </view>

    <!-- Step 3: 选择运动目标 -->
    <view class="lower-section" v-if="step === 3">
      <text class="instructions">您的运动目标是？</text>
      <p><br /></p>
      <text class="subtext">了解运动目标，我们能更好地为您推送运动计划。</text>
      <view class="spacing"></view>
      <!-- 多选框，选择运动目标，使用uniapp的基础组件 -->
      <view class="uni-list">
        <checkbox-group @change="checkboxChange">
          <label
            class="uni-list-cell uni-list-cell-pd"
            v-for="item in goalOptions"
            :key="item.value"
          >
            <view class="checkbox-container">
              <checkbox :value="item.value" :checked="item.checked" />
              <view class="checkbox-label">{{ item.name }}</view>
            </view>
          </label>
        </checkbox-group>
      </view>
      <view class="spacing"></view>
      <view class="button-group">
        <button class="button secret" @click="nextStep">保密</button>
        <button class="button confirm" @click="nextStep">确定</button>
      </view>
      <view class="spacing"></view>
      <view class="skip-container">
        <button plain="true" class="skip-button" @click="submitForm">
          我有十分丰富的运动经验，可以直接使用→
        </button>
      </view>
    </view>

    <!-- Step 4: 选择运动类型 -->
    <view class="lower-section" v-if="step === 4">
      <text class="instructions">您喜欢的运动类型是？</text>
      <p><br /></p>
      <text class="subtext">了解运动类型，我们能更好地为您推送运动计划。</text>
      <view class="spacing"></view>
      <view class="uni-list">
        <checkbox-group @change="checkboxChange1">
          <label
            class="uni-list-cell uni-list-cell-pd"
            v-for="item in sportTypeOptions"
            :key="item.value"
          >
            <view class="checkbox-container">
              <checkbox :value="item.value" :checked="item.checked" />
              <view class="checkbox-label">{{ item.text }}</view>
            </view>
          </label>
        </checkbox-group>
      </view>
      <view class="spacing"></view>
      <view class="button-group">
        <button class="button secret" @click="submitForm">保密</button>
        <button class="button confirm" @click="submitForm">确定</button>
      </view>
      <view class="spacing"></view>
      <view class="skip-container">
        <button plain="true" class="skip-button" @click="submitForm">
          我有十分丰富的运动经验，可以直接使用→
        </button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const logo = "/static/Squad1.png"; // Logo 图片路径
const step = ref(1); // 当前步骤

const form = ref({
  height: "",
  weight: "",
  gender: "",
  age: "",
  goals: [],
  sportTypes: [],
});
const goalOptions = [
  { value: "weight_loss", name: "减肥" },
  { value: "muscle_gain", name: "增肌" },
  { value: "endurance", name: "耐力" },
  { value: "flexibility", name: "柔韧性" },
  { value: "general_fitness", name: "综合健身" },
];
const sportTypeOptions = [
  { value: "running", text: "跑步" },
  { value: "swimming", text: "游泳" },
  { value: "weightlifting", text: "举重" },
  { value: "yoga", text: "瑜伽" },
  { value: "basketball", text: "篮球" },
];

const checkboxChange = (e) => {
  const values = e.detail.value;
  goalOptions.forEach((item) => {
    item.checked = values.includes(item.value);
  });
  form.goals = values; // 更新选中的运动目标
};
const checkboxChange1 = (e) => {
  const values = e.detail.value;
  sportTypeOptions.forEach((item) => {
    item.checked = values.includes(item.value);
  });
  form.sportTypes = values; // 更新选中的运动类型
};
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
  background-color: white;
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
  background-color: #f5f5f5;
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
  border-radius: 30px;
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
.spacing {
  height: 20px;
}
.uni-list {
  margin: 20px 0;
}

.uni-list-cell {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.uni-list-cell-pd {
  padding-left: 15px;
}

.checkbox-container {
  display: flex;
  align-items: center;
}
.checkbox-label {
  margin-left: 10px; /* 调整文本与复选框之间的间距 */
}
.skip-container {
  background-color: #f5f5f5; /* 下半部分背景颜色 */
  position: fixed;
  bottom: 0;
  height: 50px;
}

.skip-button {
  background-color: transparent;
  color: #999;
  border: none;
  font-size: 10px;
}

</style>

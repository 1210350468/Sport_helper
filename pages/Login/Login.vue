<template>
  <view class="login-container">
    <!-- Logo 和标题 -->
    <view class="logo-container">
      <image :src="logo" class="logo"></image>
      <text class="title">Squad</text>
    </view>

    <!-- 登录表单 -->
    <view class="form-container">
      <uni-easyinput
        v-model="form.account"
        placeholder="请输入账号"
        clearable
        class="input-field"
      ></uni-easyinput>

      <view class="spacing"></view>
      <!-- 账号和密码之间的间距 -->

      <uni-easyinput
        v-model="form.password"
        placeholder="请输入密码"
        type="password"
        clearable
        class="input-field"
      ></uni-easyinput>
      <view class="spacing"></view>
      <!-- 登录按钮 -->
      <button
        :class="['login-button', { active: isPressed }]"
        @touchstart="onButtonPress"
        @touchend="onButtonRelease"
        @click="submitLogin"
      >
        登录
      </button>
      <view class="spacing"></view>
      <!-- 注册按钮 -->
      <text class="register-text" @click="goRegister">注册</text>
    </view>

    <!-- 底部协议 -->
    <view class="agreement">
      登录/注册表示您已同意
      <text class="link">《用户协议》</text> 和
      <text class="link">《隐私政策》</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const isPressed = ref(false); // 响应式变量，记录按钮是否被按下

const onButtonPress = () => {
  isPressed.value = true; // 按下时变为 true
};

const onButtonRelease = () => {
  isPressed.value = false; // 松开时恢复为 false
};
const logo = "/static/Squad1.png"; // Logo 图片路径

const form = ref({
  account: "",
  password: "",
});

const submitLogin = () => {
  if (!form.value.account || !form.value.password) {
    uni.showToast({
      title: "请输入账号和密码",
      icon: "none",
    });
    return;
  }
  console.log("提交登录表单", form.value);
  // 处理登录逻辑
};

const goRegister = () => {
  console.log("前往注册页面");
  // 跳转到注册页面逻辑
  uni.navigateTo({ url: "/pages/Register/Register" });
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  justify-content: flex-start; /* 内容靠上对齐 */
}

.logo-container {
  margin-bottom: 30px; /* 向下移动 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 120px; 
  height: 120px;
  border-radius: 50%;
}

.title {
  font-size: 28px; 
  font-weight: bold;
  margin-top: 10px;
}

.input-field {
  border-radius: 25px;
}
.form-container {
  width: 100%;
  padding: 0 20px;
}

.spacing {
  height: 20px; /* 账号和密码之间的间距 */
}

.login-button {
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  text-align: center;
  transition: background-color 0.3s ease; /* 添加平滑过渡效果 */

  &.active {
    background-color: #333; /* 按下时变暗 */
  }
}

.register-text {
  margin-top: 10px;
  font-size: 14px;
  color: #999;
  text-align: left; /* 左对齐 */
  padding-left: 10px;
}

.agreement {
  font-size: 12px;
  color: #999;
  margin-top: 20px;
  text-align: center;
}

.link {
  color: #007bff;
  cursor: pointer;
}
</style>

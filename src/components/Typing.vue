<template>
  <div class="flex space-x-6 py-10 md:px-20 px-6 bg-[#F9F9F9]">
    <div><img src="@/assets/images/logo.png" alt="" /></div>
    <div class="flex-1 pt-2">
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style  lang="less">

@animationTime: 0.8s;
@dotSize: 20px;

.loader span:nth-of-type(2) {
  animation-delay: 0.2s;
}
.loader span:nth-of-type(3) {
  animation-delay: 0.6s;
}
@keyframes loader {
  0% {
    opacity: 0.9;
    transform: scale(0.5);
  }
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
}
.loader span {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 20px;
  animation: loader @animationTime infinite alternate;
}
</style>

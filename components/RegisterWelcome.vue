<script setup>
import { defineEmits,watch,ref } from 'vue'
import logoBig from "@/assets/images/big-logo.svg";
import { useRouter } from 'vue-router';


    const router = useRouter();
const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <header class="xl:container mx-auto px-4 xl:px-0">
    <div class="header-inner py-7 px-7">
        
      <button @click="goBack" class="flex gap-5 items-center select-none align-items-center">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
            <path d="M8.34235 20L0.459473 10L8.34235 0L9.74157 1.775L3.2579 10L9.74157 18.225L8.34235 20Z" fill="#AAA2D8"/>
          </svg>
        </div>
        <div class="logo">
          <img src="@/assets/images/logo.svg" alt="">
        </div>
      </button>
              
       
    </div>
</header>
  <div class="register-welcome">
    <img :src="logoBig" alt="" />
    <p class="register-welcome__postitle mt-5">
        Начни зарабатывать вместе с нами!
    </p>
    <div class="flex justify-center flex-wrap items-center gap-4 xl:gap-7 mt-7">
        <NuxtLink to="/register/applicant" class="btn register-welcome__btn">Я соискатель</NuxtLink>
        <NuxtLink to="/register/employer" class="btn register-welcome__btn">Я работодатель</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register-welcome {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__postitle {
    color: #2c1b47;
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__btn {
    padding: 12px 35px;
    min-width: 276px;
  }
  @media (max-width: 490px) {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
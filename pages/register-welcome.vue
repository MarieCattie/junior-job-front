<template>
  <!-- Экран загрузки -->
  <template v-if="loading">
    <UILoader />
  </template>
  <!-- Экран выбора роли -->
  <template v-else>
    <RegisterWelcome />
  </template>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
definePageMeta({
  middleware: ['already-auth'],
  layout: "empty",
})
const loading = ref(true)
onMounted(() => {
loading.value = false
})
</script>

<style>

</style>
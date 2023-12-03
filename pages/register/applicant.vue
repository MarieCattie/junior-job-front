<script setup>
import { ref, onMounted } from 'vue';
definePageMeta({
  layout: "empty",
  middleware: ['already-auth'],
});

const loading = ref(true)

onMounted(() => {

loading.value = false
})
</script>
<template>
    <!-- Экран загрузки -->
  <template v-if="loading">
    <UILoader />
  </template>
  <!-- Формы регистрации -->
    <template v-else>
      <FormsApplicantForm />
    </template>
</template>

<style lang="scss" scoped>

</style>
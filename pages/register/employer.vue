<script setup>
import { ref, onMounted } from 'vue';
import { VueSpinner } from 'vue3-spinners';
definePageMeta({
  layout: "empty",
  middleware: ['already-auth'],
});

const employerTypeTab = ref(0)
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
      <FormsEmployerForm />
  </template>
</template>

<style lang="scss" scoped>

</style>
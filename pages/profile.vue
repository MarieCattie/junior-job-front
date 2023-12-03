<script setup>
import { ref, onMounted } from "vue";

const loading = ref(true);
const userStore = useUserStore();

definePageMeta({
  layout: "profile",
  middleware: ["auth"],
});

onMounted(async () => {
  user.value = userStore.$state.user;
  loading.value = false;
});

const user = ref({});
</script>

<template>
  <div>
    <template v-if="loading">
      <UiLoader />
    </template>
    <template v-else>
      <template v-if="user.role">
        <template v-if="user.role.current === 'applicant'">
          <ProfileApplicant />
        </template>
        <template v-else>
          <ProfileEmployerInner />
        </template>
      </template>
    </template>
  </div>
</template>


<style lang="scss" scoped>
</style>
<template>
  <template v-if="loading">
    <UILoader />
  </template>
  <template v-else>
    <div class="container-centered">
      <h1 class="user-title">Вход</h1>
      <form @submit.prevent="signIn" class="mt-5">
          <input v-model="form.email" placeholder="Email" type="text" class="field mt-3">
          <input v-model="form.password" placeholder="Пароль" type="password" class="field mt-3">
          <button type="submit" class="btn w-full mt-3">Войти</button>
          <template v-if="formErrors">
            <div class="py-4">
              <p class="error-message" v-for="(formError, index) in formErrors" :key="index">
                {{ formError }}
              </p>
            </div>
          </template>
          <div class="mt-3">
              <p class="ask-text">Нет аккаунта? <NuxtLink to="/register-welcome" class="ask-text__link">Зарегистрироваться</NuxtLink></p>
          </div>
      </form>
  </div>
  </template>
    
</template>

<script setup>
import api from "~/api";
import translationService from '~/services/translationService';
definePageMeta({
  middleware: ['already-auth'],
  layout: "empty",
})
const userStore = useUserStore();

const form = ref({
  email: '',
  password: ''
})

const formErrors = ref({})

const loading = ref(true)

const signIn = async () => {
    const response = api.auth.login(form.value);
    response.then(async (data) => {
        console.log(data)
       userStore.setToken({ access_token: data.data.access_token, refresh_token: data.data.refresh_token });
       await userStore.fetchUser();
       useRouter().push('/profile');
    })
    .catch(
          (error) => {
             // Проверка наличия ошибок в ответе сервера
        if (error.response && error.response.data && error.response.data.message) {

          formErrors.value = error.response.data.message;
                if(Array.isArray(formErrors.value)) {
                  formErrors.value = formErrors.value.map((error) => {
                    return translationService.translateError(error, 'ru')
                })
                }
                else {
                  formErrors.value = [translationService.translateError(formErrors.value, 'ru')]
                }
        } else {
          // Обработка других видов ошибок
          formErrors.value = ["Ошибка отправки формы"];
          console.error('Ошибка при выполнении запроса:', error);
        }
          }
        )
    
    
    

};

onMounted(() => {
  loading.value = false
})
</script>

<style lang="scss" scoped>
.ask-text {
    color: #604D9E;
text-align: center;
font-family: 'Source Sans Pro';
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;

&__link {
    color: #2C1B47;
font-family: 'Source Sans Pro';
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
cursor: pointer;
}
}
</style>
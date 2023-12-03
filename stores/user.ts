import { defineStore } from 'pinia'
import api from '~/api';
import type { Customer, Login, Token, User } from '~/types';

export const useUserStore = defineStore('user', () => {
  const user = ref();
  const payload = ref('');
  const roles = ref('');

  const access_token = useCookie('MY_COOKIE', {
    maxAge: 60 * 60
  });
  // const access_token = ref('')
  const refresh_token = useCookie('MY_COOKIE', {
    maxAge: 60 * 60
  });

  const setToken = (data?: Token) => {
    access_token.value = data?.access_token;
    refresh_token.value = data?.refresh_token;
  };

  const setUser = (data?: any) => (user.value = data)

  const fetchUser = async () => {
    if(access_token.value) {
      try {
        const response = await api.users.my()
        await  setUser(response.data)
      } catch (error) {
        await setUser();
        console.log(error)
      }
    }
  };

  const logout = () => {
    setToken();
    setUser();
  }

  const refresh = async () => {
    const response = await api.auth.refresh({
      access_token: access_token.value, 
      refresh_token: refresh_token.value
  })
  if(response.data.access_token) {
      access_token.value = response.data.access_token
  }
  if(response.data.refresh_token) {
      refresh_token.value = response.data.refresh_token
  }
  }

  const getPayload = async () => {
    await fetchUser();
    const tokenParts = access_token.value.split('.');
    if (tokenParts.length !== 3) {
      throw new Error('Invalid JWT format');
    }
  
    const payload = tokenParts[1];
      const decodedPayload = atob(payload);
      console.log(decodedPayload)
      try {
          payload.value = JSON.parse(decodedPayload);
      } catch (error: any) {
          console.error('Error decoding JWT payload:', error.message);
          throw new Error('Error decoding JWT payload');
      }
  }
  const setRole = async(role: string) => {
    try {
        await api.roles.change({role: role})
        await refresh()
        await fetchRoles()
    }
    catch(error: any) {
        console.log(error)
    } 
  }

  const fetchRoles = async () => {
    try {
        const response = await api.roles.my()
        roles.value = response.data
        await getPayload()
    }
    catch(error: any) {
        console.log(error)
    }
  }


  const currentRoleId = () => {
    return roles.value[payload.value.role].uuid
  }

  return {user, access_token, refresh_token, logout, fetchUser, refresh, setToken, setUser, getPayload, currentRoleId, fetchRoles, setRole, payload, roles}

});

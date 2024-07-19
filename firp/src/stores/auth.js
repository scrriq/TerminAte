import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'
import axiosApiInstance from '@/api'

const apiKey = process.env.VUE_APP_VITE_API_KEY_FIREBASE

export const useAuthStore = defineStore('auth', () => {

  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: ''
  })

  const error = ref('');
  const loader = ref(false)

  const auth = async(payload, type) => {
    const stringUrl = type === 'signup' ? 'signUp' : 'signInWithPassword';
    error.value = ''
    loader.value = true
    try{
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`, {
        ...payload,
        returnSecureToken: true
      });
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
      }
      localStorage.setItem('userTokens', JSON.stringify({
        token: userInfo.value.token,
        refreshToken: userInfo.value.refreshToken,
      
      }))
    }catch(err){
      const er = err.response.data.error.message
      console.log(er)
        switch(er){
          case 'EMAIL_EXISTS':
            error.value = 'The email address is already in use by another account.'
            break
          case 'OPERATION_NOT_ALLOWED':
            error.value = 'Password sign-in is disabled for this project.'
            break
          case 'INVALID_LOGIN_CREDENTIALS':
            error.value = 'Invalid username or password'
            break
          case 'INVALID_EMAIL':
            error.value = "INVALID_EMAIL"
            break
          default:
            error.value = 'Error'
            break
        }
        throw error.value
    } finally {
      loader.value = false
    }
  }
  const logout = () => {
    userInfo.value = {
      token: '',
      email: '',
      userId: '',
      refreshToken: ''
    }
  }
  return { auth, userInfo, error, loader, logout}
})


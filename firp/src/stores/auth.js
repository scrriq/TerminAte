import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'

console.log(import.meta)
const apiKey = processgut.env.VUE_APP_VITE_API_KEY_FIREBASE;

export const useAuthStore = defineStore('auth', () => {

  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refrechToken: '',
    expiresIn: '',
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
      console.log(
        response.data
      );
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refrechToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
      }
    }catch(err){
      console.log(err.response.data.error.message)
        switch(err.response.data.error.message){
          case 'EMAIL_EXISTS':
            error.value = 'The email address is already in use by another account.'
            break
          
          case 'OPERATION_NOT_ALLOWED':
            error.value = 'Password sign-in is disabled for this project.'
            break

          // case 'EMAIL_NOT_FOUND':
          //   error.value = 'There is no such user'
          //   break

          // case 'INVALID_PASSWORD':
          //   error.value = 'Incorrect password'
          //   break
          case 'INVALID_LOGIN_CREDENTIALS':
            error.value = 'Invalid username or password'
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
  return { auth, userInfo, error, loader}
})


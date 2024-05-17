import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'

const apiKey = "AIzaSyCHIpRf4SPGw5z7oYIYs_RruNb28M5nck4";

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

  const signup = async(payload) => {
    error.value = ''
    loader.value = true
    try{
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        ...payload,
        returnSecureToken: true
      });
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refrechToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
      }
      loader.value = false
    }catch(err){
        switch(err.response.data.error.message){
          case 'EMAIL_EXISTS':
            error.value = 'The email address is already in use by another account.'
            break
          
          case 'OPERATION_NOT_ALLOWED':
            error.value = 'Password sign-in is disabled for this project.'
            break
            
          default:
            error.value = 'Error dsgsdgsdgsdg'
            break
        }
        loader.value = false
    }
  }
  return { signup, userInfo, error, loader}
})


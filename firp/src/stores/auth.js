import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'

const apiKey = "AIzaSyCHIpRf4SPGw5z7oYIYs_RruNb28M5nck4";

export const useAuthStore = defineStore('auth', () => {
  const signup = async(payload) => {
    try{
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        ...payload,
        returnSecureToken: true
      });
      console.log(response.data);
    }catch(err){
        console.log(err.response);
    }
  }
  return { signup}
})


import { defineStore } from "pinia";
import axiosApiInstance from "@/api";
import { useAuthStore } from "./auth";
import {ref} from 'vue'
import { computed } from "vue";

export const useAccountStore = defineStore('account',() =>
    {
        const userId = useAuthStore().userInfo.userId;
        const userInformation = ref({
            name: 'Not stated',
            email: 'Not stated',
            age: 0,
            lang: 'Not stated',
            birth: 'Not stated',
            description: 'Not stated',
        })


        const fetchInformationAboudUser = async() => {            
            try{
                const response = await axiosApiInstance.get(`https://enlino-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/userData.json?`);
                
                userInformation.value.name = response.data.name;
                userInformation.value.email = response.data.email;
                userInformation.value.age = response.data.age;
                userInformation.value.lang = response.data.lang;
                userInformation.value.birth = response.data.birth;
                userInformation.value.description = response.data.description;
                
                console.log("Ответ пришел");
                
                
            }catch(err){
                console.log(err);      
            }
        }

        const setInformationAboudUser = async(newUserInfo) => {
            try{
                await axiosApiInstance.put(`https://enlino-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/userData.json?`, newUserInfo);
                alert("Информация успешно сохранена");
                
                
                await fetchInformationAboudUser();
            }catch(err){
                console.log("пост отправился не удачно");
                
                console.log(err);
            }
        }
        return { userInformation, fetchInformationAboudUser, setInformationAboudUser}
    }
)
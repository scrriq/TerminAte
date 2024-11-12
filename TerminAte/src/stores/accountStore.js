import { defineStore } from "pinia";
import axiosApiInstance from "@/api";
import { useAuthStore } from "./auth";
import { usePostsStore } from "./postsStore";
import {ref} from 'vue'
import { computed } from "vue";

export const useAccountStore = defineStore('account',() =>
    {
        let userId = ""
        const userInformation = ref({
            name: '',
            email: '',
            age: 0,
            lang: '',
            birth: '',
            description: '',
        })


        const fetchInformationAboudUser = async() => {            
            try{
                userId = useAuthStore().userInfo.userId;                
                const response = await axiosApiInstance.get(`https://enlino-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/userData.json?`);
                if(response.data != null){
                    userInformation.value.name = response.data.name;
                    userInformation.value.email = response.data.email;
                    userInformation.value.age = response.data.age;
                    userInformation.value.lang = response.data.lang;
                    userInformation.value.birth = response.data.birth;
                    userInformation.value.description = response.data.description;
                };
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
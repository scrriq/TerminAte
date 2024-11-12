<template lang="">
    <div class="account__data">
        <div class="account__decoration">
            <div class="account__header">

            </div>
            <div class="account__photo">
                
            </div>
        </div>
        <div class="account__record">
            <div class="data__nameAndAge">
                Name: {{userInformation.name || "Not stated"}}, Age: {{userInformation.age || "Not stated"}}
            </div>
            <div class="data__languages">
                Lang: {{userInformation.lang || "Not stated"}}
            </div>
            <div class="data__discription">
                Description: {{userInformation.description || "Not stated"}}
            </div>
        </div>
        <div class="account__addition">
            <div class="data__vocabulary">
                Vocabulary:  2000 term 
            </div>
            <div class="data__games">
                Games:  20
            </div>
        </div>
    </div>      
</template>
<script setup>
import { useAccountStore } from '@/stores/accountStore';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
const accountStore = useAccountStore();
onMounted(async()=>{
    await accountStore.fetchInformationAboudUser(accountStore.userInformation);
})
const userInformation = accountStore.userInformation;
</script>
<style lang="css">


.account__data {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 2fr 5fr 5fr / 1fr;
    background-color: #2D2D2D;
}
.account__decoration {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: turquoise;
}
.account__header {
}   
.account__photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: teal;
}
.account__record {
    width: 100%;    
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 10px 40px;
    text-align: center;
    .data__nameAndAge {
        font-size: 32px;
    }
    .data__languages {
        font-size: 28px;
    }
    .data__discription {
        font-size: 24px;
    }
}
.account__addition {
    width: 100%;    
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    .data__vocabulary {
        font-size: 30px;
    }
    .data__games {
        font-size: 30px;
    }
}
</style>